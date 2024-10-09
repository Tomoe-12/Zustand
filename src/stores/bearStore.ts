import { create } from "zustand";
import { persist } from "zustand/middleware";

type TBearStoreState = {
  bears: number,
  color: string,
  size: string,
  increasePopulation: () => void,
  removeAllBears: () => void
  reset: () => void
  // getOwner :() => Promise<string>     this is the usuage of async in zustand w
}

const useBearStore = create<TBearStoreState>()(persist(
  (set) => ({
    bears: 0,
    color: 'brown',
    size: 'big',
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    reset: () => set({ bears: 0, color: 'brown', size: 'big' }),
    //      when we need to fetch data from third party library
    //   getOwner: async () => {           
    //     const res = await fetch('https://api.sth ldjslfsajdf= flksj flksjf lk');
    //     const owner = await res.json();
    //     console.log(owner.name);
    //     return owner.name;
    //   }
  }), {
  name: 'bear store',
  // default is the localstorage and it will store all the state
  // storage : createJSONStorage(()=>sessionStorage)

  // this will store all specifically
  // partialize: (state) => ({ bears: state.bears })


  // but for except in this example we 
  partialize: (state) =>
    Object.fromEntries(
      Object.entries(state).filter(
        ([key]) => !['size'].includes(key)
      )
    )
}));

export default useBearStore