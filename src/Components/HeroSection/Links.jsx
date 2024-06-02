const links = [{ link: "HOME", id: "HOME" }, { link: "ABOUT US", id: "ABOUT_US" }, { link: "SERVICES", id: "SERVICES" }, { link: "PORTFOLIO", id: "PORTFOLIO" }, { link: "TEAM", id: "TEAM" }];

const Links = ({ handleToggle1 }) => {
  return (
    <ul className="ml-4 flex flex-col text-left w-[100%] list-none" >
      {links.map((item, index) => (
        <li key={index} onClick={handleToggle1} className="h-12 md:pb-[55px] lg:pb-[70px] text-4xl  md:text-4xl md:h-14 lg:text-5xl lg:h-16 xl:text-7xl xl:pb-[90px] Laptop:text-8xl Laptop:h-32 text-white">
          <a href={`#${item.id}`} className="link">
            {item.link}
          </a>
        </li>
      ))}
    </ul>
  )
};
export default Links