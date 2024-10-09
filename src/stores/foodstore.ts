import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

// type TFoodStoreState = {
//     fish: number;
//     // addOneFish: () => void;
//     // removeOneFish: () => void;
//     // removeAllFish: () => void;
// }

const initialFoodValue = {
    fish: 0,
}

// export const useFoodStore = create<TFoodStoreState>()(
export const useFoodStore = create<typeof initialFoodValue>()(
    devtools(
        subscribeWithSelector(
            persist(() => initialFoodValue,
                // ({
                // fish: 0,
                // addOneFish: () => set((state) => ({ fish: state.fish + 1 })),
                // removeOneFish: () => {
                //     set((state) => ({ fish: state.fish - 1 }))
                // },

                // removeAllFish: () => {
                //     set({ fish: 0 })
                // }
                // })
                {
                    name: 'food store'
                })), {
        name: 'foodstore'
    }))

export const addOneFish = () => useFoodStore.setState((state) => ({ fish: state.fish + 1 }))
export const removeOneFish = () => useFoodStore.setState((state) => ({ fish: state.fish - 1 }))
export const removeAllFish = () => useFoodStore.setState({ fish: 0 })
