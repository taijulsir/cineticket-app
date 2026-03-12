import AdsCarousel from "@/components/AdsCarousel/AdsCarousel";

function RightAds({ ads }: { ads?: any[] }) {
  return (
    <AdsCarousel ads={ads} reversed={false} />
  );
}

export default RightAds;
