import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accodian = () => {
  const accordionData = [
    {
      id: "about-api",
      title: "🐶 About the Dog API",
      content:
        "The Dog CEO API provides free and open access to random dog pictures. It’s great for learning how to work with APIs in frontend apps.",
    },
    {
      id: "features-used",
      title: "📦 Features Used",
      content:
        "This app uses Fetch API, useEffect, useState, and the ShadCN UI Carousel to display random dog images from the API.",
    },
    {
      id: "tech-stack",
      title: "🚀 Tech Stack",
      content:
        "Built with React, TypeScript, Tailwind CSS, and ShadCN UI. Powered by the Dog CEO API for image data.",
    },
  ];

  return (
    <div className="poppins-font mx-32 ">
      <Accordion type="single" collapsible>
        {accordionData.map((item) => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accodian;
