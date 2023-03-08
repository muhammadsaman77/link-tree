import foto from "../assets/images/foto.jpeg";
import github from "../assets/icons/github.svg";
import ig from "../assets/icons/ig.svg";
import gmail from "../assets/icons/gmail.svg";
import linkedin from "../assets/icons/linkedin.svg";
import Card from "./Card";
const Container = () => {
  return (
    <div className="bg-ms-blue mx-auto h-screen pt-24">
      <img
        src={foto}
        width="170px"
        className="mx-auto"
        alt=""
        style={{
          objectFit: "cover",
          height: 165,
          width: 165,
          borderRadius: "100%",
        }}
      ></img>
      <h1 className="text-center text-2xl font-semibold mt-5 mb-5">
        Muhamad Saman
      </h1>
      <Card
        title="@muhammad_saman77"
        image={ig}
        link="https://www.instagram.com/muhammad_saman77"
      />
      <Card
        title="muhammadsaman77"
        image={github}
        link="https://github.com/muhammadsaman77"
      />

      <Card
        title="Muhamad Saman"
        image={linkedin}
        link="https://www.linkedin.com/in/muhammad-saman/"
      />
    </div>
  );
};
export default Container;
