import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Splash from "./works/Splash";

const Experience = () => {
  const [workSankey, setWorkSankey] = useState(true);

  // const handleReactbd = () => {
  //   setWorkReactbd(true);
  //   setWorkGoogle(false);
  //   setWorkApple(false);
  //   setWorkSplash(false);
  //   setWorkAmazon(false);
  // };

  // const handleGoogle = () => {
  //   setWorkReactbd(false);
  //   setWorkGoogle(true);
  //   setWorkApple(false);
  //   setWorkSplash(false);
  //   setWorkAmazon(false);
  // };

  // const handleApple = () => {
  //   setWorkReactbd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(true);
  //   setWorkSplash(false);
  //   setWorkAmazon(false);
  // };
  // const handleSplash = () => {
  //   setWorkReactbd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(false);
  //   setWorkSplash(true);
  //   setWorkAmazon(false);
  // };
  const handleSankey = () => {
    // setWorkReactbd(false);
    // setWorkGoogle(false);
    // setWorkApple(false);
    // setWorkSplash(false);
    setWorkSankey(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {/* <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            RactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Splash
          </li> */}
          <li
            onClick={handleSankey}
            className={`${
              workSankey
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Sankey Solutions
          </li>
        </ul>
        {/* {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
        {workSplash && <Splash />} */}
        {workSankey && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
