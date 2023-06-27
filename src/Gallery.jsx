import React from "react";
import useGetImages from "./hooks/useGetImages";

const Gallery = () => {
  const {
    isLoading: imageIsLoading,
    isError: imageIsError,
    data: imagesData,
  } = useGetImages();

  if (imageIsLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (imageIsError) {
    return (
      <section className="image-container">
        <h4>There wan an error...</h4>
      </section>
    );
  }

  const results = imagesData.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
