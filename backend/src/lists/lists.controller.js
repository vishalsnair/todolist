const { getlist, getadd, deleteItem, updateItem } = require("./lists.service");

const read = async (req, res, next) => {
  // const listId = Number(req.params.listId);
  const foundlist = await getlist();
  res.json({ data: foundlist });
};

const add = async (req, res, next) => {
  const items = req.body.items;
  console.log(items);
  const addlist = await getadd(items);
  res.json({ data: addlist });
};
const remove = async (req, res, next) => {
  const removeItem = Number(req.params.removeItem);
  const removelist = await deleteItem(removeItem);
  res.json({ data: removelist });
};
const edit = async (req, res, next) => {
  const editId = Number(req.params.editId);
  const value = req.body.value;
  const editlist = await updateItem(value, editId);
  res.json({ data: editlist });
};
module.exports = { add, read, remove, edit };
