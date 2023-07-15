import CodeBox from "./CodeBox";

const Button = () => {
  const FullColorButton = () => {
    return (
      <>
        <button className="btn btn-primary m-2" type="button">
          primary
        </button>
        <button className="btn btn-secondary m-2" type="button">
          secondary
        </button>
        <button className="btn btn-tertiary m-2" type="button">
          tertiary
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
        <button className="btn btn-info m-2" type="button">
          info
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

  const codeFullColor = `  //primary button 
  <button className="btn btn-primary" type="button">
    primary
  </button>
  //secondary button 
  <button className="btn btn-secondary" type="button">
    secondary
  </button>
  //tertiary button
  <button className="btn btn-tertiary m-2" type="button">
    tertiary
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
  //info button
  <button className="btn btn-info m-2" type="button">
    info 
   </button>
  //dark button 
  <button className="btn btn-dark" type="button">
    dark
  </button>
  //light button 
  <button className="btn btn-light" type="button">
    light
  </button>`;

  return (
    <div className="container">
      <CodeBox
        handleFunction={FullColorButton}
        title="Full color button"
        jsxCode={codeFullColor}
      />
    </div>
  );
};

export default Button;
