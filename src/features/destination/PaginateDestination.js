import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../pagination/paginationSlice";
//design
import "./Destination.scss";

const PaginateDestination = ({ item }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);

  return (
    <button
      className={`destination__navigation--item ${
        item.id === currentPage ? "active" : ""
      }`}
      onClick={() => dispatch(setCurrentPage(item.id))}
      data-page={item.id}
    >
      {item.name}
    </button>
  );
};

export default PaginateDestination;
