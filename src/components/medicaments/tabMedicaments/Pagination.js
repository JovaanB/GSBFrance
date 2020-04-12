import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, paginate }) => {
  return (
    <div className="mt-3 mb-3 text-center">
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={paginate}
        containerClassName={'pagination pagination-lg justify-content-center'}
        subContainerClassName={'pagination'}
        activeClassName={'page-item active'}
        pageClassName={'page-item'}
        nextClassName={'page-item'}
        previousClassName={'page-item'}
        breakClassName={'page-item'}
        pageLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
      />
    </div>
  );
};

export default Pagination;
