import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TBearStoreState = {
  bears: number,
  increasePopulation: () => void,
  removeAllBears: () => void
  // getOwner :() => Promise<string>     this is the usuage of async in zustand w
}

const useBearStore = create<TBearStoreState>()(
  devtools((set) => ({
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
  }), {
    // in production env , choose false
    enabled : true,
    name : 'bear store'
  }
  ));

export default useBearStore