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

  return (
    <div className="flex">
      <div className={`${ber ? "w-1/5" : "w-3"} flex gap-1 items-center`}>
        {ber && <Sideber setChatId={setChatId} updatData={updatData} setSelectDay={setSelectDay} />}
        <span onClick={() => setBer(!ber)} className="cursor-pointer">
          <FaGripLinesVertical />
        </span>
      </div>
      <div className={`${ber ? "w-4/5" : "w-full"}`}>
        <Mainber
          chatId={chatId}
          setChatId={setChatId}
          ber={ber}
          setUpdateData={setUpdateData}
          selectDay={selectDay}
        />
      </div>
    </div>
  );
};

export default Home;
