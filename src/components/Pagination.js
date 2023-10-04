// src/components/Pagination.js
import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 5, totalPages);

    return (
        <ul className="pagination">
            <li className='pagemarker' style={{ backgroundColor: "#d1ded4" }}>
                <span className="page-info" style={{ backgroundColor: "#d1ded4", fontSize: "14px" }}>Page {currentPage} of {totalPages}</span>
            </li>
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &larr;
                </button>
            </li>

            {pageNumbers.map((page) => {
                if (page === 1 || page === totalPages || (page >= startPage && page <= endPage)) {
                    return (
                        <li key={page}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={currentPage === page ? 'active' : ''}
                            >
                                {page}
                            </button>
                        </li>
                    );
                } else if (page === endPage + 1 && endPage < totalPages) {

                    return <li className='contents' key={page}>...</li>;
                }
                return null;
            })}

            <li>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    &rarr;
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
