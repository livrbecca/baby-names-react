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
      // pass addFaveName function into <Baby />,
      //will also need to add to an interface so <Baby /> can recieve it>
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

// step 1: add the AddFaveName function here
// idea? make it in baby, add whats needed to interface

export const searchBar = (
  babyData: BabyDataProps[],
  searchTerm: string
): BabyDataProps[] => {
  return babyData.filter((value) =>
    value.name.toLocaleLowerCase().includes(searchTerm)
  );
};
