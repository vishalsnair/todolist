import { useEffect, useState } from "react";
import "./list.css";

function List(props) {
  const [flag, setflag] = useState(false);
  const [ElementIndex, setElementIndex] = useState("");

  const removeProduct = async (id) => {
    console.log(id);
    // props.SetItem([
    //   ...props.items.slice(0, index),
    //   ...props.items.slice(index + 1, props.items.length),
    // ]);
    const response = await fetch(`http://localhost:5000/items/remove/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    props.fetchData();
  };
  const [edit, setedit] = useState("");

  async function replace() {
    const response = await fetch(
      `http://localhost:5000/items/edit/${ElementIndex}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: edit }),
      }
    );
    const result = await response.json();
    setflag(!flag);
    props.fetchData();
  }
  function Edit(id) {
    setElementIndex(id);
    setflag(!flag);
  }

  return (
    <>
      <h4>Current List</h4>
      {flag && (
        <>
          {" "}
          <input
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />{" "}
          <button onClick={() => replace()}>Add edit</button>
        </>
      )}
      {/* {props.items} */}
      {props.data.map((i, index) => {
        return (
          <div key={i.id}>
            {index + 1} . {i.items}
            <button onClick={() => Edit(i.id)}>Edit</button>
            <button onClick={() => removeProduct(i.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
export default List;
