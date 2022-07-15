import React from "react";
import PropTypes from "prop-types";

const BooksTable = (props) => {
  const { books } = props;

  return (
    <table className="border-collapse">
      <caption className="text-left">All Books</caption>
      <thead className="bg-black text-white">
        <tr>
          <th className="border border-black px-4 py-1">No</th>
          <th className="border border-black px-4 py-1">Books</th>
          <th className="border border-black px-4 py-1">Categories</th>
          <th className="border border-black px-4 py-1">Sections</th>
          <th className="border border-black px-4 py-1">Pages</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <tr key={book.id}>
            <td className="border border-black px-4 py-1 align-top">{i + 1}</td>
            <td className="border border-black px-4 py-1 align-top">
              {book.title}
            </td>
            <td className="border border-black px-4 py-1 align-top">
              {book.category}
            </td>
            <td className="border border-black">
              {book.pages.length !== 0 &&
                book.pages.map((page) => (
                  <div
                    key={page.id}
                    className=" border-t border-black px-4 py-1 first:block first:border-none"
                  >
                    {page.section}
                  </div>
                ))}
            </td>
            <td className="border border-black">
              {book.pages.length !== 0 &&
                book.pages.map((page) => (
                  <div
                    key={page.id}
                    className=" border-t border-black px-4 py-1 first:block first:border-none"
                  >
                    {page.title}
                  </div>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BooksTable.propTypes = {
  books: PropTypes.array,
};

export default BooksTable;
