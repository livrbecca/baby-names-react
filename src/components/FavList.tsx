import { FavouritesArrayAndComponent } from "../utils/interfaces";

const FavList: React.FC<FavouritesArrayAndComponent> = ({ favourites }) => {
  return (
    <div className="fav-container">
      <h2>Favourites:</h2>
      {favourites.map((faveName) => (
        <div
          className={faveName.sex === "f" ? "card girl" : "card boy"}
          key={faveName.id}
        >
          {faveName.name}
        </div>
      ))}
    </div>
  );
};

export default FavList;
