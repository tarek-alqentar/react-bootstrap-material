import CodeBox from "./CodeBox";

const Badge = () => {
  const CodeBoxBadge = () => {
    return (
      <>
        <span className="badge text-bg-primary">Primary</span>{" "}
        <span className="badge text-bg-secondary">Secondary</span>{" "}
        <span className="badge text-bg-success">Success</span>{" "}
        <span className="badge text-bg-danger">Danger</span>{" "}
        <span className="badge text-bg-warning">Warning</span>{" "}
        <span className="badge text-bg-info">Info</span>{" "}
        <span className="badge text-bg-light">Light</span>{" "}
        <span className="badge text-bg-dark">Dark</span>
      </>
    );
  };
  const jsxCode = `<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-secondary">Secondary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-light">Light</span>
<span class="badge text-bg-dark">Dark</span>
`;
  const title = "Badges Examples";
  return (
    <div className="container">
      <CodeBox
        id={"CodeBoxBadge"}
        title={title}
        jsxCode={jsxCode}
        handleFunction={CodeBoxBadge}
      />
    </div>
  );
};

export default Badge;
