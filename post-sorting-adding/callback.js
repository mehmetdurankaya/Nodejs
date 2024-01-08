const users = [
  { author: "User 1", content: "User 1 content" },
  { author: "User 2", content: "User 2 content" },
  { author: "User 3", content: "User 3 content." },
  { author: "User 4", content: "User 4 content" },
];

const listusers = () => {
  users.map((user) => {
    try {
      console.log(`User: ${user.author}\n\tContent: ${user.content}`);
    } catch (err) {
      console.log("user listelenemiyor.");
    }
  });
};

const adduser = (newuser) => {
  if (newuser != "") {
    users.push(newuser);
  } else {
    console.log("Boş user atılamaz!");
  }
};

const showusers = (callback) => {
  listusers();
  callback({
    author: "user5",
    content: "User 5 content",
  });
  listusers();
};

showusers(adduser);
