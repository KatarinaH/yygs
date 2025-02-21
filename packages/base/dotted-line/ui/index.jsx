import './index.css';

function DottedLine({ length, color }) {
  return <span className={`dotted-line dotted-line__${length} ${color}`}></span>;
}

export { DottedLine };
