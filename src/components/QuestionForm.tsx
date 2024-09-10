import { BlurredImage } from "./BlurredImage";
import { searchFilterType } from "../types/types";

interface QuestionFormProps {
  question: string;
  setQuestion: (value: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  response: string;
  selectedCharacter: searchFilterType | null;
  isCorrectGuess: boolean;
  imageArray: { default: string }[];
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  question,
  setQuestion,
  handleKeyPress,
  handleSubmit,
  response,
  selectedCharacter,
  isCorrectGuess,
  imageArray,
}) => {
  return (
    <div className="flex flex-col justify-center items-center question-form h-[500px] bg-slate-800 p-5 rounded-lg flex flex-wrap gap-4 w-[390px]">
      <BlurredImage selectedCharacter={selectedCharacter} isCorrectGuess={isCorrectGuess} imageArray={imageArray} />
      <input
        type="text"
        value={question}
        placeholder="EG: Do you have brown hair?"
        className="p-2 w-full max-h-[40px] rounded-lg"
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button
        className="px-40 max-h-[50px] py-2 bg-[#ed1c24] text-white border-2 border-white hover:bg-red-500 rounded-lg"
        onClick={handleSubmit}
      >
        Ask
      </button>
      {response && <p className="text-white mt-2">Computer Says: {response}</p>}
    </div>
  );
};

export default QuestionForm;
