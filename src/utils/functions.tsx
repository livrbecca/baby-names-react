import { BabyDataProps } from "./interfaces";
import Baby from "../components/Baby";

export const renderMapHTML = (
  babyData: BabyDataProps[],
  searchTerm: string
): JSX.Element[] => {
  return searchBar(babyData, searchTerm)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((value) => {
      return <Baby name={value.name} id={value.id} sex={value.sex} />;
    });
};

export const searchBar = (
  babyData: BabyDataProps[],
  searchTerm: string
): BabyDataProps[] => {
  return babyData.filter((value) =>
    value.name.toLocaleLowerCase().includes(searchTerm)
  );
};
