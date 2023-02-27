import DestinationItem from "./DestinationItem";
import Loading from "../../components/Loading/Loading";
//hooks
import usePagination from "../pagination/usePagination";
//api
import { useGetDestinationsQuery } from "./destinationSlice";
//design
import "./Destination.scss";

const Destination = () => {
  const {
    data: destinations,
    isLoading,
    isError,
    error,
  } = useGetDestinationsQuery();

  const { currentItems } = usePagination({ items: destinations });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <section>
      <div className="space">
        <h2 className="space__title">
          <span className="space__title--num">01</span>Pick your destination
        </h2>
        <>
          {currentItems?.map((destination) => (
            <DestinationItem
              key={destination.id}
              destinations={destinations}
              destination={destination}
            />
          ))}
        </>
      </div>
    </section>
  );
};

export default Destination;
