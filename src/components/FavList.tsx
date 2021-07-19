import { FavComponent } from "../utils/interfaces";

const FavList: React.FC<FavComponent> = ({ favourites }) => {
  return (
    <div className="fav-container">
      <h3>Favourites:</h3>

      {/* will have the favourites array HERE and map over it to display */}
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
