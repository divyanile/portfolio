import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Solution Analyst
        <span className="text-textGreen tracking-wide">@Sankey Solutions</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
         Contributed to an Angular-based project, enhancing application flexibility and scalability, 
         which resulted in a 40% increase in user satisfaction and reduced development time by 50%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led frontend development for 3+ web applications using ReactJS, Next.js, and NestJS, improving page load performance by 30%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a Chrome extension for network interception and API mocking, which streamlined the testing process and reduced manual testing time by 40%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with the QA team to establish a real-time bug tracking system;
          the initiative led to an 80% decrease in reported bugs, streamlining the development process, and enhancing product quality.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
