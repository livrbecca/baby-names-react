import { BabyDataProps } from "./interfaces";
import Baby from "../components/Baby";

export const renderMapHTML = (
  babyData: BabyDataProps[],
  searchTerm: string,
  setFavourites: React.Dispatch<React.SetStateAction<BabyDataProps[]>>,
  favourites: BabyDataProps[]
): JSX.Element[] => {
  return searchBar(babyData, searchTerm)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((value) => {
      return (
        <Baby
          name={value.name}
          id={value.id}
          sex={value.sex}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      );
    });
};

const searchBar = (
  babyData: BabyDataProps[],
  searchTerm: string
): BabyDataProps[] => {
  return babyData.filter((value) =>
    value.name.toLocaleLowerCase().includes(searchTerm)
  );
};
