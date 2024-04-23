import { Link } from "react-router-dom";
import { GitHub } from "@mui/icons-material";
import "animate.css";
import { useTitle } from "./useTitle";

export const DevelopersPage = () => {
  useTitle("Developer");

  const checkoutPage = () => {
    window.location.href = "";
  };

  return (
    <div className="my-5 md:my-10 flex flex-row justify-around mx-5 flex-wrap items-start gap-6">
      <div className="flex flex-col flex-wrap gap-10 justify-center items-center">
        <span className="text-2xl md:text-4xl font-gara font-bold p-2 border-b-4 border-indigo-600">
          Our Developers & Creators
        </span>
        <span className="z-50 relative w-56 md:w-72 lg:w-96 slide-in-bck-center animate__animated animate__slideInLeft animate__slow overflow-hidden">
          <div className="absolute bottom-0 text-black border-2 border-none rounded-b-xl bg-black opacity-60 flex flex-col justify-center items-center w-full p-2 hover:opacity-100">
            <Link to={""}>
              <GitHub
                key={0}
                style={{ fontSize: 25 }}
                className="hover:text-white"
              />
            </Link>
            <span className="font-mono italic animate__animated animate__bounceIn animate__slower">
              AllPulse Developer
            </span>
          </div>
        </span>
      </div>
      <div className="flex flex-col flex-wrap gap-10 mb-20 ">
        <span className="text-2xl md:text-4xl font-gara font-bold p-2 border-b-4 border-indigo-600">
          Technologies Used
        </span>
        <span className="grid grid-cols-2 justify-items-center place-content-evenly gap-5 animate__animated animate__slideInRight animate__slow">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            className="w-16"
          />
          <img
            className="w-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <img
            className="w-16"
            src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg"
          />
          <img
            className="w-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          {/* <img
            className="w-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain-wordmark.svg"
          /> */}
        </span>
      </div>
    </div>
  );
};
