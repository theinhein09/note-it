class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  toString() {
    return this.name + ", " + this.state + ", " + this.country;
  }
}

// Firestore data converter
const userConverter = {
  toFirestore: (user) => {
    return {
      username: user.username,
      email: user.email,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.username, data.email);
  },
};

export default userConverter;
