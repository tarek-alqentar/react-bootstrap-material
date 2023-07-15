import CodeBox from "./CodeBox";

const Card = () => {
  const codeJsx = `
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import "../assets/Components.css";

const Components = () => {
  return (
    <>
      <div className="container  ms-0 ps-0 content">
        <div className="row">
          <div className="col-3 ms-0 ps-0">
            <Sidebar />
          </div>
          <div className="col-9 mt-5 pt-4 content-container d-flex align-items-start align-top ">
            <Routes>
              <Route path="Badge" element={<Badge />} />
              <Route path="Button" element={<Button />} />
              <Route path="Card" element={<Card />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
`;
  const codeCss = `.content {
  width: 100vw;
}
.align-top {
  height: calc(100vh - 100px);
  overflowy: auto;
}
`;

  return (
    <>
      <div className="container">
        <CodeBox
          title="JavaScript Code Example"
          jsxCode={codeJsx}
          cssCode={codeCss}
        />
      </div>
    </>
  );
};

export default Card;
