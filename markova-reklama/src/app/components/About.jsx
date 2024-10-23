import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="text-white h-screen">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="image" width={600} height={500}/>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 text-center">За нас</h2>
          <p className="font-base lg:text-2xl font-mono">
            В "МАРКОВА РЕКЛАМА" създаваме завладяващи видеа, които ангажират и
            вдъхновяват. Нашата страст е разказването на истории, които свързват
            вашия бизнес с неограничена аудитория. Независимо дали става въпрос
            за рекламен клип, корпоративно видео или креативен проект, ние ще
            превърнем вашите идеи в нещо впечатляващо и незабравимо. Нека
            създадем нещо впечатляващо!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
