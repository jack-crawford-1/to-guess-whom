import { useState } from "react";
import { searchFilterType } from "../types/types";
import { useHandleAskQuestion } from "./useHandleAskQuestion";

export const useGameLogic = (selectedCharacter: searchFilterType | null) => {
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [isFlippedArray, setIsFlippedArray] = useState(new Array(10).fill(false));
  const [filteredAttributes, setFilteredAttributes] = useState<searchFilterType[]>([]);
  const [question, setQuestion] = useState<string>("");

  const { handleAskQuestion } = useHandleAskQuestion(selectedCharacter, setFilteredAttributes, setResponse);

  const handleClick = (index: number) => {
    const clickedCharacter = filteredAttributes[index];
    const isCorrect = clickedCharacter.name === selectedCharacter?.name;

    if (isCorrect) {
      setResponse(`Congratulations! You guessed ${clickedCharacter.name}!`);
      setIsCorrectGuess(true);
    } else {
      setResponse(`Oops! ${clickedCharacter.name} isn't correct`);
    }

    const newFlipStates = [...isFlippedArray];
    newFlipStates[index] = !newFlipStates[index];
    setIsFlippedArray(newFlipStates);
  };

  const handleSubmit = () => {
    handleAskQuestion(question);
    setQuestion("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return {
    isCorrectGuess,
    response,
    isFlippedArray,
    filteredAttributes,
    setFilteredAttributes,
    question,
    setQuestion,
    handleClick,
    handleSubmit,
    handleKeyPress,
  };
};
