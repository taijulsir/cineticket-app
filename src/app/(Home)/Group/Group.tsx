import Ads from "./Ads/Ads";
import MovieGroup from "./MovieGroup/MovieGroup";


function Group({ nowSelling, upcoming }: { nowSelling?: any[]; upcoming?: any[] }) {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
      <div className="col-span-1 md:col-span-3">
        <MovieGroup upcoming={upcoming} nowSelling={nowSelling} />
      </div>
      <div className="ads col-span-1 hidden md:block relative">
        <Ads />
      </div>
    </div>

  );
}

export default Group;
