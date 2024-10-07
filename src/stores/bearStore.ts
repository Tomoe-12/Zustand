import { create } from "zustand";

type TBearStoreState = {
    bears : number ,
    increasePopulation : () => void ,
    removeAllBears: () => void 
    // getOwner :() => Promise<string>     this is the usuage of async in zustand w
}

const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
//      when we need to fetch data from third party library
//   getOwner: async () => {           
//     const res = await fetch('https://api.sth ldjslfsajdf= flksj flksjf lk');
//     const owner = await res.json();
//     console.log(owner.name);
//     return owner.name;
//   }
}));

export default useBearStore