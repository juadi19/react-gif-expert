import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  console.log(loading);

  return (
    <>
      <h1>{category}</h1>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />; // Spread operator to pass all the properties of the image object as props
        })}
      </div>
    </>
  );
};
