import React from "react";

const Heading = ({title1, title2, subtitle, textAlignment}: {title1: string, title2: string, subtitle: string, textAlignment: string}) => {
  return (
    <div>
      {" "}
      <div className={`text-${textAlignment} mb-12`}>
        <p className="text-forest-green/70 uppercase text-sm tracking-[0.3em] font-medium mb-3">
          {subtitle}
        </p>
        <h2 className="text-4xl lg:text-6xl font-heading font-semibold text-gray-800">
          <span className="font-bold italic">{title1}</span> {title2}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
