import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

// Resolves charts dependancy
charts(FusionCharts);



const Pie3D = ({data}) =>{
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    heigth: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "candy",
        decimals: 0,
        pieRadius: "45%"
      },
      data
     }
  }

  
  return (
    <ReactFusioncharts {...chartConfigs}
    /> );
}


export default Pie3D;
