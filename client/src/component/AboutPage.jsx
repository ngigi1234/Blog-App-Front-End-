import { useTitle } from "./useTitle";
import { AboutData } from "./AboutData";

const About = () => {
  useTitle("About");
  return (
    <div className="my-10 space-y-14">
      <div className="mx-10 lg:mx-72 flex flex-col gap-5 justify-center  text-justify items-center">
        <span className="text-2xl md:text-4xl font-gara font-bold self-start">
          About
        </span>
        <div className="space-y-5 self-start">
          <p className="text-xl md:text-2xl">
            AllPulse Blog is the easiest way to share your writing on the web.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Create a space for your thoughts. Reach people with your ideas and
            form new connections. Keep loved ones in the loop, free from social
            media. AllPulse Blog is a simple, modern and ad-free web pub­lish­ing
            platform.
          </p>
        </div>
      
      </div>
      <div className="flex flex-row flex-wrap justify-evenly items-center font-raj gap-9">
        {AboutData.map((value, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between gap-7 content-center h-36"
            >
              <span className="text-xl font-extrabold">{value.title}</span>
              <span className="text-lg w-64 text-justify">{value.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
