import { useFoodStore } from "../stores/foodstore"


export const FoodBox = () => {
    const {addOneFish,fish,removeAllFish,removeOneFish} = useFoodStore()
    return (
        <div className="box">
            <h1>Food box</h1>
            <p>fish : {fish}</p>
            <div>
                <button onClick={addOneFish}>add one fish</button>
                <button onClick={removeOneFish}>remove one fish</button>
                <button onClick={removeAllFish}>remove all fish</button>
            </div>
        </div>
    )

}