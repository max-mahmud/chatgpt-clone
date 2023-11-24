import React from "react";
import { RiUpload2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
const Header = ({ chatId, setChatId, ber, setResponsive }) => {
  return (
    <div>
      <div className="fixed z-20  bg-white lg:hidden top-0 right-0 left-0 border-b border-gray-300">
        <div className="flex justify-between items-center m-2 ">
          <div>
            <span onClick={() => setResponsive(true)} className="text-xl ">
              <BiMenuAltLeft />
            </span>
          </div>
          <div>
            <span>New Chat</span>
          </div>
          <div>
            <span onClick={() => setChatId("")} className="text-lg">
              <FiEdit />
            </span>
          </div>
        </div>
      </div>
      <div
        className={` ${
          !ber ? " w-[99%] pr-4" : " lg:w-[78%] w-full"
        } fixed lg:top-0 top-10 bg-white/95 z-10 h-14  p-2 font-semibold `}
      >
        <div className="flex justify-between items-center pr-3">
          <button className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50">
            ChatGPT <span className="text-slate-400">3.5</span>{" "}
            <FaChevronDown className="text-xs text-slate-400" />
          </button>
          {chatId ? (
            <button className="btn relative btn-neutral btn-small flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-lg border border-token-border-medium focus:ring-0">
              <RiUpload2Line className="text-lg" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
