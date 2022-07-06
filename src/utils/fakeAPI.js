const users = [
  {
    id: "1",
    displayName: "Jane Doe",
    email: "janedoe@gmail.com",
    password: "a",
    books: [
      {
        id: "book-1",
        title: "History of Art",
        category: "Arts",
      },
      {
        id: "book-2",
        title: "World's Most Famous Artists",
        category: "Arts",
      },
      {
        id: "book-3",
        title: "Time Management",
        category: "Self-Improvement",
      },
    ],
  },
  {
    id: "2",
    displayName: "John Doe",
    email: "johndoe@gmail.com",
    password: "a",
    books: [
      {
        id: "book-1",
        title: "History of Art",
        category: "Arts",
      },
      {
        id: "book-2",
        title: "World's Most Famous Artists",
        category: "Arts",
      },
      {
        id: "book-3",
        title: "Time Management",
        category: "Self-Improvement",
      },
    ],
  },
];

const createUser = (email, password) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      return setTimeout(() => reject(new Error("User already exists.")), 1000);
    }
    setTimeout(() => resolve(Object.values({ email })), 1000);
  });

const login = (email, password) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser) {
      return setTimeout(
        () => reject(new Error("User not found or Wrong password.")),
        1000
      );
    }
    setTimeout(() => resolve(foundUser), 1000);
  });

const getUser = (userId) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find((user) => user.id === userId);
    return setTimeout(() => resolve(foundUser), 1000);
  });

const getBooks = (userId) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find((user) => user.id === userId);

    return setTimeout(() => resolve(foundUser.books), 1000);
  });

const getBook = (userId, bookId) =>
  new Promise((resolve, reject) => {
    const foundUser = users.find((user) => user.id === userId);
    const foundBook = foundUser.books.find((book) => book.id === bookId);
    return setTimeout(() => resolve(foundBook, 1000));
  });

export { createUser, login, getUser, getBooks, getBook };
