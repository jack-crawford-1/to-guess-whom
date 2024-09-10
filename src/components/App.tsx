import { useEffect, useState } from "react";
import { fetchAttributes } from "../api/fetchAttributes";
import { searchFilterType } from "../types/types";
import { useGameLogic } from "../hooks/useGameLogic";
import GameBoard from "./GameBoard";
import QuestionForm from "./QuestionForm";
import { imageArray, getImageByName } from "../utils/imageUtils";
import Header from "./Header";
import "../styles/App.css";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<searchFilterType | null>(null);

  const {
    isCorrectGuess,
    response,
    isFlippedArray,
    filteredAttributes,
    setFilteredAttributes,
    question,
    setQuestion,
    handleClick,
    handleKeyPress,
    handleSubmit,
  } = useGameLogic(selectedCharacter);

  useEffect(() => {
    const loadAttributes = async () => {
      const data = await fetchAttributes();
      setFilteredAttributes(data);

      const randomIndex = Math.floor(Math.random() * data.length);
      setSelectedCharacter(data[randomIndex]);
    };
    loadAttributes();
  }, [setFilteredAttributes]);

  return (
    <div className="flex flex-col bg-[#BBBEC0] min-h-screen ">
      <Header />
      <div className="main-container  flex flex-row items-center justify-center  m-0 text-center">
        <QuestionForm
          question={question}
          setQuestion={setQuestion}
          handleKeyPress={handleKeyPress}
          handleSubmit={handleSubmit}
          response={response}
          selectedCharacter={selectedCharacter}
          isCorrectGuess={isCorrectGuess}
          imageArray={imageArray}
        />
        <GameBoard
          filteredAttributes={filteredAttributes}
          isFlippedArray={isFlippedArray}
          handleClick={handleClick}
          getImageByName={getImageByName}
        />
      </div>
    </div>
  );
}

export default App;
