import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  let [cartValue,setCartValue]=useState(0);
  let [toggle,setToggle]=useState(true);
  let data=[
    {
      name:"Fancy Product",
      price:"$40.00 - $80.00",
      star:""
    },
    {
      name:"Special Item",
      price:"$18.00"
    },
    {
      name:"Sale Item",
      price:"$25.00"
    }
    ,{
      name:"Popular Item",
      price:"$40.00 "
    },
    {
      name:"Sale Item",
      price:"$25.00"
    },
    {
      name:"Fancy Product",
      price:"$120.00 - $280.00"
    },
    {
      name:"Special Item",
      price:"$18.00 "
    },
    {
      name:"Popular Item",
      price:"$40.00 "
    }
  ]
  return <>
  <Navbar cartValue={cartValue}/>
  <Header/>
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {/* <Card  setCartValue={setCartValue}/>
          <Card  setCartValue={setCartValue}/>
          <Card  setCartValue={setCartValue}/>
          <Card  setCartValue={setCartValue}/>
          <Card  setCartValue={setCartValue}/>
          <Card  setCartValue={setCartValue}/>
         < Card  setCartValue={setCartValue}/>
         < Card  setCartValue={setCartValue}/> */}
         {
          data.map((e,i)=>{
            return <Card data={e} key={i}  setCartValue={setCartValue}/>
          })
        }
          
             </div>
          </div>
          
    </section>
</>;
}

export default App;