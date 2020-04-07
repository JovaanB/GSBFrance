import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ praticiensPerPage, totalPraticiens, paginate }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={'Préc.'}
        nextLabel={'Suiv.'}
        breakLabel={'...'}
        pageCount={totalPraticiens / praticiensPerPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={paginate}
        containerClassName={'pagination-container'}
        subContainerClassName={'pagination-container'}
        activeClassName={'active'}
        pageClassName={'pagination-item'}
        nextClassName={'pagination-item'}
        previousClassName={'pagination-item'}
        breakClassName={'pagination-item'}
        pageLinkClassName={'pagination-link'}
        nextLinkClassName={'pagination-link'}
        previousLinkClassName={'pagination-link'}
        breakLinkClassName={'pagination-link'}
      />
    </div>
  );
};

export default Pagination;
