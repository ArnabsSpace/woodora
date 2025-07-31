import CommonBanner from '../components/CommonBanner';
import aboutBanner from '../assets/images/aboutBanner.png';
import FounderBlock from '../components/FounderBlock';
import WhoWeAre from '../components/WhoWeAre';
import TeamMember from '../components/TeamMember';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSlider from '../components/HomeComponent/TestimonialsSlider';

export default function About() {
    return (
        <>
            <CommonBanner title="About Us" des="We display products based on the latest products we have. If you want to see our old products please enter the name of the item." imgPath={aboutBanner} />
            <FounderBlock />
            <WhoWeAre />
            <TeamMember />
            <WhyChooseUs />
            <TestimonialsSlider />
        </>
    )
}