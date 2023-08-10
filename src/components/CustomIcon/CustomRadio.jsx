import useWindowWidth from "../../utils/useWindowWidth";

// CustomRadio.jsx
const CustomRadio = ({ checked, onChange, tintColor }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  return (
    <label
      style={{
        width: isMobile ? "24px" : "32px",
        height: isMobile ? "24px" : "32px",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="radio"
        style={{ display: "none" }}
        checked={checked}
        onChange={onChange}
      />
      {checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="16" fill={tintColor} />
          <circle cx="16" cy="16" r="8" fill="#F7F7F7" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="15.5" fill="white" stroke="#A8A8A8" />
        </svg>
      )}
    </label>
  );
};

export default CustomRadio;
