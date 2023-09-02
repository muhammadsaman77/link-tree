import Sosmed from "./Sosmed";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

export default function SosmedList() {
  const sosmedList = [
    {
      id: 1,
      logo: facebook,
      title: "Muhammad Saman",
      src: "https://www.facebook.com/muhammad.saman.39566",
    },
    {
      id: 2,
      logo: instagram,
      title: "muhammad_saman77",
      src: "https://www.instagram.com/muhammad_saman77/",
    },
    {
      id: 3,
      logo: linkedin,
      title: "Muhammad Saman",
      src: "https://www.linkedin.com/in/muhammad-saman/",
    },
    {
      id: 4,
      logo: github,
      title: "muhammadsaman77",
      src: "https://github.com/muhammadsaman77",
    },
    {
      id: 5,
      logo: gmail,
      title: "Muhammad Saman",
      src: "mailto:samanmuhammad077@gmail.com",
    },
  ];
  return (
    <>
      <div className="px-6">
        {sosmedList.map((e) => (
          <Sosmed link={e.src} logo={e.logo} title={e.title} key={e.id} />
        ))}
      </div>
    </>
  );
}
