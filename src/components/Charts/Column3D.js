import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";
import Chart from "fusioncharts/fusioncharts.charts";


import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Resolves charts dependancy
charts(FusionCharts);

ReactFusioncharts.fcRoot(FusionCharts, Chart, FusionTheme);



const Column3D = ({data}) =>{
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    heigth: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        xAxisName: "Stars",
        yAxisName: "Repos",
        yAxisFontSize: "16px",
        xAxisFontSize: "16px",
        theme:"candy",
      },
      data
     }
  }

  
  return (
    <ReactFusioncharts {...chartConfigs}
    /> );
}


export default Column3D;
