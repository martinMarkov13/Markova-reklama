'use client'
import React, { useState } from "react";

const ProjectCard = ({ image, title, youtubeId }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${image}) no-repeat center center `, backgroundSize: 'contain' }}
      >
        {isVideoPlaying ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-t-xl"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">

            <button
              onClick={() => setIsVideoPlaying(true)}
              className="text-white font-semibold text-xl"
            >
              ▶ Play Video
            </button>
          </div>
        )}
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 mb-5">
        <h5 className="font-xl font-semibold mb-2 text-center">{title}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
