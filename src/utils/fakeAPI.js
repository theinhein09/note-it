const user = {
  id: "1",
  displayName: "Jane Doe",
  email: "janedoe@gmail.com",
  password: "qwe",
};

const createUser = (email, password) =>
  new Promise((resolve, reject) => {
    if (email === user.email && password === user.password) {
      return setTimeout(() => reject(new Error("User already exists.")), 1000);
    }
    setTimeout(() => resolve(Object.values({ email })), 1000);
  });

const login = (email, password) =>
  new Promise((resolve, reject) => {
    if (email !== user.email) {
      return setTimeout(() => reject(new Error("User not found.")), 1000);
    } else if (password !== user.password) {
      return setTimeout(() => reject(new Error("Wrong password.")), 1000);
    }
    setTimeout(() => resolve(user), 1000);
  });

const getUser = (userId) =>
  new Promise((resolve, reject) => {
    return setTimeout(() => resolve(user), 1000);
  });

export { createUser, login, getUser };
