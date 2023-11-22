import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { FcManager } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const Sideber = ({ setChatId, updatData, setSelectDay, responsive, setResponsive }) => {
  const updateTasks = () => {
    setChatId("");
  };

  return (
    <div>
      <div className="sideber max-h-screen lg:block hidden">
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
      {/*====== for Resposive========== */}
      {responsive && (
        <div
          onClick={() => setResponsive(false)}
          className=" lg:hidden z-50 absolute top-0 right-0 bottom-0 left-0 bg-[#07070736]"
        >
          <div className="sideber  absolute top-0 left-0 bottom-0  z-[999]  w-64">
            <span
              onClick={() => setResponsive(false)}
              className=" absolute top-4 -right-12 flex justify-center items-center text-white text-2xl border-2 border-slate-100 w-10 h-10"
            >
              <RxCross2 />
            </span>
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
        </div>
      )}
    </div>
  );
};

export default Sideber;
