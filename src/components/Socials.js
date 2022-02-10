import { IconContext } from "react-icons";

export default function Socials({ link, Icon, suffix }) {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <a
        href={link ? link : "#"}
        target="_blank"
        className="flex items-center whitespace-nowrap space-x-1 basic-focus-animation basic-active-animation w-fit rounded-md icon group"
      >
        <Icon />
        {suffix && (
          <h3 className="font-light text-sm group-hover:gradient-text">
            {suffix}
          </h3>
        )}
      </a>
    </IconContext.Provider>
  );
}
