import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/CoffeeCard";
import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner";
import CoffeeItem from "./component/CoffeeItem";
import Footer from "./component/Footer";


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  
  return (
    
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="m-20">
      <h1 className=' text-3xl font-bold text-center'>Our Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
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
    <CoffeeItem></CoffeeItem>
    <Footer></Footer>
    </div>
  )
}

export default App
