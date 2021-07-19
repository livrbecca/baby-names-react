import data from "../data/babyNamesData.json";
import { useState } from "react";
import { BabyDataProps } from "../utils/interfaces";
// import Baby from "./Baby";
import SearchBar from "./SearchBar";
import { renderMapHTML } from "../utils/functions";
import FavList from "./FavList";

const BabyList: React.FC = () => {
  const [babyData, setBabyData] = useState<BabyDataProps[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // favourites use state, will map over the favourites array
  // put / render favourites in component FavList

  const [favourites, setFavourites] = useState<BabyDataProps[]>([]);

  // code for adding fave name
  // call in an onclick.
  // this code adds but doesn't remove - later issue
  // add to utils/function file, then pass down into <Baby /> component

  // const addFaveName = (addedName: BabyDataProps) => {
  //   const newFavList = [...favourites, addedName];
  //   setFavourites(newFavList);
  // };

  // code for removing name
  //  add to utils/ function file
  // const removeFaveName = (addedName: BabyDataProps) => {
  //   const newFavList = favourites.filter((fave) => fave.id !== addedName.id);
  //   setFavourites(newFavList);
  // };

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <FavList favourites={favourites} />
        {renderMapHTML(babyData, searchTerm, setFavourites, favourites)}
      </div>
      ;
    </>
  );
};

export default BabyList;
