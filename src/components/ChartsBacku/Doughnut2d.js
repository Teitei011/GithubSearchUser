import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import Chart from "fusioncharts/fusioncharts.charts";


import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Resolves charts dependancy
charts(FusionCharts);

ReactFusioncharts.fcRoot(FusionCharts, Chart, FusionTheme);



const Doughnut2D = ({data}) =>{
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    heigth: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        doughnutRadius: "45%",
        showPercentValue: 0,
        theme:"candy",
      },
      data
     }
  }

  
  return (
    <ReactFusioncharts {...chartConfigs}
    /> );
}


export default Doughnut2D;
