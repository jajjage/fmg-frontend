import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I fund my wallet?",
    answer:
      "You can easily fund your wallet via instant bank transfer or card payment. All transactions are secure and processed automatically.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through CBN-regulated gateways with bank-grade encryption to protect your financial information.",
  },
  {
    question: "How long does data delivery take?",
    answer:
      "Data delivery is 100% instant. Once your request is confirmed from your wallet balance, your data bundle is credited immediately.",
  },
  {
    question: "What happens if my bill payment fails?",
    answer:
      "In the rare case of a third-party biller failure, the debited amount is automatically reversed back to your FMG wallet. You can contact 24/7 support anytime.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            Have questions? We&apos;ve got answers to guide you.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-4 bg-card text-card-foreground">
              <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
