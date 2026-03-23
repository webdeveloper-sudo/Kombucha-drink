

const Button = ({
  title,
  href,
  variant,
}: {
  title: string;
  variant?: string;
  href: string;
}) => {
  return (
   <a href={`${href}`}>
     <button
      className={`flex items-center gap-2 ${variant === "primary" ? "bg-forest-green text-white" : "bg-orange text-white"} uppercase text-sm lg:text-[14px] tracking-[0.2em] rounded-full font-medium px-6 py-3.5`}
    >
      {title}
    </button>
   </a>
  );
};

export default Button;
