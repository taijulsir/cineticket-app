"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";
import { IMAGE_URL } from "@/Utilities/APIs/APIs";

function PastEventCard({ status }) {
    const [movies, setMovies] = useState([]);
    const axiosPublicInstance = useAxiosPublicInstance();

    useEffect(() => {
        async function fetchAndSetMovies() {
            const { data } = await axiosPublicInstance.get(
                `events/getAllEvents?status=${status}`
            );
            setMovies(data);
        }
        fetchAndSetMovies();
    }, [status]);

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-7">
            {movies?.map((movie, index) => (
                <Link
                    href={`event/${movie.slug}`}
                    key={movie._id}
                    className={`w-full bg-transparent rounded-lg ${index % 3 === 2 ? "pb-0 md:pb-10" : ""
                        }`}
                >
                    <Image
                        height={1000}
                        width={1000}
                        className="w-full h-[205px] md:h-[40vh] lg:h-[40vh] rounded-lg relative object-cover"
                        alt="Card Image"
                        src={IMAGE_URL + movie?.cardImage}
                    />
                    <div className="flex justify-between items-center pt-2 md:pt-7">
                        <div>
                            <h4>{movie?.name}</h4>
                            <p className="brightness-75">{movie?.type}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PastEventCard;
