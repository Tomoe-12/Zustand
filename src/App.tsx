import BearBox from "./components/BearBox";
import CatBox from "./components/CatBox";
import CatBox2 from "./components/CatBox2";
import CatController from "./components/CatController";
import { FoodBox } from "./components/FoodBox";

const App = () => {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox />
        <CatBox />
      </div>
      <div>
        <CatBox />
        <CatBox2 />
        <CatController />
      </div>
    </div>
  );
};

export default App;
