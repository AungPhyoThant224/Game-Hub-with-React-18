import React from "react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return <></>;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <>
      <video src={first.data[480]} poster={first.preview} controls />
    </>
  ) : (
    <></>
  );
};

export default GameTrailer;
