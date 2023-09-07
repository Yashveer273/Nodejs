import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as AiIcon from "react-icons/ai";

import "./work.css";
// this is the table 1 layout
const Table1 = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async (err, res) => {
    try {
      let result = await fetch("http://localhost:5000/getitem", {
        headers: {
          authorization: JSON.parse(localStorage.getItem("authentication")),
        },
      });
      result = await result.json();
      setProduct(result.products);
      console.log(result);
    } catch (error) {
      alert(
        "Token expired please login again or before check internet conection"
      );
    }
  };

  const hendelerDelete = async (id) => {
    try {
      let result = await fetch(`http://localhost:5000/deleteitem/${id}`, {
        method: "Delete",
        headers: {
          authorization: JSON.parse(localStorage.getItem("authentication")),
        },
      });
      result = await result.json();
      if (result) {
        alert("Item deleted");
        getProduct();
      }
    } catch (error) {
      alert("conection refused please loginor before check internet conection");
    }
  };

  return (
    <>
      <div
        style={{
          height: "50px",

          position: "relative",
          left: "293px",
          width: "77%",

          top: "-31px",
          padding: "10px",
        }}
      >
        <span style={{ opacity: "0.5" }}>Add New Data..</span>
        <h1
          style={{
            opacity: "0.8",
          
            fontFamily: "math",

            fontSize: "33px",
          }}
        >
          Purchase Table
        </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "6px",
          width: "1179px",
          display: "inline-block",
          marginLeft: "20%",
          background: "#fff",
          borderRadius: "9px",
          boxShadow:
            "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)",
        }}
      >
        <div
          style={{
            float: "left",
            height: "56px",
            fontSize: "22px",

            display: "flex",
            padding: "29px",
            alignItems: "center",
          }}
        >
          <Link
            to="/CreateSale"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            Add Data
          </Link>
        </div>
        <ul
          style={{
            margin: 0,

            backgroundColor: "#fbfbfb",
            height: "56px",
            display: "inline-flex",
            width: "1175px",
            borderBottom: "1px solid #dee2ed",
            borderTop: "1px solid rgb(64 65 66)",
          }}
        >
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "208px",
              // background: "#c277cc",

              color: "black",

              fontSize: "1rem",
              position: "relative",
              left: "8px",
            }}
          >
            <b>#</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "180px",

              color: "black",
              fontSize: "1rem",
            }}
          >
            <b> Name</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "193px",
              fontSize: "1rem",
            }}
          >
            <b> Price</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "216px",

              color: "black",
              position: "relative",
              left: "14px",
            }}
          >
            <b>Category</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "216px",
              fontSize: "1rem",
            }}
          >
            <b> Action</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "234px",

              color: "black",
              fontSize: "1rem",
            }}
          >
            <b>Remove</b>
          </li>
        </ul>
        {Product.length === 0 ? (
          <p>Empty</p>
        ) : (
          <ul>
            {Product.map((item, index) => (
              <ul
                style={{
                  marginLeft: "0px",

                  backgroundColor: "#fff",
                  height: "49px",
                  alignItems: "center",
                  textAlign: "center",
                  display: "flex",
                  borderBottom: "1px solid #dee2ed",
                }}
                key={item._id}
              >
                <li
                  style={{
                    display: "inline-block",
                    backgroundColor: "#fff",
                    padding: "5px",
                    width: "169px",

                    marginLeft: "24px",
                    fontSize: "1rem",
                  }}
                >
                  {index + 1}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    backgroundColor: "#fff",

                    padding: "5px",
                    width: "191px",
                    marginLeft: "-11px",
                    fontSize: "1rem",
                  }}
                >
                  {item.Name}
                </li>
                <li
                  style={{
                    display: "inline-block",

                    backgroundColor: "#fff",
                    padding: "5px",
                    width: "180px",
                    marginLeft: "0px",
                    fontSize: "1rem",
                  }}
                >
                  {item.price}
                </li>
                <li
                  style={{
                    display: "inline-block",

                    backgroundColor: "#fff",

                    padding: "5px",
                    width: "174px",
                    marginLeft: "26px",
                    fontSize: "1rem",
                  }}
                >
                  {item.category}
                </li>
                <li
                  style={{
                    display: "inline-block",

                    backgroundColor: "#fff",

                    width: "192px",
                    position: "relative",
                    left: "29px",
                    fontSize: "1rem",
                  }}
                >
                  <Link to={"/updateTable/" + item._id}>
                    <AiIcon.AiFillEdit />
                  </Link>
                </li>
                <li
                  style={{
                    display: "inline-block",

                    position: "relative",
                    width: "154px",
                    left: "69px",
                    borderBottomLeftRadius: ".625rem",
                    fontSize: "1rem",
                  }}
                >
                  <Link>
                    <AiIcon.AiOutlineDelete
                      onClick={() => hendelerDelete(item._id)}
                    />
                  </Link>
                </li>
              </ul>
            ))}
          </ul>
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",

          display: "inline-block",
          marginLeft: "20%",
          width: "1179px",
          borderRadius: "9px",
          boxShadow:
            "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)",
          background: "#212529",
        }}
      >
        <div
          style={{
            float: "left",
            height: "56px",
            fontSize: "22px",

            display: "flex",
            padding: "29px",
            color: "white",
            alignItems: "center",
          }}
        >
          <Link
            to="/CreateSale"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            Add Data
          </Link>
        </div>
        <ul
          style={{
            margin: 0,

            width: "1175px",
            height: "56px",
            display: "inline-flex",
            background: "#212529",
            borderBottom: "1px solid rgb(64 65 66)",
            borderTop: "1px solid rgb(64 65 66)",
          }}
        >
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "208px",
              // background: "#c277cc",

              color: "black",

              fontSize: "1rem",
              color: "white",
              position: "relative",
              left: "8px",
            }}
          >
            <b>#</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "180px",

              color: "black",
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b> Name</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "193px",
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b> Price</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "216px",

              color: "black",
              color: "white",
              position: "relative",
              left: "14px",
            }}
          >
            <b>Category</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "216px",
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b> Action</b>
          </li>
          <li
            style={{
              display: "inline-block",

              padding: "5px",
              width: "234px",

              color: "black",
              fontSize: "1rem",
              color: "white",
            }}
          >
            <b>Remove</b>
          </li>
        </ul>
        {Product.length === 0 ? (
          <p style={{ color: "white" }}>Empty</p>
        ) : (
          <ul>
            {Product.map((item, index) => (
              <ul
                style={{
                  marginLeft: "0px",
                  borderBottom: "1px solid rgb(64 65 66)",
                  backgroundColor: "#fff",
                  height: "49px",
                  alignItems: "center",
                  textAlign: "center",
                  display: "flex",
                  background: "#212529",
                }}
                key={item._id}
              >
                <li
                  style={{
                    display: "inline-block",
                    // backgroundColor: "#fff",
                    padding: "5px",
                    width: "169px",

                    marginLeft: "24px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  {index + 1}
                </li>
                <li
                  style={{
                    display: "inline-block",
                    // backgroundColor: "#fff",

                    padding: "5px",
                    width: "191px",
                    marginLeft: "-11px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  {item.Name}
                </li>
                <li
                  style={{
                    display: "inline-block",

                    // backgroundColor: "#fff",
                    padding: "5px",
                    width: "180px",
                    marginLeft: "0px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  {item.price}
                </li>
                <li
                  style={{
                    display: "inline-block",

                    // backgroundColor: "#fff",

                    padding: "5px",
                    width: "174px",
                    marginLeft: "26px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  {item.category}
                </li>
                <li
                  style={{
                    display: "inline-block",

                    // backgroundColor: "#fff",

                    width: "192px",
                    position: "relative",
                    left: "29px",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  <Link
                    to={"/updateTable/" + item._id}
                    style={{ color: "white" }}
                  >
                    <AiIcon.AiFillEdit />
                  </Link>
                </li>
                <li
                  style={{
                    display: "inline-block",

                    position: "relative",
                    width: "154px",
                    left: "69px",
                    borderBottomLeftRadius: ".625rem",
                    fontSize: "1rem",
                  }}
                >
                  <Link>
                    <AiIcon.AiOutlineDelete
                      onClick={() => hendelerDelete(item._id)}
                    />
                  </Link>
                </li>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Table1;
