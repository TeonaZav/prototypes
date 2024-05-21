const Section = ({ children, heading }) => {
  return (
    <section className="bg-light rounded p-4 mb-4">
      <h2 style={{ color: "#463a62" }}>{heading}</h2>
      {children}
    </section>
  );
};

export default Section;
