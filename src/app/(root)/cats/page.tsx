/* eslint-disable @next/next/no-img-element */

import { getCatBreeds } from "@/api/cat.api";
import Link from "next/link";

async function CatsListPage() {
  const breeds = await getCatBreeds();

  return breeds ? (
    <ul className="grid md:grid-cols-4 gap-5">
      {breeds.map((breed) => (
        <li key={breed.id}>
          <article className="border p-5 rounded-lg hover:brightness-90 active:brightness-75 transition bg-white">
            <Link href={`/cats/${breed.id}`} className="block">
              {breed.image && (
                <img
                  src={breed.image.url}
                  alt={breed.name}
                  className="aspect-video object-cover"
                />
              )}
              <h2 className="font-bold text-lg">{breed.name}</h2>
              <p className="text-sm">{breed.description}</p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  ) : (
    <h4>고양이를 불러오는 데에 실패했습니다</h4>
  );
}

export default CatsListPage;
