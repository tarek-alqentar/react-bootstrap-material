/* eslint-disable react/prop-types */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  // materialDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import React from "react";

import "../assets/CodeBox.css";

const CodeBox = ({ id, handleFunction, title, jsxCode }) => {
  let activeTab = 1;
  const [copy, setCopy] = useState(false);
  const [showCode, setShowCode] = useState(false);

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
        <hr />
        {React.createElement(handleFunction)}
        <br />
        <button
          className="btn btn-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide " : "Show "}
          <i className={`bi bi-arrow-${showCode ? "up" : "down"}-circle`}></i>
        </button>
      </div>
      <div className="card-body collapse" id={id}>
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
            style={materialLight}
            className="code-box-content"
          >
            {jsxCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBox;
