import React from "react";
import useBearStore from "../stores/bearStore";

const BearBox = () => {
  //   const bears = useBearStore((state) => state.bears);
  //   const increasePopulation = useBearStore((state) => state.increasePopulation);
  //   const removeAllBears = useBearStore((state) => state.removeAllBears);
  // instead of writing upper style write like tthis
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>Bears: {bears}</p>
      <div>
        <button onClick={increasePopulation}>Add bear</button>
        <button className="bg-red-500" onClick={removeAllBears}>remove bear</button>
        <button onClick={useBearStore.persist.clearStorage}>Clear Storage</button>
      </div>
    </div>
  );
};

export default BearBox;
