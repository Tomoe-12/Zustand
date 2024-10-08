import BearBox from "./components/BearBox";
import CatBox from "./components/CatBox";
import CatBox2 from "./components/CatBox2";
import CatController from "./components/CatController";

const App = () => {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
      </div>
      <div>
        <CatBox/>
      </div>
      <div>
        <CatBox2/>
      </div>
      <div>
        <CatController/>
      </div>
    </div>
  );
};

export default App;
