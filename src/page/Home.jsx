import React, { useState } from "react";
import Sideber from "../components/Sideber";
import Mainber from "../components/Mainber";
import data from "../assets/data.json";
import { FaGripLinesVertical } from "react-icons/fa";
import { BiSolidChevronsLeft } from "react-icons/bi";

const Home = () => {
  const [chatId, setChatId] = useState("");
  let [updatData, setUpdateData] = useState(data);
  const [selectDay, setSelectDay] = useState(data[0].day);
  const [ber, setBer] = useState(true);
  const [responsive, setResponsive] = useState(false);

  return (
    <div className="flex">
      <div className={`${ber ? "lg:w-[290px] w-0" : "w-3"} flex gap-1 items-center`}>
        {ber && (
          <Sideber
            setChatId={setChatId}
            updatData={updatData}
            setSelectDay={setSelectDay}
            responsive={responsive}
            setResponsive={setResponsive}
          />
        )}

        <span onClick={() => setBer(!ber)} className="cursor-pointer hidden lg:block">
          <FaGripLinesVertical />
        </span>
      </div>
      <div className={`${ber ? "lg:w-[calc(100vw-300px)] w-full " : "w-full"}`}>
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
