

const Heading = ({title1, title2, subtitle, textAlignment, titleColor, subtitleColor}: {title1: string, title2: string, subtitle: string, textAlignment: string, titleColor: string, subtitleColor: string}) => {
  return (
    <div>
      {" "}
      <div className={`text-${textAlignment} mb-12`}>
        <p className={`${subtitleColor}/70 uppercase text-sm tracking-[0.3em] font-medium mb-3`}>
          {subtitle}
        </p>
        <h2 className={`text-4xl lg:text-6xl font-heading font-semibold ${titleColor}`}>
          <span className="font-bold italic">{title1}</span> {title2}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
