import { searchFilterType } from "../types/types";

export function useHandleAskQuestion(
  selectedCharacter: searchFilterType | null,
  setFilteredAttributes: React.Dispatch<React.SetStateAction<searchFilterType[]>>,
  setResponse: React.Dispatch<React.SetStateAction<string>>
) {
  const handleAskQuestion = (question: string) => {
    if (!selectedCharacter) return;

    let matchFound = false;
    const formattedQuestion = question.toLowerCase();

    if (
      formattedQuestion.includes("female") ||
      formattedQuestion.includes("male") ||
      formattedQuestion.includes("man") ||
      formattedQuestion.includes("woman") ||
      formattedQuestion.includes("boy") ||
      formattedQuestion.includes("girl")
    ) {
      const genderMapping: { [key: string]: string } = {
        male: "male",
        man: "male",
        boy: "male",
        female: "female",
        woman: "female",
        girl: "female",
      };

      const genderInQuestion = formattedQuestion.match(/female|male|man|boy|girl|woman/i)?.[0];
      if (genderInQuestion) {
        const normalisedGenderInQuestion = genderMapping[genderInQuestion.toLowerCase()];

        const genderMatch = selectedCharacter.gender.toLowerCase() === normalisedGenderInQuestion;

        setResponse(genderMatch ? "Yes" : "No");
        matchFound = true;

        setFilteredAttributes((prev) =>
          prev.filter((char) => char.gender.toLowerCase() === normalisedGenderInQuestion)
        );
      }
    }

    if (formattedQuestion.includes("hair") || formattedQuestion.match(/black|brown|red|blonde|gray/i)) {
      const colorInQuestion = formattedQuestion.match(/black|brown|red|blonde|gray/i)?.[0];
      if (colorInQuestion) {
        const colorMatch = selectedCharacter.hairColor.toLowerCase() === colorInQuestion.toLowerCase();
        setResponse(colorMatch ? "Yes" : "No");
        matchFound = true;

        setFilteredAttributes((prev) =>
          prev.filter((char) => (char.hairColor.toLowerCase() === colorInQuestion.toLowerCase()) === colorMatch)
        );
      }
    }

    if (formattedQuestion.includes("style") || formattedQuestion.match(/curly|long|short|bald/i)) {
      const styleInQuestion = formattedQuestion.match(/curly|long|short|bald/i)?.[0];
      if (styleInQuestion) {
        const styleMatch = selectedCharacter.hairStyle.toLowerCase() === styleInQuestion.toLowerCase();
        setResponse(styleMatch ? "Yes" : "No");
        matchFound = true;

        setFilteredAttributes((prev) =>
          prev.filter((char) => (char.hairStyle.toLowerCase() === styleInQuestion.toLowerCase()) === styleMatch)
        );
      }
    }

    if (formattedQuestion.includes("glasses")) {
      const glassesMatch = selectedCharacter.glasses;
      setResponse(glassesMatch ? "Yes" : "No");
      matchFound = true;

      setFilteredAttributes((prev) => prev.filter((char) => char.glasses === glassesMatch));
    }

    if (formattedQuestion.includes("hat")) {
      const hatMatch = selectedCharacter.hat;
      setResponse(hatMatch ? "Yes" : "No");
      matchFound = true;

      setFilteredAttributes((prev) => prev.filter((char) => char.hat === hatMatch));
    }

    if (
      formattedQuestion.includes("accessories") ||
      formattedQuestion.match(/headband|earrings|scarf|beard|freckles|headphones/i)
    ) {
      const accessoriesInQuestion = formattedQuestion.match(/headband|earrings|scarf|beard|freckles|headphones/i)?.[0];
      if (accessoriesInQuestion) {
        const accessoriesMatch = selectedCharacter.accessories
          ?.toLowerCase()
          .includes(accessoriesInQuestion.toLowerCase());
        setResponse(accessoriesMatch ? "Yes" : "No");
        matchFound = true;

        setFilteredAttributes((prev) =>
          prev.filter(
            (char) => char.accessories?.toLowerCase().includes(accessoriesInQuestion.toLowerCase()) === accessoriesMatch
          )
        );
      }
    }

    if (formattedQuestion.includes("skin")) {
      const toneInQuestion = formattedQuestion.match(/light|tanned|dark/i)?.[0];
      if (toneInQuestion) {
        const skinToneMatch = selectedCharacter.skinTone.toLowerCase() === toneInQuestion.toLowerCase();
        setResponse(skinToneMatch ? "Yes" : "No");
        matchFound = true;

        setFilteredAttributes((prev) =>
          prev.filter((char) => (char.skinTone.toLowerCase() === toneInQuestion.toLowerCase()) === skinToneMatch)
        );
      }
    }

    if (formattedQuestion.includes("expression") || formattedQuestion.match(/serious|smiling|neutral/i)) {
      const expressionInQuestion = formattedQuestion.match(/serious|smiling|neutral/i)?.[0];
      if (expressionInQuestion) {
        const expressionMatch = selectedCharacter.expression.toLowerCase() === expressionInQuestion.toLowerCase();
        setResponse(expressionMatch ? "Yes" : "No");
        matchFound = true;

        setFilteredAttributes((prev) =>
          prev.filter(
            (char) => (char.expression.toLowerCase() === expressionInQuestion.toLowerCase()) === expressionMatch
          )
        );
      }
    }

    if (!matchFound) {
      setResponse("Try asking a different question.");
    }
  };

  return { handleAskQuestion };
}
