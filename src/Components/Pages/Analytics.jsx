import React from "react";
import { Doughnut } from "react-chartjs-2";

const Analytics = () => {
  const data = {
    labels: ["Red", "Green"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#e53e3e", "#48bb78"],
      },
    ],
  };
  return (
    <div>
      <div className="w-32 h-32">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
