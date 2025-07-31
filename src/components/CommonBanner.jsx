import BannerImage from '../assets/images/productBanner.png';

export default function CommonBanner({
  title = "Product",
  des = "We display products based on the latest products we have, if you want to see our old products please enter the name of the item",
  imgPath = BannerImage, // ✅ don't use {} here
}) {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-4">{title}</h2>
        <p className="max-w-[800px] w-full mx-auto text-center mb-8 font-medium">
          {des}
        </p>
        <img src={imgPath} alt="Banner" className="w-full h-full rounded-lg" />
      </div>
    </section>
  );
}
