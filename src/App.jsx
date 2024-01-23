import { useEffect, useState } from "react"
import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { Hero } from "./components/Hero/hero" 
import { Reservation } from "./components/Reservation/reservation"
import { Rooms } from "./components/Rooms/rooms"


function App() {
  const [rooms, setRooms] = useState([])

  
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      console.log(data.result);
      setRooms(data.result);
    } 
    fetchRooms()
  }, [])

  return (
    <>
      <Header/>
      <Hero/>
      <Rooms rooms={rooms} />
      <Reservation/>
      <Footer/>
    </>
  )
}

export default App
