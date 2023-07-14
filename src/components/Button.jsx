import CodeBox from "./CodeBox";

const Button = () => {
  const CodeBoxButton = () => {
    return (
      <button className="btn btn-primary" type="button">
        button
      </button>
    );
  };

  const code1 = `const message = 'Hello, world!';
console.log(message);`;
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
