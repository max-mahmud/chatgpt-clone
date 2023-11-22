import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import data from "../assets/data.json";
import { IoDiamondSharp } from "react-icons/io5";
import { FcManager } from "react-icons/fc";

const Sideber = ({ setChatId, updatData, setSelectDay }) => {
  const updateTasks = () => {
    setChatId("");
  };

  return (
    <div className="sideber max-h-screen">
      <div className="content custom-scrollbar text-white ">
        <div
          onClick={updateTasks}
          className="m-4 flex justify-between items-center hover:bg-white/20 p-[6px] rounded-md cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            <img src="/ChatLogo2.png" alt="logo" className="bg-white rounded-full w-7 h-7 p-[2px]" />
            <h3 className="text-[13px] font-medium">New chat</h3>
          </div>
          <span>
            <FaRegEdit />
          </span>
        </div>
        <div className="mx-3">
          {updatData.map((item, i) => (
            <div key={i} className="mt-4">
              <span className="text-white/50 text-xs py-4 p-[6px]">{item.day}</span>
              {item.tasks.map((task, j) => (
                <div
                  onClick={() => {
                    setChatId(task.id);
                    setSelectDay(item.day);
                  }}
                  key={j}
                  className="py-2 hover:bg-white/20 p-[6px] h-10 cursor-pointer overflow-hidden rounded-md"
                >
                  <span className="text-[14px] font-normal">{task.taskName}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[110px] p-4 bg-[#0a0a0a] w-full text-white">
        <div className="flex gap-3 items-center hover:bg-white/20 p-[6px] rounded-md">
          <IoDiamondSharp className="w-6 h-6 border border-sky-100 p-1 rounded-full" />
          <h4 className="text-sm font-medium">Upgrade</h4>
        </div>
        <div className="flex gap-3 items-center hover:bg-white/20 p-[6px] rounded-md">
          <FcManager className="text-lg rounded-full border border-slate-300 w-7 h-7" />
          <h4 className="text-sm font-medium">Mahmud Hossain</h4>
        </div>
      </div>
    </div>
  );
};

export default Sideber;
