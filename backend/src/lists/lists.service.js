const knexInstance = require("../database/connection");

const getlist = async () => {
  const result = await knexInstance("todo").select("*");
  console.log(result);
  return result;
};

const getadd = async (items) => {
  const result = await knexInstance("todo").insert({ items: items });
  console.log(result);
  return "added";
};
const deleteItem = async (removeItem) => {
  const result = await knexInstance("todo").where("id", removeItem).del();
  return result;
};
const updateItem = async (value, editId) => {
  const result = await knexInstance("todo")
    .where("id", editId)
    .update({ items: value });
  return result;
};

module.exports = {
  getlist,
  getadd,
  deleteItem,
  updateItem,
};
