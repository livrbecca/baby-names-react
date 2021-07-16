import { BabyDataProps } from "../utils/interfaces";

const Baby: React.FC<BabyDataProps> = ({ name, id, sex }) => {
  return (
    
      <div className={sex === "f" ? "card girl" : "card boy"} key={id}>
        {name}
      </div>
   
  );
};

export default Baby;
