export interface BabyDataProps {
  id: number;
  name: string;
  sex: string;
}

export interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
}
