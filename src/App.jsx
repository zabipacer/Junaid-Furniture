import Best from "./components/Best";
import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SideBySideImages from "./components/Images";
import MapSection from "./components/Map";
import NewArrival from "./components/NewArrival";

export default function App() {
  return (
    <>
    <Hero/>
    <Best/>
    <Categories/>
    <BestSeller/>
    <NewArrival/>

    <SideBySideImages/>
    <MapSection/>
    

    </>
  )
}