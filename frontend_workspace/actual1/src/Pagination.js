import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Pagination = ({ postsPerPage, totalPosts, paginate, searched }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    if (selectedPage >= pageNumbers.length) {
      setSelectedPage(0);
    } else {
      setSelectedPage(selectedPage);
    }
  }, [searched, totalPosts, postsPerPage, selectedPage]);

  const handlePageClick = (event) => {
    setSelectedPage(event.selected);
    paginate(event.selected + 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav >
        
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageNumbers.length}
          previousLabel="<"
          marginPagesDisplayed={0}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
          forcePage={selectedPage}
        />
      </nav>
    </div>
  );
};

export default Pagination;