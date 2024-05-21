import { useNavigate } from "react-router-dom";

const NavigationButtons = ({ prevPath, nextPath }) => {
  const navigate = useNavigate();

  return (
    <div className="w-100 d-flex justify-content-between mb-4">
      {prevPath && (
        <button
          className="btn btn-light px-2"
          onClick={() => navigate(prevPath)}
        >
          &lt; Previous
        </button>
      )}
      {nextPath && (
        <button
          className="btn btn-light ml-auto"
          onClick={() => navigate(nextPath)}
        >
          Next &gt;
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
