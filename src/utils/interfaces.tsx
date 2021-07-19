export interface BabyDataProps {
  id: number;
  name: string;
  sex: string;
}

export interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
}

export interface FavouritesArrayAndComponent {
  favourites: BabyDataProps[];
}

export interface AddFaveNameFunctionProps {
  favourites: BabyDataProps[];
  id: number;
  name: string;
  sex: string;
  setFavourites: React.Dispatch<React.SetStateAction<BabyDataProps[]>>;
}


