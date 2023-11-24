import React, { useState } from "react";
import Sideber from "../components/Sideber";
import Mainber from "../components/Mainber";
import data from "../assets/data.json";
import { FaGripLinesVertical } from "react-icons/fa";
import { FiChevronsLeft } from "react-icons/fi";
import { LuChevronsRight } from "react-icons/lu";

const Home = () => {
  const [chatId, setChatId] = useState("");
  let [updatData, setUpdateData] = useState(data);
  const [selectDay, setSelectDay] = useState(data[0].day);
  const [ber, setBer] = useState(true);
  const [responsive, setResponsive] = useState(false);

  return (
    <div className="flex ">
      <div
        className={`${
          ber ? "lg:w-[295px]   w-0 " : "w-0"
        } flex gap-1  transition-all duration-200  items-center z-40`}
      >
        {ber && (
          <Sideber
            setChatId={setChatId}
            updatData={updatData}
            setSelectDay={setSelectDay}
            responsive={responsive}
            setResponsive={setResponsive}
          />
        )}

        <span onClick={() => setBer(!ber)} className="cursor-pointer hidden text-xl lg:block">
          {ber ? <FiChevronsLeft /> : <LuChevronsRight />}
        </span>
      </div>
      <div className={`${ber ? "lg:w-[calc(100vw-320px)] w-full " : "w-full "}  `}>
        <Mainber
          chatId={chatId}
          setChatId={setChatId}
          ber={ber}
          setUpdateData={setUpdateData}
          selectDay={selectDay}
          setResponsive={setResponsive}
        />
      </div>
    </div>
  );
};

export default Home;
