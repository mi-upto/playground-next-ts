export const getDogImages = async (breed: string) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
  );
  const data = await response.json();
  return data.message;
}

export const getRandomDogImages = async () => {
  const response = await fetch(
    `https://dog.ceo/api/breeds/image/random`
  );
  const data = await response.json();
  return data.message;
}
