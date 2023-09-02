import PropTypes from "prop-types";
export default function Sosmed({ logo, title, link }) {
  const handleClick = () => {
    window.open(`${link}`);
  };
  return (
    <>
      <div
        className="flex bg-primary-blue py-2 pl-6 rounded-md items-center mb-3 lg:w-1/2 mx-auto "
        onClick={handleClick}
      >
        <img width={30} src={logo} alt="" />
        <span className="text-white-text font-semibold text-sm ml-8 font-jakarta">
          {title}
        </span>
      </div>
    </>
  );
}

Sosmed.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
