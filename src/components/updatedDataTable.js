import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UpdatedDataTable = ({ updatedData }) => {
    const navigate = useNavigate();  // Using the navigate hook from React Router

    const columns = [
        { Header: 'Date', accessor: 'date' },
        { Header: 'Product', accessor: 'product' },
        { Header: 'Region', accessor: 'region' },
        { Header: 'Sales Amount', accessor: 'salesAmount' },
    ];

    const handleNavigateToPivotTable = () => {
        navigate('/pivot', { state: { updatedData } });  // Passing updatedData through router state
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell key={col.accessor}>{col.Header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {updatedData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column) => (
                                    <TableCell key={column.accessor}>{row[column.accessor]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={handleNavigateToPivotTable}>Go to Pivot Table</button>
        </div>
    );
};

export default UpdatedDataTable;