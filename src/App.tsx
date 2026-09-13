import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCards from "./components/TechCards";

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

const techFetch = async (): Promise<TechItem[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());

  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <Banner />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          <Suspense 
            fallback={
              <div className="w-full lg:w-2/3 flex justify-center items-center h-64">
                <h2 className="text-2xl font-bold text-gray-500">Loading.......</h2>
              </div>
            }
          >
            <TechCards techPromise={techPromise} />
          </Suspense>

          <div className="w-full lg:w-1/3 bg-white border border-gray-100 shadow-sm rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your Stack</h2>
            <p className="text-sm text-gray-500 mb-6">No technologies selected</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;