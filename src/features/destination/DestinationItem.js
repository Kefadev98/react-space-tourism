//design
import "./Destination.scss";
import PaginateDestination from "./PaginateDestination";

const DestinationItem = ({ destination, destinations }) => {
  return (
    <div className="destination">
      <div className="destination__image">
        <img
          src={destination?.images?.webp}
          alt="/"
          width="100%"
          height="auto"
        />
      </div>

      <div className="destination__content">
        <article className="destination__navigation">
          {destinations.map((item) => (
            <PaginateDestination key={item.id} item={item} />
          ))}
        </article>

        <article>
          <h1 className="destination__content--title">{destination.name}</h1>
          <p className="destination__content--description">
            {destination.description}
          </p>
        </article>

        <div className="line"></div>
        {/* Destination details */}
        <article className="destination__information">
          <div>
            <small>AVG. DISTANCE</small>
            <p className="destination__information--paragraph">
              {destination.distance}
            </p>
          </div>
          <div>
            <small>EST. TRAVEL TIME</small>
            <p className="destination__information--paragraph">
              {destination.travel}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DestinationItem;
