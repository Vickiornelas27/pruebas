import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import About from "./components/quienesSomos/About"


export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <Slider />
      <About></About>
   
    </>
  )
}
