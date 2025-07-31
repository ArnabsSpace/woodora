import CommonBanner from '../components/CommonBanner';
import contactBanner from '../assets/images/contactBanner.png';
import ContactForm from '../components/ContactForm';
import RelatedProducts from '../components/RelatedProduct'

export default function Contact() {
    return (
        <>
            <CommonBanner title="Contact Us" des="We showcase our most recent products for your convenience. If you're looking for older items, simply enter the product name to explore our archived collection." imgPath={contactBanner} />
            <ContactForm />
            <RelatedProducts title="May You Like" category="Table" limit={4} />
        </>
    )
}