export type searchFilterType = {
  name: string;
  hairColor: string;
  hairStyle: string;
  glasses: boolean;
  gender: string;
  hat: boolean;
  hatColour?: string;
  accessories: string | null;
  skinTone: string;
  expression: string;
};

export interface BlurredImageProps {
  selectedCharacter: searchFilterType | null;
  isCorrectGuess: boolean;
  imageArray: { default: string }[];
}

export interface GameBoardProps {
  filteredAttributes: searchFilterType[];
  isFlippedArray: boolean[];
  handleClick: (index: number) => void;
  getImageByName: (name: string) => string | null;
}
