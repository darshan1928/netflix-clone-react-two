import React, { useEffect, useState } from "react";
import instance from "../instance";
import requests from "../requests";
import "./Banner.css";
function Banner() {
    const [movie, setMovie] = useState([]);
    const fetchData = async () => {
        const request = await instance.get(requests.fetchNetflixOriginals);
        // background  random image picking
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    };
    useEffect(() => {
        fetchData();
    }, []);

    // ------------------------- Description
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    
    return (
        <header
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundPosition: "center center",
               
            }}
            className="header"
        >
            <div className="banner__contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>
        </header>
    );
}

export default Banner;
