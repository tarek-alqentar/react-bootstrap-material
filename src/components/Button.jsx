import CodeBox from "./CodeBox";

const Button = () => {
  const code1 = `const message = 'Hello, world!';
console.log(message);`;
  const code2 = `.para {
  width: 100%;
}`;

  return (
    <div className="container">
      <CodeBox
        title="JavaScript Code Example"
        jsxCode={code1}
        cssCode={code2}
      />
    </div>
  );
};

export default Button;
