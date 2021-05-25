"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");
const jwt = require("jsonwebtoken");
const table = "user";

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM user";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    const token = req.params.token;
    var decoded=jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    let sql = "SELECT * FROM user WHERE id = " + decoded.id;
    db.query(sql, [decoded.id], (err, response) => {
      if (err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).send({
        user: {
          username: response[0].username,
          address: response[0].address,
        },
      });
    });
  },
  update: (req, res) => {
    let data = req.body;
    let productId = req.params.productId;
    let sql = "UPDATE user SET ? WHERE id = ?";
    db.query(sql, [data, productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Update success!" });
    });
  },
  store: (req, res) => {
    let data = req.body;
          let sql = "INSERT INTO user SET ?";
          db.query(sql, [data], (err, response) => {
            if (err) {
              res.header("Access-Control-Allow-Origin", "*");
              res.status(204).send({
              })
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send({
            });
          });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM user WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
  login: (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400);
      }
      db.query(
        "SELECT * FROM  user WHERE username = ? AND password = ? ",
        [username, password],
        (error, results) => {
          if (results.length > 0) {
            const id = results[0].id;
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN,
            });
            const cookieOptions = {
              expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60
              ),
              httpOnly: true,
            };
            res.cookie("token", token, cookieOptions);
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send({
              token
            });
          } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(204).send({
              message: "Dang nhap that bai",
            });
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  },
  register: (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    db.query(
      "select username from user where username = ?" + username,
      (error, results) => {
        if (error) {
          console.log(error);
        }
        if (results.length > 0) {
          return res.render("register", {
            message: "that email is already in use ",
          });
        }
        db.query(
          "INSERT INTO user values(" + username,
          password,
          null + ")",
          (error, result) => {
            if (error) {
              console.log(error);
            } else {
              return res.render("register", {
                message: "user have register",
              });
            }
          }
        );
      }
    );
  },
};
