import AdsCarousel from "@/components/AdsCarousel/AdsCarousel";


function LeftAds({ ads }: { ads: any[] }) {
  return (
    <AdsCarousel ads={ads} reversed={true} />
  );
}

export default LeftAds;
