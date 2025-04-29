import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center md:bg-[url('/hero7.webp')] bg-[url('/jpp2.png')]"
    >
      {/* Navbar Links */}
      <div className="absolute z-20 top-8 right-8 flex space-x-6 text-[#5d3b2d] hover:text-[#a36348] font-serif text-md md:text-lg ml-10 md:mr-10">
        <Link to="/" className="transition-colors hover:scale-110">Home</Link>
        <Link to="/category/beds" className="hover:scale-110 transition-colors">Beds</Link>
        <Link to="/category/almirah" className="hover:scale-110 transition-colors">Almirah</Link>
        <Link to="/category/dining" className="hover:scale-110 transition-colors">Dining</Link>
        <Link to="/category/ironstand" className="hover:scale-110 transition-colors">Iron   Stand</Link>
      </div>

      {/* Overlay */}
      <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/10"></div>

      {/* Content */}
      <button
        className="absolute bottom-6 right-32 md:bottom-40 md:right-52 px-8 py-3 bg-[#b08d57] text-white font-sans font-semibold rounded-md shadow-md hover:shadow-lg transition-all transform hover:scale-105 hover:text-[#f5f5f5]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        onClick={() => window.open('https://wa.me/923288768783', '_blank')}
      >
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
