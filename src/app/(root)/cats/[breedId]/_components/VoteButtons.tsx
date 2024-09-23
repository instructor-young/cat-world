"use client";

import { vote } from "@/api/cat.api";
import React from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

interface VoteButtonsProps {
  imageId: string;
}

function VoteButtons({ imageId }: VoteButtonsProps) {
  const handleClickVote = async (direction: "up" | "down") => {
    const result = await vote(imageId, direction);
    console.log(result);
  };

  return (
    <>
      <button
        onClick={() => handleClickVote("up")}
        className="text-black hover:text-orange-500 active:brightness-75 transition"
      >
        <FaRegThumbsUp />
      </button>
      <button
        onClick={() => handleClickVote("down")}
        className="text-black hover:text-orange-500 active:brightness-75 transition"
      >
        <FaRegThumbsDown />
      </button>
    </>
  );
}

export default VoteButtons;
