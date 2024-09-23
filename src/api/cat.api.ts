import { CatBreed, CatBreeds, CatImage } from "@/types/cats-api-types";
import axios from "axios";

const catAPI = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_0AoIgMlfjCwC4SIxBgFi9qpemRF0Ct36qKIEvzgI6qq2AFxwhyywTRA1ebAbwS3a",
  },
});

export async function getCatBreeds() {
  try {
    const response = await catAPI.get<CatBreeds>("/breeds");
    const data = response.data;

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getCatBreed(breedId: string) {
  try {
    const response = await catAPI.get<CatBreed>(`/breeds/${breedId}`);
    const data = response.data;

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getCatBreedImages(breedId: string) {
  try {
    const response = await catAPI.get<CatImage[]>(
      `/images/search?limit=10&breed_ids=${breedId}`
    );
    const data = response.data;

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function vote(imageId: string, vote: "up" | "down") {
  try {
    const data = {
      image_id: imageId,
      value: vote === "up" ? 1 : -1,
    };
    const response = await catAPI.post("/votes", data);
    const result = response.data;

    return result;
  } catch (e) {
    console.log(e);
  }
}
