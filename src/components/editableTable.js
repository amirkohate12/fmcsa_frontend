import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const EditableTable = ({ data, setData }) => {
    // Handle the cell edit
    const handleCellEdit = (rowIndex, columnId, value) => {
        console.log("Row index:", rowIndex);
        console.log("Column ID:", columnId);
        console.log("New value:", value);

        // Make a copy of the data array
        const updatedData = [...data];

        // Ensure the row and column exist before updating the value
        if (updatedData[rowIndex] && updatedData[rowIndex].hasOwnProperty(columnId)) {
            updatedData[rowIndex][columnId] = value;  // Update the cell value
        } else {
            console.error(`Row or column not found. Row index: ${rowIndex}, Column ID: ${columnId}`);
            return;
        }

        // Save the updated data to the parent state
        setData(updatedData);
    };

    // Define the columns with accessors and input fields for editing
    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: ({ value, row, column, rowIndex, columnId }) => (
                <input
                    type="datetime-local"
                    value={value || ""}
                    onChange={(e) => handleCellEdit(rowIndex, columnId, e.target.value)} // Handle change
                />
            ),
        },
        {
            Header: 'Product',
            accessor: 'product',
            Cell: ({ value, row, column, rowIndex, columnId }) => (
                <input
                    type="text"
                    value={value || ""}
                    onChange={(e) => handleCellEdit(rowIndex, columnId, e.target.value)} // Handle change
                />
            ),
        },
        {
            Header: 'Region',
            accessor: 'region',
            Cell: ({ value, row, column, rowIndex, columnId }) => (
                <input
                    type="text"
                    value={value || ""}
                    onChange={(e) => handleCellEdit(rowIndex, columnId, e.target.value)} // Handle change
                />
            ),
        },
        {
            Header: 'Sales Amount',
            accessor: 'salesAmount',
            Cell: ({ value, row, column, rowIndex, columnId }) => (
                <input
                    type="number"
                    value={value || ""}
                    onChange={(e) => handleCellEdit(rowIndex, columnId, e.target.value)} // Handle change
                />
            ),
        },
    ];

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(col => (
                            <TableCell key={col.accessor}>{col.Header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column) => (
                                <TableCell key={column.accessor}>
                                    {column.Cell ? (
                                        column.Cell({
                                            value: row[column.accessor],
                                            row,
                                            column,
                                            rowIndex,  // Pass rowIndex to the Cell component
                                            columnId: column.accessor,  // Pass column accessor as columnId
                                        })
                                    ) : (
                                        row[column.accessor]
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EditableTable;