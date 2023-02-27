import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../pagination/paginationSlice";
//design
import "./Technology.scss";

const PaginateTechnology = ({ item }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);

  return (
    <button
      className={`technology__paginate--item ${
        item.id === currentPage ? "active" : ""
      }`}
      onClick={() => dispatch(setCurrentPage(item.id))}
    >
      {item.id}
    </button>
  );
};

export default PaginateTechnology;
