"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  nom: z.string().min(2, "Votre prénom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro invalide").max(15),
  typeEvenement: z.string().min(1, "Sélectionnez un type d'événement"),
  dateEvenement: z.string().min(1, "La date est requise"),
  lieu: z.string().min(1, "Le lieu ou la région est requis"),
  nombreInvites: z.string().min(1, "Nombre d'invités requis"),
  offre: z.string().optional(),
  message: z.string().optional(),
  rgpd: z.literal(true, { error: "Vous devez accepter" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  offrePreselect?: string;
}

export function FormulaireDevis({ offrePreselect }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { offre: offrePreselect ?? "" },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      window.location.href = "/merci";
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full px-4 py-3 rounded border text-anthracite bg-ivoire font-body text-sm focus:outline-none focus:border-terracotta transition-colors",
      hasError ? "border-red-400" : "border-beige"
    );

  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-body font-medium text-anthracite mb-1">
            Prénom & Nom *
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="name"
            className={inputClass(!!errors.nom)}
            {...register("nom")}
          />
          {errors.nom && <p className={errorClass}>{errors.nom.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-body font-medium text-anthracite mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-body font-medium text-anthracite mb-1">
            Téléphone *
          </label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            className={inputClass(!!errors.telephone)}
            {...register("telephone")}
          />
          {errors.telephone && <p className={errorClass}>{errors.telephone.message}</p>}
        </div>

        {/* Type événement */}
        <div>
          <label htmlFor="typeEvenement" className="block text-sm font-body font-medium text-anthracite mb-1">
            Type d'événement *
          </label>
          <select
            id="typeEvenement"
            className={inputClass(!!errors.typeEvenement)}
            {...register("typeEvenement")}
          >
            <option value="">Sélectionner...</option>
            <option value="Mariage">Mariage</option>
            <option value="Baptême">Baptême</option>
            <option value="Anniversaire">Anniversaire</option>
            <option value="Événement privé">Événement privé</option>
          </select>
          {errors.typeEvenement && <p className={errorClass}>{errors.typeEvenement.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="dateEvenement" className="block text-sm font-body font-medium text-anthracite mb-1">
            Date prévue *
          </label>
          <input
            id="dateEvenement"
            type="text"
            placeholder="Ex: Juin 2026"
            className={inputClass(!!errors.dateEvenement)}
            {...register("dateEvenement")}
          />
          {errors.dateEvenement && <p className={errorClass}>{errors.dateEvenement.message}</p>}
        </div>

        {/* Nombre d'invités */}
        <div>
          <label htmlFor="nombreInvites" className="block text-sm font-body font-medium text-anthracite mb-1">
            Nombre d'invités *
          </label>
          <select
            id="nombreInvites"
            className={inputClass(!!errors.nombreInvites)}
            {...register("nombreInvites")}
          >
            <option value="">Sélectionner...</option>
            <option value="Moins de 30">Moins de 30</option>
            <option value="30 à 60">30 à 60</option>
            <option value="60 à 100">60 à 100</option>
            <option value="100 à 150">100 à 150</option>
            <option value="Plus de 150">Plus de 150</option>
          </select>
          {errors.nombreInvites && <p className={errorClass}>{errors.nombreInvites.message}</p>}
        </div>
      </div>

      {/* Lieu */}
      <div>
        <label htmlFor="lieu" className="block text-sm font-body font-medium text-anthracite mb-1">
          Lieu ou région envisagé *
        </label>
        <input
          id="lieu"
          type="text"
          placeholder="Ex: Château en Normandie, Paris 16e, à définir..."
          className={inputClass(!!errors.lieu)}
          {...register("lieu")}
        />
        {errors.lieu && <p className={errorClass}>{errors.lieu.message}</p>}
      </div>

      {/* Offre */}
      <div>
        <label htmlFor="offre" className="block text-sm font-body font-medium text-anthracite mb-1">
          Offre souhaitée (optionnel)
        </label>
        <select id="offre" className={inputClass(false)} {...register("offre")}>
          <option value="">Je ne sais pas encore</option>
          <option value="Le Jour J Serein">Le Jour J Serein — À partir de 1 800 €</option>
          <option value="L'Essentiel">L'Essentiel — À partir de 2 800 €</option>
          <option value="Clé en Main">Clé en Main — À partir de 4 000 €</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-body font-medium text-anthracite mb-1">
          Dites-moi en quelques mots ce qui vous importe le plus
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Ex: On a déjà choisi le traiteur, on cherche surtout quelqu'un pour coordonner le Jour J et négocier les derniers devis..."
          className={inputClass(false)}
          {...register("message")}
        />
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-3">
        <input
          id="rgpd"
          type="checkbox"
          className="mt-1 accent-terracotta"
          {...register("rgpd")}
        />
        <label htmlFor="rgpd" className="text-xs text-anthracite/70 font-body leading-relaxed">
          J'accepte que mes données soient utilisées pour me recontacter. Aucune revente, aucune relance
          commerciale agressive.{" "}
          <a href="/politique-confidentialite" className="underline hover:text-terracotta">
            Politique de confidentialité
          </a>
        </label>
      </div>
      {errors.rgpd && <p className={errorClass}>{errors.rgpd.message}</p>}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full justify-center"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Une erreur s'est produite. Écrivez-moi directement à contact@noraevents.fr
        </p>
      )}

      <p className="text-xs text-center text-anthracite/50">
        Pas d'engagement. Je vous réponds sous 24h.
      </p>
    </form>
  );
}
