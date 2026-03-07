
function BannerWrapper({ slider, children }) {
  return (
    <div
      className="relative h-[210px] md:h-calc-82vh-minus-90 mt-[70px] lg:mt-[90px] bg-cover bg-center flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_SPACES_URL + encodeURIComponent(slider?.event.bannerImage.trim())})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-transparent to-[#212529cc] ">
        {children}
      </div>

    </div>
  )
}

export default BannerWrapper