// import BannerSlider from '../components/Slider/BannerSlider';
import BannerSliderSwiper from '../components/Slider/BannerSliderSwiper';
// import BannerSliderManual from '../components/Slider/BannerSliderManual';
import CraftedWithExcellence from '../components/HomeComponent/CraftedWithExcellence';

import HomePageProductSection from '../components/HomeComponent/HomePageProductSection';


function Home() {
  return (
    <>
      {/* <BannerSlider /> */}
      <BannerSliderSwiper />
      {/* <BannerSliderManual /> */}

      <CraftedWithExcellence />

      <HomePageProductSection />
      
       <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind is working!</h1>
      <p className="mt-4 text-gray-500">Now we can start building your homepage 🚀</p>
    </div>
    </>
   
  );
}
export default Home;

