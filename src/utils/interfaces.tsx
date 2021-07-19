export interface BabyDataProps {
  id: number;
  name: string;
  sex: string;
}

export interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
}

export interface FavComponent {
  favourites: BabyDataProps[];
}

export interface FavListProps {
  favourites: BabyDataProps[];
  id: number;
  name: string;
  sex: string;
  setFavourites: React.Dispatch<React.SetStateAction<BabyDataProps[]>>;
}

// export interface singleBabyPropsWithFave {
//   id: number;
//   name: string;
//   sex: string;
//   favourites: any[];
//   setFavourites(id: number): void;
//   addedName: BabyDataProps[];
//   addFaveName:
// }

// export interface FaveFunction {
//   favourites: any[];
//   setFavourites(id: number ): void;
//   addedName: BabyDataProps[];
// }
