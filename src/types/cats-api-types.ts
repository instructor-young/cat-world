export type CatBreed = {
  id: string;
  name: string;
  wikipedia_url: string;
  description: string;
  image: CatImage;
};

export type CatBreeds = CatBreed[];

export type CatImage = {
  breeds?: CatBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
};
