import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-1 text-textLight">
      <a href="mailto:divyanile02@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          divyanile02@com
        </p>
      </a>
      <span className="w-[2px] h-40 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
