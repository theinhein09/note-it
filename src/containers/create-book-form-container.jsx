import React from "react";
import PropTypes from "prop-types";
import CreateBookForm from "../components/create-book-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import useFormData from "../hooks/useFormData";
import FireStore from "../firebase/firestore";
import { useUserContextState } from "../contexts/user-context";

const CreateBookFormContainer = (props) => {
  const { closeDialog } = props;
  const setError = useErrorContextUpdater();
  const [{ title, category }, handleInputChange, handleResetForm] = useFormData(
    {
      title: "",
      category: "",
    }
  );
  const { user } = useUserContextState();

  const handleCreateBook = async (event) => {
    setError(null);
    try {
      if (title === "") throw new Error("Book title is required");
      const book = { title, category: category === "" ? "Default" : category };
      const booksFS = new FireStore(`users/${user.uid}/books`);
      await booksFS.addDoc(book);
      handleResetForm();
      closeDialog();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <CreateBookForm
      {...props}
      title={title}
      onChange={handleInputChange}
      category={category}
      onCreateBook={handleCreateBook}
    />
  );
};

CreateBookFormContainer.propTypes = {
  closeDialog: PropTypes.func,
};

export default CreateBookFormContainer;
