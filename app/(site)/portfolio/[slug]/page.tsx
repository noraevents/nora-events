import { notFound } from "next/navigation";

// Portfolio vide au lancement — les études de cas seront ajoutées par Claude Code au fur et à mesure
export async function generateStaticParams() {
  return [];
}

export default function EtudeDeCasPage() {
  notFound();
}
