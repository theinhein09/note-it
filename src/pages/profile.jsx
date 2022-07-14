import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../containers/button-container";
import EditableInputContainer from "../containers/editable-input-container";
import { useErrorContextUpdater } from "../contexts/error-context";
import { useUserContextState } from "../contexts/user-context";
import Authenticator from "../firebase/authenticator";
import FireStore from "../firebase/firestore";
import ErrorContainer from "../containers/error-container";
import ConfirmationDialog from "../components/dialog/confirmatiion-dialog";
import useBoolean from "../hooks/useBoolean";
import { CgUserRemove } from "react-icons/cg";

const Profile = (props) => {
  const navigate = useNavigate();
  const { user } = useUserContextState();
  const [updatedProfile, setUpdatedProfile] = useState({
    email: null,
    displayName: null,
  });

  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();

  const [books, setBooks] = useState([]);

  const setError = useErrorContextUpdater();

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

  const onNameSave = async ({ content }) => {
    try {
      await Authenticator._updateProfile(user, { displayName: content });
      setUpdatedProfile((prev) => ({
        ...prev,
        displayName: content,
      }));
    } catch (e) {
      setError(e);
    }
  };

  const onEmailSave = async ({ content }) => {
    try {
      await Authenticator._updateEmail(content);
      setUpdatedProfile((prev) => ({ ...prev, email: content }));
    } catch (e) {
      setError(e);
    }
  };

  const onPasswordSave = async ({ content }) => {
    try {
      await Authenticator._updatePassword(content);
    } catch (e) {
      setError(e);
    }
  };

  const onDeleteAccount = async () => {
    await Authenticator._deleteUser();
  };

  return (
    <>
      <div role="presentation" className="p-2 font-display">
        <ButtonContainer label="Back" onClick={() => navigate(-1)} />
        <table className="my-10 text-left">
          <caption className="text-left">Profile</caption>
          <tbody>
            <tr>
              <th className="pr-8">Username</th>
              <td>
                <EditableInputContainer
                  content={updatedProfile.displayName || user.displayName}
                  onSave={onNameSave}
                  id={user.uid}
                  customClassName="min-w-full"
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <EditableInputContainer
                  content={updatedProfile.email || user.email}
                  onSave={onEmailSave}
                  id={user.uid}
                  customClassName="min-w-full"
                />
              </td>
            </tr>
            <tr>
              <th>Change Password</th>
              <td>
                <EditableInputContainer
                  onSave={onPasswordSave}
                  content=""
                  id={user.uid}
                  customClassName="min-w-full"
                  type="password"
                />
              </td>
            </tr>
          </tbody>
          <tfoot className="my-5 flex">
            <tr>
              <td>
                <ButtonContainer
                  label="Delete Account"
                  icon={<CgUserRemove />}
                  onClick={openDialog}
                />
              </td>
            </tr>
          </tfoot>
        </table>
        <ErrorContainer />
        {books.length !== 0 && (
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
                  <td className="border border-black px-4 py-1 align-top">
                    {i + 1}
                  </td>
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
        )}
      </div>
      {dialog && (
        <ConfirmationDialog
          onConfirm={onDeleteAccount}
          closeDialog={closeDialog}
          message="Are you sure you want to delete this account?"
        />
      )}
    </>
  );
};

Profile.propTypes = {};

export default Profile;
