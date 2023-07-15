/* eslint-disable react/prop-types */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

import "../assets/CodeBox.css";

const CodeBox = ({ title, jsxCode, cssCode }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [copy, setCopy] = useState(false);
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500); // set the timeout to 1 second
  };

  return (
    <div className="code-box card mb-2">
      <div className="card-header">
        <h4 className="code-box-title">{title}</h4>
        <button
          className="btn btn-outline-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Show Code
        </button>
      </div>
      <div className="card-body collapse" id="collapseExample">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link tap ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabChange(1)}
            >
              JSX
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link tap ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabChange(2)}
            >
              CSS
            </a>
          </li>
        </ul>
        <div className={`${activeTab === 1 ? "visible" : "hidden"} pt-2`}>
          <CopyToClipboard text={jsxCode} onCopy={handleCopy}>
            <button
              type="button"
              className={`btn ${
                copy ? "btn-outline-success" : "btn-outline-primary"
              }`}
            >
              {copy ? "Copied" : <FaCopy />}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter
            language="jsx"
            style={darcula}
            className="code-box-content"
          >
            {jsxCode}
          </SyntaxHighlighter>
        </div>
        <div className={`${activeTab === 2 ? "visible" : "hidden"} pt-2`}>
          <CopyToClipboard text={cssCode} onCopy={handleCopy}>
            <button
              type="button"
              className={`btn ${
                copy ? "btn-outline-success" : "btn-outline-primary"
              }`}
            >
              {copy ? "Copied" : <FaCopy />}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter
            language="css"
            style={darcula}
            className="code-box-content"
          >
            {cssCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBox;
