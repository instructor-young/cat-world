/* eslint-disable @next/next/no-img-element */

import { CatImage } from "@/types/cats-api-types";
const fetchOptions = {
  headers: {
    "x-api-key":
      "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
  },
};

async function HomePage() {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search`,
    fetchOptions
  );

  const [image] = (await response.json()) as [CatImage];

  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-8">오늘의 고양이!</h1>

      <div className="container max-w-screen-sm mx-auto flex flex-col items-center justify-center">
        <img src={image.url} alt={image.id} />
      </div>
    </>
  );
}

export default HomePage;
