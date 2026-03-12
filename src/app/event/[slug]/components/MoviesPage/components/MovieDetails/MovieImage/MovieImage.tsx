import Image from "next/image";

function MovieImage({ src, alt }: { src: string; alt?: string }) {
    return (
        <div className="col-span-1 md:col-span-1 relative w-auto h-[25vh] lg:h-full">
            <Image
                src={src}
                alt={alt ?? ""}
                width={500}
                height={500}
                className="absolute -top-[40px] w-auto h-full left-0 right-0 m-auto object-contain"
            />
        </div>
    )
}

export default MovieImage




