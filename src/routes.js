// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PlanTable from './components/planTable';
import PivotTable from './components/pivotTable';

// Sample data to pass to components (you can replace this with your actual data)
const planData = [
    { date: '2023-01-01', product: 'Product A', region: 'East', salesAmount: 100 },
    { date: '2023-01-02', product: 'Product B', region: 'West', salesAmount: 200 },
    { date: '2023-01-03', product: 'Product C', region: 'North', salesAmount: 150 },
];

const RoutesComponent = () => {
    return (
        <Routes> {/* Use Routes instead of Switch */}
            <Route path="/table" element={<PlanTable data={planData} />} />
            <Route path="/pivot" element={<PivotTable data={planData} />} />
            {/* Default route */}
            <Route path="/" element={<div>Select an option from the side menu.</div>} />
        </Routes>
    );
};

export default RoutesComponent;