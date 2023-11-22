import React from "react";
import { RiUpload2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
const Header = ({ chatId, ber }) => {
  return (
    <div
      className={` ${
        !ber ? " w-[100%] pr-5" : " w-[80%]"
      } fixed top-0 bg-white/95 z-10 h-14  p-2 font-semibold `}
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
  );
};

export default Header;
