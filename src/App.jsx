import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/CoffeeCard";
import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  
  return (
    
    <div>
      <Navbar></Navbar>
      <div className="m-20">
      <h1 className=' text-5xl font-semibold text-center'>Hot Coffee</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}>
            </CoffeeCard>)
        }
      </div>
    </div>
    </div>
  )
}

export default App
