import React from "react";
import { useLocation } from "react-router-dom";

const SearchResultsPage = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <div className="search-results-page">
      <h3>Search Results</h3>
      {searchResults && searchResults.length > 0 ? (
        <ul className="list-group">
          {searchResults.map((student) => (
            <li key={student._id} className="list-group-item">
              {student.studentName} - {student.registerNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
