// import BannerSlider from '../components/Slider/BannerSlider';
import BannerSliderSwiper from '../components/Slider/BannerSliderSwiper';
// import BannerSliderManual from '../components/Slider/BannerSliderManual';
import CraftedWithExcellence from '../components/HomeComponent/CraftedWithExcellence';

import HomePageProductSection from '../components/HomeComponent/HomePageProductSection';
import CraftedQualitySection from '../components/HomeComponent/CraftedQualitySection';
import TestimonialsSlider from '../components/HomeComponent/TestimonialsSlider';
import BlogSection from '../components/HomeComponent/BlogSection';

function Home() {
  return (
    <>
      {/* <BannerSlider /> */}
      <BannerSliderSwiper />
      {/* <BannerSliderManual /> */}

      <CraftedWithExcellence />

      <HomePageProductSection />
      <CraftedQualitySection />
      <TestimonialsSlider />
      <BlogSection />
      
      
    </>
   
  );
}
export default Home;

