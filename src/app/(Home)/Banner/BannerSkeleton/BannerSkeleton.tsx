import Skeleton from "@/components/Skeleton/Skeleton"

function BannerSkeleton() {
  return (
    <>
      <Skeleton height={"40vh"} mdHeight={"80vh"} width={"100%"} />
      <div className="absolute bottom-0 p-24 md:left-0 md:p-24 z-10 shadow-md">
        <div className="flex gap-2 md:gap-5 justify-center items-center shadow-md">
       
          <Skeleton height={"96px"} width={"80px"} mdHeight={"240px"} mdWidth={"208px"} />
          <div>
          <Skeleton height={"20px"} width={"30px"} mdHeight={"30px"} mdWidth={"40px"}/>
          <Skeleton height={"15px"} width={"20px"} mdHeight={"20px"} mdWidth={"20px"}/>

          </div>
        </div>
      </div>
    </>
  )
}

export default BannerSkeleton