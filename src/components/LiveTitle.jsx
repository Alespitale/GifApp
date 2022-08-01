import "../styles/LiveTitle.css";

export const LiveTitle = () => {
  return (
    <div className="title-container">
      <svg viewBox="0 0 960 100">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Gifinder
          </text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="title"></use>
          <use xlinkHref="#s-text" className="title"></use>
          <use xlinkHref="#s-text" className="title"></use>
          <use xlinkHref="#s-text" className="title"></use>
          <use xlinkHref="#s-text" className="title"></use>
        </g>
      </svg>
    </div>
  );
};
