import data from "../data/babyNamesData.json";
import { useState } from "react";
import { BabyDataProps } from "../utils/interfaces";
// import Baby from "./Baby";
import SearchBar from "./SearchBar";
import { renderMapHTML } from "../utils/functions";

const BabyList: React.FC = () => {
  const [babyData, setBabyData] = useState<BabyDataProps[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">{renderMapHTML(babyData, searchTerm)}</div>;
    </>
  );
};

export default BabyList;
