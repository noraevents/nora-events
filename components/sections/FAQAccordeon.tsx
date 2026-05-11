"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  reponse: string;
}

interface FAQAccordeonProps {
  items: FAQItem[];
  titre?: string;
}

export function FAQAccordeon({ items, titre = "Questions fréquentes" }: FAQAccordeonProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-beige">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl text-anthracite text-center mb-12">{titre}</h2>

        <div className="space-y-2">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="bg-ivoire rounded-lg border border-beige overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${item.id}`}
                >
                  <span className="font-body font-medium text-anthracite">{item.question}</span>
                  <span className="flex-shrink-0 text-terracotta">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  id={`faq-${item.id}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-5 font-body text-sm text-anthracite/70 leading-relaxed">
                    {item.reponse}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
