import BannerImage from '../assets/images/productBanner.png'
export default function CommonBanner() {
    return (
        <>
            <section className="py-8">
                <div className="container mx-auto">
                    <h2 className='text-4xl font-semibold text-center mb-4'>Product</h2>
                    <p className='max-w-[800px] w-full mx-auto text-center mb-8 font-medium'>We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
                    <img src={BannerImage} alt="Product" className='w-full h-full rounded-lg' />
                </div>
            </section>
        </>
    )
}