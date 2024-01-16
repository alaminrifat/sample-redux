import { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, title, size = "large" }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        width: size === "small" ? "60px" : "80px",
        height: size === "small" ? "25px" : "35px",
        borderRadius: "5px",
        backgroundColor: isHovered ? "#3C0753" : "#670a8f",
        color: "white",
        fontWeight: "bold",
        border: "none",
        transition: "background-color 0.5s ease",
        cursor: "pointer",
        boxShadow: isHovered ? "2px 2px 2px rgba(0, 0, 0, 0.2)" : "none",
        padding: "5px 10px",
    };
    return (
        <button
            aria-label={title}
            onClick={onClick}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};
Button.defaultProps = {
    onClick: () => {},
};
export default Button;
