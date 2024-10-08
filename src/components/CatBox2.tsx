import useCatStore from "../stores/catStore";

const CatBox2 = () => {
//   const {
//     cats: { bigCats },
//   } = useCatStore();   it will re-render unnecessary 

const bigCats = useCatStore(state => state.cats.bigCats)

  return (
    <div className="box">
      <h1>Partial States from catStore</h1>
      <p>Big Cats :{bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
};

export default CatBox2;
