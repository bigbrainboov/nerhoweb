import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { id: 1, question: 'What products and services does Nerho offer?', answer: 'Nerho offers solar and renewable energy solutions, electricals, fittings, plumbing, security CCTV, and more for homes and businesses.' },
  { id: 2, question: 'How does Pay Small Small work?', answer: 'You make a down payment of a specified percentage of your purchase, then complete the remaining balance over an agreed period. The percentage and repayment period depend on the plan offered for your purchase.' },
  { id: 3, question: 'What is Pay With Partner?', answer: 'Pay With Partner is an interest-based Pay Small Small plan. You begin with a percentage down payment and repay the remaining balance over an agreed period.' },
  { id: 4, question: 'What is Pay With Zero?', answer: 'Pay With Zero is an interest-free Pay Small Small plan. You make a percentage down payment and complete the balance over an agreed period without interest.' },
  { id: 5, question: 'Who can choose Pay With Zero?', answer: 'Pay With Zero is for customers who prefer an interest-free payment option, including our Muslim brothers and sisters. Contact Nerho to discuss the plan for your purchase.' },
  { id: 6, question: 'Can I pay for my purchase in full?', answer: 'Yes. Choose Pay Now to pay the full amount for your purchase instead of spreading the balance over instalments.' },
  { id: 7, question: 'What deposit percentage and repayment period are available?', answer: 'Contact Nerho to confirm the deposit percentage, repayment period, and applicable terms for the product and plan you are considering.' },
  { id: 8, question: 'Where can I find Nerho?', answer: 'Nerho started in Warri, Delta State, and now also has a branch in Asaba, Delta State.' },
  { id: 9, question: 'How can I learn more about a product or payment plan?', answer: 'Use the Contact Us option or visit our Warri or Asaba branch to discuss products, services, and payment options with the Nerho team.' },
];

interface FAQSectionProps {
  onAskAnythingClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onAskAnythingClick,
}) => {
  // The second item is open by default, matching the reference.
  const [openIds, setOpenIds] = useState<number[]>([2]);

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="design-section faq-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Heading, subtitle & Ask Anything button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-200/60">
              <span className="text-xs sm:text-sm font-semibold text-blue-600">
                FAQ's
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B192C] tracking-tight leading-tight">
              Get Answers To All Of Your Questions
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md">
              Learn about our products, Pay Small Small plans, and locations.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onAskAnythingClick}
                className="px-6 py-2.5 text-sm font-semibold text-blue-600 bg-white border border-blue-600 rounded-full hover:bg-blue-50 active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                Ask Nerho Anything
              </button>
            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-semibold text-sm sm:text-base text-[#0B192C] hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-xs border border-slate-100">
                      {isOpen ? (
                        <X className="w-4 h-4 text-slate-900" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-900" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${faq.id}`} className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-200/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
