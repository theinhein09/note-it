import React, { StrictMode, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../containers/button-container";
import { useErrorContextUpdater } from "../contexts/error-context";
import { useUserContextState } from "../contexts/user-context";
import Authenticator from "../firebase/authenticator";
import FireStore from "../firebase/firestore";
import ErrorContainer from "../containers/error-container";
import ConfirmationDialog from "../components/dialog/confirmation-dialog";
import useBoolean from "../hooks/useBoolean";
import PrivateRoute from "../components/private-route";
import Loading from "../components/loading";
import BooksTable from "../components/books-table";
import ProfileTable from "../components/profile-table";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useUserContextState();
  const [updatedProfile, setUpdatedProfile] = useState({
    email: null,
    displayName: null,
  });
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();

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
      startLoading();
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
    finishLoading();
  }, [user.uid, getPages, startLoading, finishLoading]);

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
    <StrictMode>
      <PrivateRoute>
        <div role="presentation" className="p-2 font-display">
          <ButtonContainer label="Back" onClick={() => navigate(-1)} />
          <ProfileTable
            updatedProfile={updatedProfile}
            onNameSave={onNameSave}
            user={user}
            onEmailSave={onEmailSave}
            onPasswordSave={onPasswordSave}
            openDialog={openDialog}
          />
          <ErrorContainer />
          {loading ? (
            // TODO UPDATE STYLE OF LOADING
            <Loading />
          ) : (
            <>{books.length !== 0 && <BooksTable books={books} />}</>
          )}
        </div>
        {dialog && (
          <ConfirmationDialog
            onConfirm={onDeleteAccount}
            closeDialog={closeDialog}
            message="Are you sure you want to delete this account?"
          />
        )}
      </PrivateRoute>
    </StrictMode>
  );
};

export default Profile;
