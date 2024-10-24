import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Средно училище",
    image: '/images/school.jpg',
    youtubeId: "-M-YtH4srDc",
  },
  {
    id: 2,
    title: "Онлайн магазин",
    image: '/images/online-store.jpg',
    youtubeId: "jPEjETs-Y7o",
  },
  {
    id: 3,
    title: "Спортен център",
    image: '/images/sports-center.jpg',
    youtubeId: "8dh771p4b7s",
  },
  {
    id: 4,
    title: "Детски център",
    image: '/images/child-center.jpg',
    youtubeId: "eHXMlb_bdhs",
  },
  {
    id: 5,
    title: "Екстремни атракциони",
    image: '/images/extreme-sports.jpg',
    youtubeId: "H-jNFzwvTsg",
  },
  {
    id: 6,
    title: "Автокъща",
    image: '/images/autohouse.jpg',
    youtubeId: "LUZdCrG6dPg",
  },
  {
    id: 7,
    title: "Автокъща 2",
    image: '/images/autohouse2.jpg',
    youtubeId: "lSd_fQIgCZA",
  },
  {
    id: 8,
    title: "Ресторант за бързо хранене",
    image: '/images/restaurant.jpg',
    youtubeId: "Twd5NizZ2Ws",
  },
  {
    id: 9,
    title: "Образователен център",
    image: '/images/education-center.jpg',
    youtubeId: "fJG4ozqQePc",
  },
  {
    id: 10,
    title: "Недвижими имоти",
    image: '/images/property.jpg',
    youtubeId: "mnc6sIbA98M",
  },
  {
    id: 11,
    title: "Строителен комплекс",
    image: '/images/building.jpg',
    youtubeId: "UbnNP-gonM4",
  },
  {
    id: 12,
    title: "Жилищен комплекс",
    image: '/images/property-building.jpg',
    youtubeId: "Q2LrHNwIG8o",
  },

];

const Projects = () => { 
  return (
    <section id="projects" className="h-full">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Нашите проекти
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            youtubeId={project.youtubeId}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
