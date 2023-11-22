import React from "react";
import data from "../assets/data.json";
import { FcManager } from "react-icons/fc";
const ChatResult = ({ chatId }) => {
  return (
    <div>
      <h4 className="py-6"></h4>
      {data.map((item, i) => (
        <div key={i} className="sm:mx-7 lg:mx-0 mx-3">
          {item.tasks.map((task, j) => (
            <div key={j}>
              {task.id === chatId ? (
                <div key={j}>
                  {task.result.map((q, k) => (
                    <div key={k}>
                      <div className="mt-4">
                        <div className="flex gap-3 items-center">
                          <FcManager className="text-lg rounded-full border border-slate-300 w-7 h-7" />
                          <span className=" font-medium">You</span>
                        </div>
                        <p className="ms-10">{q.questions}</p>
                      </div>
                      <div className="mt-4">
                        <div className="flex gap-3 items-center">
                          <img src="/greenLogo.png" alt="logo" className="rounded-full w-7 h-7 p-[2px]" />
                          <span className=" font-medium">ChatGPT</span>
                        </div>
                        <p className="ms-10">{q.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatResult;
