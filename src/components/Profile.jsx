import foto from "../assets/foto.png";
export default function Profile() {
  return (
    <>
      <img src={foto} alt="" className="mx-auto rounded-full" />
      <h1 className="font-jakarta font-extrabold text-2xl mt-8 mb-3">
        Muhamad Saman
      </h1>
      <h2 className="font-jakarta font-semibold text-blue-700 text-base mb-8">
        Software Development Enthusiast
      </h2>
    </>
  );
}
