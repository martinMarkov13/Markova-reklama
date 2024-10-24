"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

import Facebook from "../../../public/Facebook2.svg";
import phone from "../../../public/phone.svg";
import youtube from "../../../public/youtube.svg";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contacts"
      className="my-12 md:my-12 py-8 gap-4 h-full border-t border-white"
    >
      <h4 className="text-white text-4xl text-center font-bold mt-4">
        Контакти
      </h4>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="ml-12 my-12 ">
          <h5 className="text-2xl font-bold text-white text-center">
            Потърсете ни
          </h5>
          <div className="text-white mx-12 mt-4 text-xl font-bold">
            <Link
              href="https://www.youtube.com/@markovareklama"
              className="flex items-center gap-x-2"
            >
              <Image src={youtube} alt="YouTube icon" />
              @markovareklama
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61567157969573&mibextid=LQQJ4d"
              className="flex items-center gap-x-2"
            >
              <Image src={Facebook} alt="Facebook icon" />
              „Маркова Реклама" by Iliyan Markov
            </Link>
            <div className="text-white text-2xl font-bold flex items-center gap-x-2">
              <Image src={phone} alt="phone icon" />
              0896 91 55 18
            </div>
          </div>
        </div>
        <div className="my-12 px-12">
          <h5 className="text-2xl font-bold text-white text-center">
            Изпратете ни съобщение
          </h5>
          <form
            className="flex flex-col gap-4 mt-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Вашето име"
              className="px-4 py-2 text-black rounded-md bg-gray-300 hover:bg-white focus:bg-white"
            />
            <input
              type="text"
              name="user_email"
              placeholder="Вашият имейл или телефон"
              className="px-4 py-2 text-black rounded-md bg-gray-300 hover:bg-white focus:bg-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Вашето съобщение"
              className="px-4 py-2 text-black rounded-md bg-gray-300 hover:bg-white focus:bg-white"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
            >
              Изпрати
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
