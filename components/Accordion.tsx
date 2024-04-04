"use client";

import { useState } from "react";

interface AccordionData {
  question: string;
  answer: string;
}
const Accordion = ({ data }: { data: AccordionData[] }) => {
  const [currentActive, setCurrentActive] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {data.map((item, index) => (
        <div className="bg-peach-600 px-5 rounded-lg" key={index}>
          <div
            className="flex items-center justify-between cursor-pointer py-5"
            onClick={() => setCurrentActive(index)}
          >
            <h4 className="text-grey-700">{item.question}</h4>
            <div
              className={`transition-transform duration-300 ${
                currentActive === index ? "rotate-45" : ""
              }`}
            ></div>
          </div>
          <div
            className={`text-grey-600 transition-all duration-300 ${
              currentActive !== index
                ? "max-h-0 opacity-0"
                : "max-h-[1000px] opacity-100 pb-5"
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
