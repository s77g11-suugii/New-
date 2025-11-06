const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// === Helper functions ===
function readUsers() {
  try {
    if (!fs.existsSync("users.txt")) {
      return [];
    }

    const data = fs.readFileSync("users.txt", "utf8").trim();
    if (!data) return [];

    return data.split("\n").map(line => {
      const [name, password, balance] = line.split(":");
      return {
        name,
        password,
        balance: Number(balance) || 0,
      };
    });
  } catch (err) {
    console.log("алдаа:", err.message);
    return [];
  }
}

function writeUsers(users) {
  const lines = users.map(u => `${u.name}:${u.password}:${u.balance}`).join("\n");
  fs.writeFileSync("users.txt", lines);
}

//function logTransaction(username, type, amount) {
//}

// === Register new user ===
function register() {
  rl.question("Нэр: ", (name) => {
    rl.question("Нууц үг: ", (password) => {
      const users = readUsers();
      users.push({ name, password, balance: 0 });
      writeUsers(users);
      console.log("✅ Амжилттай бүртгэгдлээ!");
      rl.close();
    });
  });
}

// === Login + Menu ===
function login() {
  rl.question("Нэр: ", (name) => {
    rl.question("Нууц үг: ", (password) => {
      const users = readUsers();
      const user = users.find(u => u.name === name && u.password === password);
      console.log("✅ Амжилттай нэвтэрлээ!");
      showMenu(user);
    });
  });
}

function showMenu(user) {
  console.log(`
==== ATM MENU ====
1. Үлдэгдэл шалгах
2. Мөнгө нэмэх
3. Мөнгө авах
4. Гарах
`);

  rl.question("Сонголт: ", (choice) => {
    if (choice === "1") {
      console.log(`Таны үлдэгдэл: ${user.balance}₮`);
      rl.close();

    } else if (choice === "2") {
      rl.question("Нэмэх мөнгө: ", (amt) => {
        amt = Number(amt);

        user.balance += amt;

        const allUsers = readUsers();
        const index = allUsers.findIndex(u => u.name === user.name);
        allUsers[index] = user;
        writeUsers(allUsers);

        console.log("✅ Мөнгө амжилттай нэмэгдлээ!");
        rl.close();
      });

    } else if (choice === "3") {
      rl.question("Авах мөнгө: ", (amt) => {
        amt = Number(amt);

        if (amt > user.balance) {
          console.log("❌ Үлдэгдэл хүрэлцэхгүй!");
          return rl.close();
        }

        user.balance -= amt;

        const allUsers = readUsers();
        const index = allUsers.findIndex(u => u.name === user.name);
        allUsers[index] = user;
        writeUsers(allUsers);

        console.log("✅ Мөнгө амжилттай гарлаа!");
        rl.close();
      });

    } else if (choice === "4") {
      console.log("👋 Гарав.");
      rl.close();

    } else {
      console.log("❌ Буруу сонголт");
      rl.close();
    }
  });
}

// === Эхлэх ===
console.log(`
==== ATM SYSTEM ====
1. Нэвтрэх
2. Бүртгүүлэх
`);

rl.question("Сонголт: ", (choice) => {
  if (choice === "1") login();
  else if (choice === "2") register();
  else {
    console.log("⚠️ Буруу сонголт!");
    rl.close();
  }
});