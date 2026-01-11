import "./Percent.css";

export default function Percent({ percent }) {
  const getColorClass = () => {
    if (percent < 40) return "color-red";
    if (percent <= 60) return "color-yellow";
    return "color-green";
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={`display ${getColorClass()}`}>
        <div className="body"></div>
        <div className="top"></div>
        <div className="bot"></div>

        <div className="alca"></div>

        <div className="pin">
          <div className="pin-vert"></div>
          <div className="pin-hor"></div>
        </div>

        <div className="center"></div>

        <label className="percent">{percent}%</label>
      </div>
    </div>
  );
}
