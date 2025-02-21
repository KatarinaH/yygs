import './index.css';

function Button({ type, onClick, text, color }) {
  return (
    <button
      className={`button button__${type} button__${color}`}
      onClick={() => {
        onClick();
      }}
    >
      <span>{text}</span>
    </button>
  );
}

export { Button };
