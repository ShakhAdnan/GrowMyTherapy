import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16" id="faq">
      <h2 className="text-3xl font-light text-center text-[#2c2c2c] mb-8">
        Frequently Asked Questions
      </h2>
      <h3 className="text-xl font-medium text-[#2c2c2c] mb-4">Therapy</h3>
      <Accordion type="single" collapsible className="w-full border-t border-[#94b0b0]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-[#29526c] text-lg font-light hover:underline">
            Do you accept insurance?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-sm leading-relaxed">
            No, but a superbill is provided for self-submission.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-[#29526c] text-lg font-light hover:underline">
            Are online sessions available?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-sm leading-relaxed">
            Yes—all virtual sessions via Zoom.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left text-[#29526c] text-lg font-light hover:underline">
            What is your cancellation policy?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-sm leading-relaxed">
            24-hour notice required.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
