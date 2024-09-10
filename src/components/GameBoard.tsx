import ReactCardFlip from "react-card-flip";
import Loading from "./Loading";
import { GameBoardProps } from "../types/types";

const GameBoard: React.FC<GameBoardProps> = ({ filteredAttributes, isFlippedArray, handleClick, getImageByName }) => {
  return (
    <div className=" ml-10 mt-2 mb-4 cards-container gap-5 bg-slate-800 flex flex-row flex-wrap justify-center min-w-[1000px] max-w-[1000px] p-[40px] rounded-xl min-h-[500px]">
      {filteredAttributes.length === 0 ? (
        <div>{<Loading />}</div>
      ) : (
        filteredAttributes.map((attribute, index) => {
          const image = getImageByName(attribute.name);
          return (
            <ReactCardFlip
              key={index}
              isFlipped={isFlippedArray[index]}
              flipDirection="vertical"
              flipSpeedBackToFront={1}
              flipSpeedFrontToBack={1}
              infinite={true}
            >
              <div
                className="front flex flex-col justify-center items-center w-[150px] h-[200px] rounded-[8px] shadow-lg text-xl cursor-pointer transition-transform duration-300 ease-in-out bg-[#f0f0f0]"
                onClick={() => handleClick(index)}
              >
                {attribute.name}
                {image && <img className="h-4/5 object-fit rounded-[8px]" src={image} alt={attribute.name} />}
              </div>

              <div
                className="back flex flex-col justify-center items-center w-[150px] h-[200px] rounded-[8px] shadow-lg text-sm cursor-pointer transition-transform duration-300 ease-in-out bg-[#ff6961] text-white"
                onClick={() => handleClick(index)}
              >
                {attribute.name} has {attribute.hairStyle} {attribute.hairColor} hair,{" "}
                {attribute.glasses ? "wears glasses," : "no glasses,"}
                {attribute.hat ? `, wears a ${attribute.hatColour} hat` : " does not wear a hat, "}
                {attribute.accessories ? `, accessories include: ${attribute.accessories}` : ""}
                has {attribute.skinTone} skin, with a {attribute.expression} expression.
              </div>
            </ReactCardFlip>
          );
        })
      )}
    </div>
  );
};

export default GameBoard;
