import { AddFaveNameFunctionProps, BabyDataProps } from "../utils/interfaces";

const Baby: React.FC<AddFaveNameFunctionProps> = ({
  name,
  id,
  sex,
  favourites,
  setFavourites,
}) => {
  const addFaveName = (addedName: BabyDataProps) => {
    const newFavList = [...favourites, addedName];
    setFavourites(newFavList);
  };

  return (
    <div
      onClick={() => addFaveName({ name, id, sex })}
      className={sex === "f" ? "card girl" : "card boy"}
      key={id}
    >
      {name}
    </div>
  );
};

export default Baby;
