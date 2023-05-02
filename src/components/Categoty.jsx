import React from "react";

const Categoty = () => {
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
            <div className="col-sm-1 text-center">
              <div className="box-2">
                <a href="">
                  <img src="img/beach.png" alt="" className="w-100" />
                </a>
                <p>Beach</p>
              </div>
            </div>

            <div className="col-sm-1 text-center">
              <div className="box2">
                <a href="">
                  <img src="img/mountain.png" alt="" className="w-100" />
                </a>
                <p>Mountain</p>
              </div>
            </div>

            <div className="col-sm-1 text-center">
              <div className="box2">
                <a href="">
                  <img src="img/park.png" alt="" className="w-100" />{" "}
                </a>
                <p>Park</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoty;
