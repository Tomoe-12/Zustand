import useCatStore from "../stores/catStore";
import { shallow } from "zustand/shallow";

const CatController = () => {
  //   const {  increaseBigCats, increaseSmallCats } = useCatStore();

  const increaseBigCats = useCatStore.use.increaseBigCats()
  const increaseSmallCats = useCatStore.use.increaseSmallCats()
  // instead of these two write these instead

//    from two writing style is a multi selector but still got error i donna know why let me fix it next time 
  // const {increaseBigCats , increaseSmallCats} = useCatStore(
  //     (state) => ({
  //         increaseBigCats: state.increaseBigCats,
  //         increaseSmallCats : state.increaseSmallCats
  //     }),
  //     shallow
  // )

//   const [increaseBigCats, increaseSmallCats] = useCatStore(
//     (state) => [state.increaseBigCats, state.increaseSmallCats],
//     shallow
//   );

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
