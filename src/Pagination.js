// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-4 space-x-4">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
        onClick={() => onPageChange(index + 1)}
      >
        Page {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
