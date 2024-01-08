const users = [
  { author: "User 1", content: "User 1 content" },
  { author: "User 2", content: "User 2 content" },
  { author: "User 3", content: "User 3 content." },
  { author: "User 4", content: "User 4 content" },
];

const listusers = () => {
  users.map((user) => {
    console.log(`User: ${user.author}\n\tContent: ${user.content}`);
  });
};

const adduser = (newuser) => {
  const promise = new Promise((resolve, reject) => {
    if (newuser != "") {
      users.push(newuser);
      resolve("adduser succeed.");
    } else {
      resolve("adduser failed.");
    }
  });

  return promise;
};

adduser({
  author: "user5",
  content: "User 5 content",
})
  .then(() => {
    listusers();
  })
  .catch((err) => {
    console.log(err);
  });
