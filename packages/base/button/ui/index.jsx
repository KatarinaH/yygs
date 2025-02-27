import './index.css';

function Button({ type, onClick, text, color, inCart }) {
  return (
    <button
      className={`button button__${type} button__${color} ${inCart}`}
      onClick={() => {
        onClick();
      }}
    >
      <span>{text}</span>
    </button>
  );
}

export { Button };
