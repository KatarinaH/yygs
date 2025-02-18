import './index.css';

function Button({ type, onClick, text }) {
  return (
    <button
      className={`button button__${type}`}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
}

export { Button };
