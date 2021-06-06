import { Bar, Line } from "react-chartjs-2";
import React from "react";

const Bar3D = ({ data }) => {

  const dados = {
    labels: data.labels,
    datasets: [
      {
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: data.data,
      },
    ],
  };

  return (
    <div>
      <h4> "Most Forks",</h4>
      <Bar data={dados} width={100} height={50} />
    </div>
  );
};
export default Bar3D;
