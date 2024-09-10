import Attributes from "../utils/attributes";

// Simulate a fetch API call to get attributes data
export const fetchAttributes = async () => {
  return new Promise<
    {
      name: string;
      hairColor: string;
      hairStyle: string;
      glasses: boolean;
      gender: string;
      hat: boolean;
      accessories: string | null;
      skinTone: string;
      expression: string;
    }[]
  >((resolve) => {
    setTimeout(() => {
      resolve(Attributes());
    }, 1000);
  });
};
