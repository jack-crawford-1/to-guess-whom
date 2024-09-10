import { BlurredImageProps } from "../types/types";

const getImageByName = (name: string, imageArray: { default: string }[]) => {
  const normalisedName = name.toLowerCase().replace(/\s+/g, "");

  const matchingImage = imageArray.find((img) => img.default.toLowerCase().includes(normalisedName));

  return matchingImage ? matchingImage.default : null;
};

export function BlurredImage({ selectedCharacter, isCorrectGuess, imageArray }: BlurredImageProps) {
  const selectedCharacterImage = selectedCharacter ? getImageByName(selectedCharacter.name, imageArray) : null;

  return (
    <div className="blurred-image-container relative bg-slate-800 p-1 rounded-3xl mb-5 w-[150px] h-[200px] border-2 border-white border-dashed">
      {selectedCharacterImage && (
        <img
          src={selectedCharacterImage}
          alt="Selected Character"
          className={`w-full h-full object-cover rounded-lg transition-all ${
            isCorrectGuess ? "blur-0 border-8 border-green-600" : "blur-2xl"
          }`}
        />
      )}
      {!isCorrectGuess && (
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white text-6xl font-bold">?</span>
        </div>
      )}
    </div>
  );
}
