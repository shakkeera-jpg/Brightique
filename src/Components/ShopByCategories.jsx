import { useNavigate } from "react-router-dom";
import chandeleiers from "../assets/chandeleiers.png";
import walllights from "../assets/walllights.png";
import tablelampImg from "../assets/tablelamps.png";
import pendant from "../assets/pendant.png";
import outdoorLightImg from "../assets/outdoor.png";
import floorLampImg from "../assets/floorlight.png";

export default function ShopByCategories() {
  const navigate = useNavigate();

  const categories = [
    { img: chandeleiers, title: "Chandeliers" },
    { img: walllights, title: "Wall Lights" },
    { img: tablelampImg, title: "Table Lamps" },
    { img: pendant, title: "Pendant" },
    { img: outdoorLightImg, title: "outdoor lamps" },
    { img: floorLampImg, title: "Floor Lamps" },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800"
        style={{color:"#c9a64e"}}
        >
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(cat.title)}
              className="group flex flex-col items-center cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
