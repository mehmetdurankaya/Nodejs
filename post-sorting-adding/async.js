const users = [
  { author: "User 1", content: "User 1 content" },
  { author: "User 2", content: "User 2 content" },
  { author: "User 3", content: "User 3 content." },
  { author: "User 4", content: "User 4 content" },
];

const userList = () => {
  users.map((user) => {
    console.log(`User: ${user.author}\n\tContent: ${user.content}`);
  });
};

const addUser = (newUser) => {
  return new Promise((resolve, reject) => {
    if (newUser) {
      users.push(newUser);
      resolve();
    } else {
      console.log("Bir hata oluştu!");
      reject();
    }
  });
};

async function showUsers() {
  userList();
  try {
    await addUser({
      author: "user5",
      content: "User 5 content",
    });
    userList();
  } catch (err) {
    console.log("Bir hata meydana geldi." + err);
  }
}

showUsers();
