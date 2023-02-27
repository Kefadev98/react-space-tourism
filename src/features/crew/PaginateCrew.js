import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../pagination/paginationSlice";
import { BsCircle, BsCircleFill } from "react-icons/bs";
//design
import "./Crew.scss";

const PaginateCrew = ({ item }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);

  return (
    <button
      className="crew__paginate--item"
      onClick={() => dispatch(setCurrentPage(item.id))}
    >
      {currentPage === item.id ? <BsCircleFill /> : <BsCircle />}
    </button>
  );
};

export default PaginateCrew;
