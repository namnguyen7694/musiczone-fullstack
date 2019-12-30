import React from 'react';
import Chart from '../../Chart';
import './index.sass';

const ChartPage = ({ vpop, kpop, pop }) => {
  return (
    <div className="chart-page">
      <div className="chart-page-chart">
        <Chart chart={vpop} />
      </div>
      <div className="chart-page-chart">
        <Chart chart={pop} />
      </div>
      <div className="chart-page-chart">
        <Chart chart={kpop} />
      </div>
    </div>
  );
};

export default ChartPage;