import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import createSelectors from "../utils/createSelector"

type TCatStoreState = {
    cats: {
        bigCats: number,
        smallCats: number,
    },
    increaseBigCats: () => void,
    increaseSmallCats: () => void,
    removeBigCats: () => void,
    removeSmallCats: () => void
    summary: () => string
}

// const useCatStore = create<TCatStoreState>() ((set) => ({
//     cats: {
//         bigCats: 0,
//         smallCats: 0,
//     },
//     increaseBigCats: () => {
//         set((state) => ({
//             cats: {
//                 ...state.cats,
//                 bigCats: state.cats.bigCats + 1,
//             }
//         }))
//     }, increaseSmallCats: () => {
//         set((state) => ({
//             cats: {
//                 ...state.cats,
//                 smallCats: state.cats.smallCats + 1,
//             }
//         }))
//     },
//     removeBigCats: () => {
//         set((state) => ({
//             cats: {
//                 ...state.cats,
//                 bigCats: state.cats.bigCats = 0,
//             }
//         }))
//     },
//     removeSmallCats: () => {
//         set((state) => ({
//             cats: {
//                 ...state.cats,
//                 smallCats: state.cats.smallCats = 0,
//             }
//         }))
//     }
// }))

// instead of writing like that  do like this with immer zustand


const useCatStore = createSelectors(create<TCatStoreState>()(immer((set, get) => ({
    cats: {
        bigCats: 0,
        smallCats: 0,
    },
    increaseBigCats: () => {
        set((state) => { state.cats.bigCats++ })
    },
    increaseSmallCats: () => {
        set((state) => { state.cats.smallCats++ })
    },
    removeBigCats: () => {
        set((state) => { state.cats.bigCats = 0 })
    },
    removeSmallCats: () => {
        set((state) => { state.cats.smallCats = 0 })
    },
    summary: () => {
        const total = get().cats.bigCats + get().cats.smallCats
        return `There are ${total} cats in total !`
    }
}))))

export default useCatStore