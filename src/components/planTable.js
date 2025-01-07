import React, { useState } from 'react';
import { Button, Container, Box } from '@mui/material';
import EditableTable from './editableTable';
import UpdatedDataTable from './updatedDataTable';


const PlanTable = () => {
    const initialData = [
        { date: '2023-01-01', product: 'Product A', region: 'East', salesAmount: 100 },
        { date: '2023-01-02', product: 'Product B', region: 'West', salesAmount: 200 },
        { date: '2023-01-03', product: 'Product C', region: 'North', salesAmount: 150 },
    ];

    const [data, setData] = useState(initialData); // Data for Editable Table
    const [updatedData, setUpdatedData] = useState([]); // Data for Updated Table

    const handleSave = () => {
        setUpdatedData(data); // Save the data from Editable Table to Updated Data Table
    };

    return (
        <Container>
            <Box sx={{ marginBottom: 3 }}>
                <h2>Editable Table</h2>
                <EditableTable data={data} setData={setData} />
            </Box>

            <Box sx={{ marginBottom: 3 }}>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Box>

            <Box>
                <h2>Updated Data Table</h2>
                <UpdatedDataTable updatedData={updatedData} />
            </Box>
        </Container>
    );
};

export default PlanTable;
