import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../containers/button-container";
import { useUserContextState } from "../contexts/user-context";
import FireStore from "../firebase/firestore";

const Profile = (props) => {
  const navigate = useNavigate();
  const { user } = useUserContextState();

  const [books, setBooks] = useState([]);

  const getPages = useCallback(
    async (bookId) => {
      const pagesFS = new FireStore(`users/${user.uid}/books/${bookId}/pages`);
      const docs = await pagesFS.getDocs();
      return docs;
    },
    [user.uid]
  );

  const getBooks = useCallback(async () => {
    const booksFS = new FireStore(`users/${user.uid}/books`);
    const docs = await booksFS.getDocs();

    const books = await (() => {
      const promises = docs.map(async (doc) => {
        const pages = await getPages(doc.id);
        return {
          ...doc,
          pages,
        };
      });
      return Promise.all(promises);
    })();

    setBooks(books);
  }, [user.uid, getPages]);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div role="presentation" className="font-display">
      <ButtonContainer label="Back" onClick={() => navigate(-1)} />
      <h2>{user.displayName}</h2>
      <p>Email: {user.email}</p>
      {books.length !== 0 && (
        <table>
          <caption className="text-left">All Books</caption>
          <thead className="border border-black">
            <tr className="border border-black">
              <th className="border border-black px-4 py-1">No</th>
              <th className="border border-black px-4 py-1">Books</th>
              <th className="border border-black px-4 py-1">Categories</th>
              <th className="border border-black px-4 py-1">Sections</th>
              <th className="border border-black px-4 py-1">Pages</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <tr key={book.id} className="border border-black">
                <td className="border border-black px-4 py-1">{i + 1}</td>
                <td className="border border-black px-4 py-1">{book.title}</td>
                <td className="border border-black px-4 py-1">
                  {book.category}
                </td>
                <td className="overflow-hidden border border-black px-4 py-1">
                  {book.pages.length !== 0 &&
                    book.pages.map((page) => <p>{page.section}</p>)}
                </td>
                <td className="border border-black px-4 py-1">
                  {book.pages.length !== 0 &&
                    book.pages.map((page) => <p>{page.title}</p>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
