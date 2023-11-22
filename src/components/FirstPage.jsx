import React from "react";

const FirstPage = () => {
  let data = [
    {
      qna: "Explain what this bash ",
      ans: "cat config.yaml | awk NF",
    },
    {
      qna: "Show me a code snippet",
      ans: "website's sticky header in CSS",
    },
    {
      qna: "Make up a 5-sentence ",
      ans: "a tooth-brushing shark superhero",
    },
    {
      qna: "Sharky patrolled the water",
      ans: "gleaming smile and a friendly demeanor",
    },
  ];
  return (
    <div className="mx-4 mt-4 h-[82vh] flex flex-col justify-between">
      <div className="mt-28 flex justify-center items-center flex-col">
        <img src="/ChatLogo2.png" alt="logo" className="w-16 h-16 border border-1 rounded-full" />
        <h3 className="text-2xl font-medium ">How can I help you today?</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-20">
        {data.map((item, i) => (
          <div className="border border-slate-300 rounded-lg p-2" key={i}>
            <p className="text-sm ">{item.qna}</p>
            <span className="text-sm text-slate-400">{item.ans}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstPage;