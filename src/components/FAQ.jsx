import React, { useState } from "react";
import Heading from "./Heading";
import { questions } from "../constants";
import Question from "./Question";

const FAQ = () => {
  return (
    <section className='py-[80px] sm:px-12 md:px-16 lg:px-20 px-4 flex flex-col justify-center items-center relative z-10 gap-[80px]' id="FAQs">
      <Heading title={"FAQ's"} />
      <div className="md:w-[60%] flex flex-col justify-center items-center gap-[30px]">
        {questions.map((question) => (
          <Question key={question.id} question={question.question} answer={question.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
