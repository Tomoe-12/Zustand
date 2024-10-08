import React from "react";
import useCatStore from "../stores/catStore";

const CatController = () => {
//   const {  increaseBigCats, increaseSmallCats } = useCatStore();
    const increaseBigCats = useCatStore.use.increaseBigCats()
    const increaseSmallCats = useCatStore.use.increaseSmallCats()

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};

export default CatController;
