import PropTypes from "prop-types";
import "./Textbox.css";
const Textbox = ({ onChange, value, onEnter }) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && onEnter) {
            onEnter();
        }
    };
    return (
        <div className="textbox-container">
            <input
                type="text"
                className="textbox-input"
                value={value}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};
Textbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    onEnter: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default Textbox;
