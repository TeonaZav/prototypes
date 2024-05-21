const InnerContainer = ({ children, heading3 = "", heading4 = "" }) => {
  return (
    <div
      className="p-2 mb-2 rounded border"
      style={{ backgroundColor: "white" }}
    >
      <h3 style={{ fontWeight: "400", fontSize: "20px" }}>{heading3}</h3>
      <h4 style={{ fontWeight: "400", fontSize: "20px" }}>{heading4}</h4>
      {children}
    </div>
  );
};

export default InnerContainer;
