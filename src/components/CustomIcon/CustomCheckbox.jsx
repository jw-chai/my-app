import useWindowWidth from "../../utils/useWindowWidth";

// CustomCheckbox.jsx
const CustomCheckbox = ({ checked, onChange, tintColor }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  return (
    <label
      style={{
        width: isMobile ? "24px" : "32px",
        height: isMobile ? "24px" : "32px",
        flexShrink: 0,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="checkbox"
        style={{ display: "none" }}
        checked={checked}
        onChange={onChange}
      />
      {checked ? (
        <div
          style={{
            width: isMobile ? "24px" : "32px",
            height: isMobile ? "24px" : "32px",
            borderRadius: "8px",
            background: tintColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0781 2.91069C15.4035 3.23669 15.4035 3.76402 15.0781 4.08935L6.49013 12.6774L6.48312 12.6846C6.47838 12.6896 6.47356 12.6945 6.46867 12.6994C6.14267 13.0241 5.61533 13.0241 5.29 12.6994L0.910668 8.32009C0.585335 7.99409 0.585335 7.46609 0.910668 7.14142C1.236 6.81609 1.76333 6.81609 2.08933 7.14142L5.87867 10.9314L13.8995 2.91069C14.2255 2.58535 14.7528 2.58535 15.0781 2.91069Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="7.5"
            fill="white"
            stroke="#A8A8A8"
          />
        </svg>
      )}
    </label>
  );
};

export default CustomCheckbox;
