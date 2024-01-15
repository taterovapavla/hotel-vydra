import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { Hero } from "./components/Hero/hero" 
import { Reservation } from "./components/Reservation/reservation"
import { Rooms } from "./components/Rooms/rooms"


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Rooms/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default App
