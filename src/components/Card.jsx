import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "react-copy-to-clipboard";

const Card = () => {
  const code = `
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

  return (
    <>
      <div style={{ width: "400px" }}>
        <SyntaxHighlighter language="jsx" style={darcula}>
          {code}
        </SyntaxHighlighter>
        <CopyToClipboard text={code}>
          <div>
            <button>Copy</button>
          </div>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default Card;
