import "../assets/Components.css";

import homeCover1 from "../../public/homeCover1.png";
const Home = () => {
  return (
    <>
      <div className="container-fluid  ms-0 ps-0 content ">
        <div className="row bg-img">
          <div className="col-6  align-top "></div>
          <div className="col-6 align-top ">
            <img src={homeCover1} className="" alt="img for home cover "></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
