/* eslint-disable @next/next/no-img-element */

import { getCatBreed, getCatBreedImages } from "@/api/cat.api";
import React from "react";
import VoteButtons from "./_components/VoteButtons";

async function CatsOnBreedPage(props: { params: { breedId: string } }) {
  const breed = await getCatBreed(props.params.breedId);
  const images = (await getCatBreedImages(props.params.breedId)) || [];

  if (!breed) return;

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">{breed.name}</h1>
      <p className="font-medium mb-8">{breed.description}</p>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {images.map((image) => (
          <li key={image.id}>
            <img
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.id}
              className="object-contain aspect-square"
            />
            <div className="text-sm flex gap-x-2 mb-8 items-center">
              <h6 className="font-medium">이 고양이 사진이 마음에 드시나요?</h6>
              <VoteButtons imageId={image.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CatsOnBreedPage;
