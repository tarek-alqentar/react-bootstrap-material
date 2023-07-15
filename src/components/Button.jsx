import CodeBox from "./CodeBox";

const Button = () => {
  const CodeBoxButton = () => {
    return (
      <>
        <button className="btn btn-primary m-2" type="button">
          primary
        </button>
        <button className="btn btn-secondary m-2" type="button">
          secondary
        </button>
        <button className="btn btn-success m-2" type="button">
          success
        </button>
        <button className="btn btn-warning m-2" type="button">
          warning
        </button>
        <button className="btn btn-danger m-2" type="button">
          danger
        </button>
        <button className="btn btn-dark m-2" type="button">
          dark
        </button>
        <button className="btn btn-light m-2" type="button">
          light
        </button>
      </>
    );
  };

  const code1 = `  //primary button 
  <button className="btn btn-primary" type="button">
    primary
  </button>
  //secondary button 
  <button className="btn btn-secondary" type="button">
    secondary
  </button>
  //success button 
  <button className="btn btn-success" type="button">
    success
  </button>
  //warning button 
  <button className="btn btn-warning" type="button">
    warning
  </button>
  //danger button 
  <button className="btn btn-danger" type="button">
    danger
  </button>
  //dark button 
  <button className="btn btn-dark" type="button">
    dark
  </button>
  //light button 
  <button className="btn btn-light" type="button">
    light
  </button>`;
  const code2 = `.para {
  width: 100%;
}`;

  return (
    <div className="container">
      <CodeBox
        handleFunction={CodeBoxButton}
        title="JavaScript Code Example"
        jsxCode={code1}
        cssCode={code2}
      />
    </div>
  );
};

export default Button;
