import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // Use the useLocation hook
import { useTable, useGroupBy, useSortBy, useFilters } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import './pivotTable.css';  // Import the CSS file
import PivotChart from './pivotChart';

const PivotTable = () => {
    const { state } = useLocation();  // Get state from the router
    const updatedData = state?.updatedData || [];  // Access the updatedData

    const [filteredData, setFilteredData] = useState(updatedData);  // Holds filtered and grouped data
    const [groupBy, setGroupBy] = useState([]);

    // Define the columns for the table
    const columns = useMemo(
        () => [
            { Header: 'Product', accessor: 'product' },
            { Header: 'Region', accessor: 'region' },
            { Header: 'Sales Amount', accessor: 'salesAmount' },
            { Header: 'Date', accessor: 'date' },
        ],
        []
    );

    // Define the table instance using the useTable hook
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGroupBy: setGroupByInTable,
    } = useTable(
        {
            columns,
            data: filteredData,
            initialState: { groupBy },
        },
        useFilters,
        useGroupBy,
        useSortBy
    );

    const handleGroupByChange = (column) => {
        setGroupBy((prevGroupBy) => {
            return prevGroupBy.includes(column)
                ? prevGroupBy.filter((item) => item !== column) // Remove grouping if already grouped
                : [...prevGroupBy, column]; // Add grouping
        });
    };

    // Handle Search and Filter
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = updatedData.filter(
            (item) =>
                item.product.toLowerCase().includes(searchTerm) ||
                item.region.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filtered);
    };

    // Clear Grouping
    const handleClearGrouping = () => {
        setGroupBy([]); // Reset the groupBy to an empty array
    };

    useEffect(() => {
        setGroupByInTable(groupBy);
    }, [groupBy, setGroupByInTable]);

    return (
        <div className="pivot-table-container">
            {/* Filter Input */}
            <div style={{ marginTop: 20 }}>
                <label>Search:</label>
                <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: 20 }}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Group By Buttons */}
            <Button onClick={() => handleGroupByChange('product')}>Group by Product</Button>
            <Button onClick={() => handleGroupByChange('region')}>Group by Region</Button>
            <Button onClick={handleClearGrouping}>Clear Grouping</Button>

            {/* Pivot Table */}
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pass filteredData to PivotChart */}
            <PivotChart data={filteredData} />
        </div>
    );
};

export default PivotTable;