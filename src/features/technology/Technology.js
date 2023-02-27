import TechnologyItem from "./TechnologyItem";
import Loading from "../../components/Loading/Loading";
//hooks
import usePagination from "../pagination/usePagination";
//api
import { useGetTechnologyQuery } from "./technologySlice";
//design
import "./Technology.scss";

const Technology = () => {
  const {
    data: technologies,
    isLoading,
    isError,
    error,
  } = useGetTechnologyQuery();
  const { currentItems } = usePagination({ items: technologies });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div className="technology">
      <div className="technology__content">
        <h2 className="technology__title">
          <span className="technology__title--num">03</span>Space Launch 101
        </h2>
        <>
          {currentItems.map((technology) => (
            <TechnologyItem
              key={technology.id}
              technologies={technologies}
              technology={technology}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default Technology;
