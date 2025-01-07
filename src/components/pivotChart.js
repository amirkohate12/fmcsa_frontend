import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PivotChart = ({ data }) => {
    const generateChartData = (data) => {
        return {
            labels: data.map((item) => item.date), // X-axis labels (Date)
            datasets: [
                {
                    label: 'Sales Amount',
                    data: data.map((item) => item.salesAmount), // Y-axis values (Sales Amount)
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
    };

    return (
        <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
            <Bar data={generateChartData(data)} options={{ responsive: true }} />
        </div>
    );
};

export default PivotChart;