import AdsCarousel from "@/components/AdsCarousel/AdsCarousel";


function LeftAds({ ads }) {
  return (
    <AdsCarousel ads={ads} reversed={true} />
  );
}

export default LeftAds;
