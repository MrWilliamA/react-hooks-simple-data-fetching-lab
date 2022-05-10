// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  let [dogImages, setDogImages] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImages(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading!</h1>;
  return <img src={dogImages.message} alt="A Random Dog" />;
};

export default App;
