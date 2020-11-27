const express = require("express");
const router = express.Router();

let users = [
  {
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970",
  },
];

router.get("/all", (req, res, next) => {
  res.json({
    users: users,
  });
});

router.get("/year", (req, res, next) => {
  let newArr = [];
  for (let i = 0; i < users.length; i++) {
    let date = users[i].activationDate.split(" ");
    if (parseInt(date[date.length - 1]) === 2019) {
      newArr.push(users[i]);
    }
  }
  res.json({
    users: newArr,
  });
});

router.post("/add", (req, res, next) => {
  users.push(req.body);
  res.json({
    user: req.body,
  });
});

router.delete("/remove/:user", (req, res, next) => {
  let user = req.params.user;
  let removedUser;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === user) {
      removedUser = users.splice(i, 1);
    }
  }
  res.json({
    removedUser: removedUser,
  });
});

router.put("/update/:user", (req, res, next) => {
  let user = req.params.user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === user) {
      user[i] = req.body;
    }
  }

  res.send(req.body);
});

module.exports = router;
