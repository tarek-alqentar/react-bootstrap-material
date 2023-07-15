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

  const OutlineColorButton = () => {
    return (
      <>
        <button type="button" className="btn btn-outline-primary m-2">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary m-2">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-tertiary m-2">
          Tertiary
        </button>
        <button type="button" className="btn btn-outline-success m-2">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger m-2">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning m-2">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info m-2">
          Info
        </button>
        <button type="button" className="btn btn-outline-light m-2">
          Light
        </button>
        <button type="button" className="btn btn-outline-dark m-2">
          Dark
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

  const codeOutlineColor = `
   //Primary button
   <button type="button" className="btn btn-outline-primary">
     Primary
   </button>
   //Secondary button
   <button type="button" className="btn btn-outline-secondary">
     Secondary
   </button>
   //Tertiary button
   <button type="button" className="btn btn-outline-tertiary">
     Tertiary
   </button>
   //Success button
   <button type="button" className="btn btn-outline-success">
     Success
   </button>
   //Danger button
   <button type="button" className="btn btn-outline-danger">
     Danger
   </button>
   <button type="button" className="btn btn-outline-warning">
     Warning
   </button>
   //Info button
   <button type="button" className="btn btn-outline-info">
     Info
   </button>
   //Light button
   <button type="button" className="btn btn-outline-light">
     Light
   </button>
   //Dark button
   <button type="button" className="btn btn-outline-dark">
     Dark
   </button>`;

  return (
    <div className="container">
      <CodeBox
        id="FullColorButton"
        handleFunction={FullColorButton}
        title="Full color button"
        jsxCode={codeFullColor}
      />
      <CodeBox
        id="OutlineColorButton"
        handleFunction={OutlineColorButton}
        title="Outline color button"
        jsxCode={codeOutlineColor}
      />
    </div>
  );
};

export default Button;
