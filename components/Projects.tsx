import { trckImage, networkInterceptor, fms } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some projects overview" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <div
            className="w-full xl:w-1/2 h-auto relative group"
            // href="https://nextamazon.reactbd.com/"
            // target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={trckImage}
                alt="trckImage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Fleet Management Portal</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            Worked on subscription module with data integrity and{" "}
              <span className="text-textGreen">manage online payments</span> for users.{" "}
              <span className="text-textGreen">Build dynamic dashboards and reports</span>.
              Worked on version control and deployment of the application using{" "}
              <span className="text-textGreen">Jenkins</span> and{" "}
              <span className="text-textGreen">Docker</span>.{" "}
              <span className="text-textGreen">Implemented CI/CD pipelines</span> for the application.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Angular</li>
              <li>PrimeNg</li>
              <li>Typescript</li>
              <li>jenkins</li>
              <li>Amazon S3</li>
              <li>Docker</li>
            </ul>
            {/* <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div> */}
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <div
            className="w-full xl:w-1/2 h-auto relative group"
            // href="https://www.noormohmmad.com/"
            // target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={networkInterceptor}
                alt="networkInterceptor"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Network Interceptor</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Developed a Chrome extension for network interception{" "}
              <span className="text-textGreen">API mocking</span>, which streamlined the testing process and{" "}
              <span className="text-textGreen">reduced manual testing time by 40%.</span>{" "}
              Engineered lifecycle hooks, improving app productivity by 40%.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Typescript</li>
              <li>Redux</li>
              <li>Material UI</li>
              <li>Sanity</li>
              <li>React Hook Form</li>
            </ul>
            {/* <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.noormohmmad.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div> */}
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <div
            className="w-full xl:w-1/2 h-auto relative group"
            // href="https://noorshop.netlify.app/"
            // target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={fms}
                alt="fms"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Fiancial Management System</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Automated system capturing over 40% of{" "}
              <span className="text-textGreen">clock-ins and clock-outs</span> per day, streamlining time tracking. 
              Integrated salary calculation module, accurately processing payroll for 
              <span className="text-textGreen"> over 200 employees monthly</span>
              , ensuring timely and precise salary disbursement.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Reactjs</li>
              <li>Typescript</li>
              <li>Jenkins</li>
              <li>Django</li>
            </ul>
            {/* <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://noorshop.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div> */}
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
