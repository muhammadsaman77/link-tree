const Card = (props) => {
  const onClick = () => {
    window.location.href = props.link;
  };
  return (
    <div
      onClick={onClick}
      className="bg-ms-light-blue flex flex-row mx-auto rounded-lg mb-5"
      style={{ width: "334px", height: "55px" }}
    >
      <img
        src={props.image}
        width="35px"
        height="35px"
        className="ml-5"
        alt=""
      ></img>
      <p className="pt-4 pl-4">{props.title}</p>
    </div>
  );
};

export default Card;
