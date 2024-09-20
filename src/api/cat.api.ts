import { CatBreed, CatBreeds, CatImage } from "@/types/cats-api-types";
import axios from "axios";

const catAPI = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
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
