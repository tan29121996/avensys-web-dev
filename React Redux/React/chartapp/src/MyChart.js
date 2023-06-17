import { Bar, Bubble, Doughnut, Line, Scatter } from "react-chartjs-2";
import { useState } from "react";
import { Chart } from "chart.js/auto";

function MyChart() {

    const covidData = [
        {
            year: 2020,
            covidCases: 1400000
        },
        {
            year: 2021,
            covidCases: 1300000
        },
        {
            year: 2022,
            covidCases: 1200000
        }
    ]

    const [chartData, setChartData] = useState({
        labels: covidData.map((i) => i.year),
        datasets: [
            {
                label: "Covid Cases",
                data: covidData.map((i) => i.covidCases),
                backgroundColor: ["green", "blue", "red"]
            }
        ]
    })

    return (
        <div style={{ width: "70vw"}}>
            <Bar data={chartData} />
            <Line data={chartData} />
            <Scatter data={chartData} />
            <Bubble data={chartData} />
            <Doughnut data={chartData} />
        </div>

    )
}

export default MyChart