import React from "react";
import useCatStore from "../stores/catStore";

const CatBox = () => {
  // const bigCats = useCatStore((state) => state.cats.bigCats)
  // const SmallCats = useCatStore((state) => state.cats.smallCats)
  // const increaseBigCats = useCatStore((state) => state.increaseBigCats)
  // const increaseSmallCats = useCatStore((state) => state.increaseSmallCats)
  // const removeBigCats = useCatStore((state) => state.removeBigCats)
  // const removeSmallCats = useCatStore((state) => state.removeSmallCats)

  const {
    cats,
    increaseBigCats,
    increaseSmallCats,
    removeBigCats,
    removeSmallCats,
    summary,
  } = useCatStore();

  console.log(summary());

  return (
    <div className="box">
      <h1>Cat Box</h1>
      <p>Big Cats : {cats.bigCats}</p>
      <p>Small Cats : {cats.smallCats}</p>
      <p>Total : {summary()}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
        <button className="bg-red-500" onClick={removeBigCats}>
          remove big cats
        </button>
        <button className="bg-red-500" onClick={removeSmallCats}>
          remove small cats
        </button>
      </div>
    </div>
  );
};

export default CatBox;
