import PaginateTechnology from "./PaginateTechnology";
//hooks
import useMediaQuery from "../../hooks/useMediaQuery";
//design
import "./Technology.scss";

const TechnologyItem = ({ technology, technologies }) => {
  const isDesktop = useMediaQuery("(min-width: 990px)");

  return (
    <div className="technology__informations">
      {/* Information about Rockets */}
      <div className="technology__content">
        <div className="technology__paginate">
          {technologies.map((item) => (
            <PaginateTechnology key={item.id} item={item} />
          ))}
        </div>

        <article className="technology__description">
          <h4 className="technology__description--subtitle">Terminology...</h4>
          <h1 className="technology__description--title">{technology.name}</h1>
          <p className="technology__description--paragraph">
            {technology.description}
          </p>
        </article>
      </div>

      <div className="technology__image">
        <img
          src={
            isDesktop
              ? technology?.images?.portrait
              : technology?.images?.landscape
          }
          alt="/"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default TechnologyItem;
