import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ChartsProps } from '../../../models/chart';


export default function Charts(props: ChartsProps) {
  const {
    chartType, isStacked, labels, datasets,
  } = props;
  const canvasEl = useRef(null);


  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');

    const config = {
      type: chartType,
      data: {
        labels,
        datasets,
      },
      options: {
        scales: {
          x: {
            stacked: isStacked,
          },
          y: {
            stacked: isStacked,
          },
        },
      },
    };

    const myLineChart = new Chart(ctx, config as any);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
