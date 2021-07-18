import data from "../data/babyNamesData.json";
import { useState } from "react";
import { BabyDataProps } from "../utils/interfaces";
import Baby from "./Baby";
import SearchBar from "./SearchBar";

const BabyList: React.FC = () => {
  const [babyData, setBabyData] = useState<BabyDataProps[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchBar = babyData.filter((value) =>
    value.name.toLocaleLowerCase().includes(searchTerm)
  );

  const renderMapHTML = (): JSX.Element[] => {
    return searchBar
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((value) => {
        return <Baby name={value.name} id={value.id} sex={value.sex} />;
      });
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">{renderMapHTML()}</div>;
    </>
  );
};

export default BabyList;
