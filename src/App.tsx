import { Suspense, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCards from "./components/TechCards";
import Footer from "./components/Footer";

export interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}
//data fetching function//
const techFetch = async (): Promise<TechItem[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());
  const [stack, setStack] = useState<TechItem[]>([]);

  const handleAddToStack = (tech: TechItem) => {
    const isExist = stack.find((item) => item.id === tech.id);
    if (isExist) {
      toast.warning("Already added to your stack!");
      return;
    }
    setStack([...stack, tech]);
    toast.success("Added to your stack!");
  };

  const handleRemoveFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Removed from stack!");
  };

  /* Remove All Function */
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("Removed all technologies from stack!");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 min-h-screen">
        <Banner />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          <Suspense 
            fallback={
              <div className="w-full lg:w-2/3 flex justify-center items-center h-64">
                <span className="loading loading-spinner text-pink-500 loading-lg"></span>
              </div>
            }
          >
            <TechCards techPromise={techPromise} handleAddToStack={handleAddToStack} stack={stack} />
          </Suspense>

          <div className="w-full lg:w-1/3 bg-white border border-gray-100 shadow-sm rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your Stack</h2>
            <p className="text-sm text-gray-500 mb-6">{stack.length} Technology Selected</p>
            
            {stack.length === 0 ? (
              <p className="text-gray-400">No technologies selected</p>
            ) : (
              <div className="space-y-4">
                {stack.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                      <div>
                        <p className="font-bold text-sm text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFromStack(item.id)} className="text-gray-400 hover:text-red-500 font-bold text-lg">
                      ✕
                    </button>
                  </div>
                ))}
                
                /* Remove All Button  */
                <button 
                  onClick={handleRemoveAll} 
                  className="w-full mt-4 bg-red-50 hover:bg-red-100 text-red-500 font-bold py-2 rounded-lg transition-colors border border-red-100"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer/>
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;