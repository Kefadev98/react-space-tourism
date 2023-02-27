import CrewItem from "./CrewItem";
import Loading from "../../components/Loading/Loading";
//hook
import usePagination from "../pagination/usePagination";
//api
import { useGetCrewQuery } from "./crewSlice";
//design
import "./Crew.scss";

const Crew = () => {
  const { data: crew, isLoading, isError, error } = useGetCrewQuery();
  const { currentItems } = usePagination({ items: crew });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="crew">
      <div className="crew__content">
        <h2 className="crew__title">
          <span className="crew__title--num">02</span>Meet your crew
        </h2>
        <>
          {currentItems.map((member) => (
            <CrewItem key={member.id} crew={crew} member={member} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Crew;
