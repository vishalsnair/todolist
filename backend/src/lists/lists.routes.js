const itemrouter = require("express").Router();
const { read, add, remove, edit } = require("./lists.controller");

itemrouter.route("/listId").get(read);
itemrouter.route("/add").post(add);
itemrouter.route("/remove/:removeItem").delete(remove);
itemrouter.route("/edit/:editId").put(edit);
// itemrouter.route("/:item");

module.exports = { itemrouter };
