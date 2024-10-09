import React, { useEffect, useState } from "react";
import useBearStore from "../stores/bearStore";
import { useFoodStore } from "../stores/foodstore";
import { shallow } from "zustand/shallow";

const BearBox = () => {
  //   const bears = useBearStore((state) => state.bears);
  //   const increasePopulation = useBearStore((state) => state.increasePopulation);
  //   const removeAllBears = useBearStore((state) => state.removeAllBears);
  // instead of writing upper style write like tthis
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  const [bgColor, setBgColor] = useState<
    "bg-green-500" | "bg-red-400" | undefined
  >(undefined);
  // this usuage can cause unnesessary re-render so i commented it
  // const fish = useFoodStore((state) => state.fish);

  useEffect(() => {
    // const unsub = useFoodStore.subscribe((state, prevState) => {
    //   console.log(state, prevState);
    //   if(prevState.fish <= 5 && state.fish > 5 ) {
    //     setBgColor("bg-green-500");
    //   }else if(prevState.fish > 5 && state.fish <= 5 ){
    //     setBgColor('bg-red-400')
    //   }
    // });

    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        if (fish == prevFish) {
          if (fish <= 5) {
            setBgColor("bg-red-400");
          } else {
            setBgColor("bg-green-500");
          }
        }

        if (prevFish <= 5 && fish > 5) {
          setBgColor("bg-green-500");
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor("bg-red-400");
        }
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    );
  }, []);

  return (
    <div className={`box ${bgColor} `}>
      <h1>Bear Box</h1>
      <p>Bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>Add bear</button>
        <button className="bg-red-500" onClick={removeAllBears}>
          remove bear
        </button>
        <button onClick={useBearStore.persist.clearStorage}>
          Clear Storage
        </button>
      </div>
    </div>
  );
};

export default BearBox;
