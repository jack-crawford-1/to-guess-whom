import "../styles/App.css";

export const images = import.meta.glob("../assets/characters/*.(webp|jpg|png)", {
  eager: true,
});

export const imageArray: { default: string }[] = Object.values(images) as {
  default: string;
}[];

export const getImageByName = (name: string) => {
  const normalisedName = name.toLowerCase().replace(/\s+/g, "");

  const matchingImage = imageArray.find((img) => img.default.toLowerCase().includes(normalisedName));

  return matchingImage ? matchingImage.default : null;
};
