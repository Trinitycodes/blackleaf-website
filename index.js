// Backend Express Server
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/user.model");
const List = require("./models/list.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");

const cors = require("cors");
const { exists } = require("./models/user.model");
const production = process.env.REACT_APP_PRODUCTION;

app.use(express.static(path.join(__dirname, "./frontend/build")));

// use Cors
app.use(cors());
app.use(express.json());

/*mongoose.connect(process.env.DATABASE_CONNECT, {
    ssl: true,
    sslValidate: true,
    sslCA: `${__dirname}/ca-certificate.cer`
});*/

mongoose.connect(process.env.DATABASE_CONNECT);

app.post("/api/register", async (req, res) => {
  // Check to see if the display name is unique
  const nameIsTaken = await User.findOne({
    name: req.body.name,
  });

  if (nameIsTaken) {
    res.json({
      status: "error",
      error: "That username already exists.  Please choose another.",
    });
    return;
  }

  // Check to see if the phone number is unique
  const phoneIsTaken = await User.findOne({
    phone: req.body.phone,
  });

  if (phoneIsTaken) {
    res.json({
      status: "error",
      error:
        "That phone number is already connected to an account.  Please choose another or login.",
    });
    return;
  }

  // First check to see if there is a token.
  // If there is a token then call the update
  const token = req.headers["x-access-token"];
  if (token) {
    console.log(token);
  }
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const phoneNumber = req.body.phone.replace(/\D/g, "");
    await User.create({
      name: req.body.name,
      phone: phoneNumber,
      password: encryptedPassword,
    });

    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "A validation error has occured.  Please try again.",
    });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    phone: req.body.phone,
  });

  if (!user) {
    return res.json({ status: "error", error: "User Not Found" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid && isPasswordValid != null) {
    const token = jwt.sign(
      {
        name: user.name,
        phone: user.phone,
      },
      process.env.SECRET_KEY
    );

    res.json({ status: "ok", user: token });
  } else {
    return res.json({
      status: "error",
      user: false,
      error: "No User Found",
    });
  }
});

app.post("/api/signup", async (req, res) => {
  console.log(req.body.name);
  // Check to see if the email is unique
  /*if (req.body.email) {
        const emailIsTaken = await List.findOne({
            email: req.body.email,
        });

        if (emailIsTaken) {
            res.json({
                status: "error",
                error: "Looks like you already signed up with that Email Address. already exists.",
            });
            return;
        }
    }*/

  // Check to see if the phone number is unique
  if (req.body.phone) {
    const phoneIsTaken = await List.findOne({
      phone: req.body.phone,
    });

    if (phoneIsTaken) {
      res.json({
        status: "error",
        error: "Looks like someone already signed up with that Phone Number.",
      });
      return;
    }
  }

  try {
    const phoneNumber = req.body.phone.replace(/\D/g, "");
    await List.create({
      name: req.body.name,
      phone: phoneNumber,
    });

    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "A validation error has occured.  Please try again.",
    });
  }
});

/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});*/

app.listen(1337, () => {
  console.log("Server Started on 1337");
});
