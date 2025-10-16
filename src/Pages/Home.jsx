
import Featured from "../Components/Featured";
import Navbar from "../Components/Navbar";
import ShopByCategories from "../Components/ShopByCategories";
import Video from "../Components/Video";
import WhyChooseUs from "../Components/WhyChooseUs";



export default function Home(){
    return (
        <div>
         <Navbar/>
          <Video/> 
          <ShopByCategories/> 
          <WhyChooseUs/>
          <Featured/>
        </div>
    )
}