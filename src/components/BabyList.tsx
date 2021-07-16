import data from "../data/babyNamesData.json";
import { useState } from "react";
import { BabyDataProps } from "../utils/interfaces";
import Baby from "./Baby";

const BabyList: React.FC = () => {
  const [babyData, setBabyData] = useState<BabyDataProps[]>(data);

  const renderMapHTML = (): JSX.Element[] => {
    return babyData.map((value) => {
      return <Baby name={value.name} id={value.id} sex={value.sex} />;
    });
  };

  return <div className="container">{renderMapHTML()}</div>;
};

export default BabyList;
