import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    return response.json();
  };

  const { data, status, isPreviousData } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} />
      ))}
      <div>
        {/* // if page 1, disable the back/previous button */}
        <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
          Previous
        </button>
        {/* // disable next button if next is equal to null (last page) */}
        <button disabled={isPreviousData && !data.info.next} onClick={() => setPage((old) => old + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Characters;
