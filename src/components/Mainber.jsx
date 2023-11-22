import React, { useState, useEffect } from "react";
import Header from "./Header";
import { FaArrowUp } from "react-icons/fa";
import ChatResult from "./ChatResult";
import FirstPage from "./FirstPage";
import data from "../assets/data.json";

const Mainber = ({ chatId, setUpdateData, setChatId, selectDay, ber, setResponsive }) => {
  const [name, setName] = useState("");
  let text =
    "Some popular state management libraries in React include Redux, MobX, and Context API. Each has its advantages and is used based on the complexity and requirements of the application.";
  function sendMessage() {
    let update = [...data];
    let latestId = "";

    // Find the 'day' section
    const todayTasks = update.find((task) => task.day === selectDay);

    if (todayTasks) {
      if (!chatId) {
        const newId = Math.random() * 10000; // Generate a new ID
        todayTasks.tasks.unshift({
          id: newId,
          taskName: name,
          result: [
            {
              questions: name,
              answer: text,
            },
          ],
        });
        latestId = newId;
      } else {
        todayTasks.tasks.forEach((t) => {
          if (t.id === chatId) {
            t.result.push({
              questions: name,
              answer: text, // Set 'answer' as needed
            });
          }
        });
      }
    }

    setUpdateData(update);
    setName("");
    if (!chatId) {
      setChatId(latestId);
      setName("");
    }
  }

  return (
    <div className="">
      <Header chatId={chatId} setChatId={setChatId} ber={ber} setResponsive={setResponsive} />
      <div className=" lg:h-[87vh] h-[83vh] lg:w-[730px] md:w-[600px] w-full mx-auto overflow-y-auto scroll-container">
        {!chatId ? <FirstPage /> : <ChatResult chatId={chatId} />}
      </div>
      {/* Message button */}
      <div className="lg:w-[795px] md:w-[600px] w-full mx-auto lg:pr-8 z-0 px-2 ">
        <div className="flex items-center justify-between p-[2px] relative">
          <input
            type="text"
            placeholder="Message ChatGPT.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 py-3 px-4 bg-white rounded-xl border border-gray-400 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className={`ml-2 py-2 ${
              name ? "bg-slate-700" : "bg-slate-200"
            } text-white px-2 absolute top-3 right-3 rounded-lg`}
          >
            <FaArrowUp />
          </button>
        </div>
        <p className="text-xs text-center">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
};

export default Mainber;
