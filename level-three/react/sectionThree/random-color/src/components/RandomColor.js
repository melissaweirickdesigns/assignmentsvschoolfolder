import axios from "axios";

export const getRandomColor = () => {
  return axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then((response) => {
    return `#${response.data.new_color}`;
  });
};

export default function RandomColor({ color }) {
  return (
    <div className="color-container">
      <div className="random-color" style={{ backgroundColor: color }}>
      </div>
    </div>
  );
}
