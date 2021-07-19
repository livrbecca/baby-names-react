import data from "../data/babyNamesData.json";
import { useState } from "react";
import { BabyDataProps } from "../utils/interfaces";
import SearchBar from "./SearchBar";
import { renderMapHTML } from "../utils/functions";
import FavList from "./FavList";

const BabyList: React.FC = () => {
  const [babyData, setBabyData] = useState<BabyDataProps[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favourites, setFavourites] = useState<BabyDataProps[]>([]);

  // code for removing name
  //  add to utils/ function file
  
  const removeFaveName = (addedName: BabyDataProps) => {
    const newFavList = favourites.filter((fave) => fave.id !== addedName.id);
    setFavourites(newFavList);
  };

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
