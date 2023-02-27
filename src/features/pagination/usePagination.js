import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCurrentPage } from "./paginationSlice";

function usePagination({ items }) {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.pagination.currentPage);
  const elementsPerPage = useSelector(
    (state) => state.pagination.elementsPerPage
  );

  useEffect(() => {
    dispatch(resetCurrentPage());
  }, [dispatch]);

  const lastElement = currentPage * elementsPerPage;
  const firstElement = lastElement - elementsPerPage;
  const currentItems = items?.slice(firstElement, lastElement);

  return { currentItems };
}

export default usePagination;
