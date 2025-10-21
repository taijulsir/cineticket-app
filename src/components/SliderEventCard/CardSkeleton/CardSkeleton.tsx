import Skeleton from "@/components/Skeleton/Skeleton"
import CardSkeletonWrapper from "./CardSkeletonWrapper/CardSkeletonWrapper"

function CardSkeleton() {
    return (
        <CardSkeletonWrapper>
            <Skeleton height={"3ovh"} mdHeight={"40vh"} lgHeight={"50vh"} width={"100%"} />
            <Skeleton height={"3ovh"} mdHeight={"40vh"} lgHeight={"50vh"} width={"100%"} />
            <Skeleton height={"3vh"} mdHeight={"40vh"} lgHeight={"50vh"} width={"100%"} />
            {/* <Skeleton height={"3ovh"} mdHeight={"40vh"} lgHeight={"50vh"} width={"100%"} /> */}
        </CardSkeletonWrapper>
    )
}

export default CardSkeleton