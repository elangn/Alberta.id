import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [category, setCategory] = useState([]);
  const baseUrl = "https://travel-journal-api-bootcamp.do.dibimbing.id";

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/categories`, {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="category ">
      <div className="container">
        <div className="box-category">
          <p className="my-1">
            {" "}
            ---------
            <img src="img/passport.png" alt="" className="mx-2" />
            ---------
          </p>
          <p className="my-0"> Look Popular destination category</p>
          <p> CHOOSE CATEGORY</p>
        </div>

        <div className="box-category2 mt-4">
          <div className="row">
            {category.map((item, i) => {
              return (
                <div className="col-sm-2" key={i}>
                  <div className="card">
                    <img
                      src={item.imageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">{item.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
