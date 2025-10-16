import { useNavigate } from "react-router-dom";


export default function Video() {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/products")}
  return (
    <div className="Video relative">
      <video
        className="w-full h-[600px] object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="https://www.whiteteak.com/media/customimages/homepage/video_banner_new_standard.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-script drop-shadow-lg">
          Illuminate Your Space With A Touch Of Luxury.
        </h2>
        <div className="w-80 h-[2px] bg-white my-5 opacity-80 rounded-full"></div>
        <p className="text-white text-lg md:text-xl font-light drop-shadow-md">
    Explore our curated collection of lighting to transform your space.
  </p>


        <button
          onClick={handleExplore}
          className="mt-6 bg-transparent border border-white text-white 
                     hover:bg-white/20 transition-all duration-300 
                     text-lg px-6 py-3 rounded-full shadow-lg"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}