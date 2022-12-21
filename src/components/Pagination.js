
import React from "react";
import "./pagination.css";

const Pagination = ({
  totalQues,
  quesPerPage,
  currentPage,
  setCurrentPage,
}) => {
  console.log("pagination ");
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalQues / quesPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
     
      <button  className="px-2"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage((current) => current - 1)}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="px-2"
        disabled={currentPage > totalQues - 1}
        onClick={() => setCurrentPage((current) => current + 1)}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
      
    </div>
  );
};

export default Pagination;