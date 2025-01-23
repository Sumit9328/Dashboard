// import React, { useRef, useEffect } from "react";
// import { Chart, ChartConfiguration } from "chart.js"; // Ensure correct import of Chart.js

// export default function TeachingActivity() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (canvasRef.current) {
//       const ctx = canvasRef.current.getContext("2d");
//       if (ctx) {
//         const config: ChartConfiguration = {
//           type: "line",
//           data: {
//             labels: ["January", "February", "March", "April", "May", "June", "July"],
//             datasets: [
//               {
//                 label: "2023", // Year 2023 dataset
//                 backgroundColor: "#3182ce",
//                 borderColor: "#3182ce",
//                 data: [65, 78, 66, 44, 56, 67, 75],
//                 fill: false,
//               },
//               {
//                 label: "2022", // Year 2022 dataset
//                 fill: false,
//                 backgroundColor: "#edf2f7",
//                 borderColor: "#edf2f7",
//                 data: [40, 68, 86, 74, 56, 60, 87],
//               },
//             ],
//           },
//           options: {
//             maintainAspectRatio: false,
//             responsive: true,
//             title: {
//               display: false,
//               text: "Sales Charts",
//               fontColor: "white",
//             },
//             legend: {
//               labels: {
//                 fontColor: "white",
//               },
//               align: "center", // Valid value for `align`
//               position: "bottom",
//             },
//             tooltips: {
//               mode: "index",
//               intersect: false,
//             },
//             hover: {
//               mode: "nearest",
//               intersect: true,
//             },
//             scales: {
//               x: { // Use x instead of "x-axis"
//                 ticks: {
//                   fontColor: "rgba(255,255,255,.7)",
//                 },
//                 display: true,
//                 scaleLabel: {
//                   display: false,
//                   labelString: "Month",
//                   fontColor: "white",
//                 },
//                 grid: {
//                   display: false,
//                   borderDash: [2],
//                   borderDashOffset: [2],
//                   color: "rgba(33, 37, 41, 0.3)",
//                   zeroLineColor: "rgba(0, 0, 0, 0)",
//                   zeroLineBorderDash: [2],
//                   zeroLineBorderDashOffset: [2],
//                 },
//               },
//               y: { // Use y instead of "y-axis"
//                 ticks: {
//                   fontColor: "rgba(255,255,255,.7)",
//                 },
//                 display: true,
//                 scaleLabel: {
//                   display: false,
//                   labelString: "Value",
//                   fontColor: "white",
//                 },
//                 grid: {
//                   borderDash: [3],
//                   borderDashOffset: [3],
//                   drawBorder: false,
//                   color: "rgba(255, 255, 255, 0.15)",
//                   zeroLineColor: "rgba(33, 37, 41, 0)",
//                   zeroLineBorderDash: [2],
//                   zeroLineBorderDashOffset: [2],
//                 },
//               },
//             },
//           },
//         };

//         // Initialize the chart with the fixed config
//         new Chart(ctx, config); 
//       }
//     }
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
//       <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//         <div className="flex flex-wrap items-center">
//           <div className="relative w-full max-w-full flex-grow flex-1">
//             <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
//               Overview
//             </h6>
//             <h2 className="text-white text-xl font-semibold">Sales value</h2>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 flex-auto">
//         <div className="relative h-350-px">
//           {/* Attach canvasRef here */}
//           <canvas ref={canvasRef}></canvas>
//         </div>
//       </div>
//     </div>
//   );
// }
