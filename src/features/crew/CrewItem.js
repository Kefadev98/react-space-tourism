import PaginateCrew from "./PaginateCrew";

const CrewItem = ({ crew, member }) => {
  return (
    <div className="crew__profile" key={member.name}>
      <div className="crew__info">
        <h3 className="crew__info--subtitle">{member.role}</h3>
        <h1 className="crew__info--title">{member.name}</h1>
        <p className="crew__info--description">{member.bio}</p>
        <div className="crew__paginate">
          {crew.map((item) => (
            <PaginateCrew key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="crew__image">
        <img src={member?.images?.webp} alt="/" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default CrewItem;
