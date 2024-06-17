'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';

type EditableCostTableProps = {
    tableData: TableData;
    onTotalChange: (t: number) => void;
};

export type TableData = {
    fields: CostField[];
    data: any[][];
    new_row: any[];
    total_field: [string, string];
};

type CostField = {
    id: string;
    name: string;
    value_type: string;
};

const EditableCostTable: React.FC<EditableCostTableProps> = ({
    tableData,
    onTotalChange,
}) => {
    const [rows, setRows] = useState<any[][]>(tableData.data);
    const [newRow, setNewRow] = useState<any[]>(tableData.new_row);

    useEffect(() => {
        if (newRow.every((cell) => cell !== '')) {
            setRows([...rows, newRow]);
            setNewRow(Array(newRow.length).fill(''));
        }
    }, [newRow]);

    useEffect(() => {
        onTotalChange(calculateTotal());
    }, [rows]);

    const handleDeleteRow = (index: number) => {
        setRows(rows.filter((_, rowIndex) => rowIndex !== index));
    };

    const handleInputChange = (
        index: number,
        fieldIndex: number,
        value: string
    ) => {
        const updatedRows = rows.map((row, rowIndex) =>
            rowIndex === index
                ? row.map((cell, cellIndex) =>
                      cellIndex === fieldIndex ? value : cell
                  )
                : row
        );
        setRows(updatedRows);
    };

    const handleNewRowChange = (fieldIndex: number, value: string) => {
        const updatedNewRow = newRow.map((cell, cellIndex) =>
            cellIndex === fieldIndex ? value : cell
        );
        setNewRow(updatedNewRow);
    };

    const calculateTotal = () => {
        const [_, formula] = tableData.total_field;
        const parts = formula.split(' * ').map((part) => part.trim());

        return rows.reduce((total, row) => {
            const values = parts.map((part) => {
                const fieldIndex = tableData.fields.findIndex(
                    (field) => field.id === part
                );
                return parseFloat(row[fieldIndex]?.toString()) || 0;
            });
            return total + values.reduce((acc, value) => acc * value, 1);
        }, 0);
    };

    return (
        <table>
            <thead>
                <tr>
                    {tableData.fields?.map((field, fieldIndex) => (
                        <th key={fieldIndex}>{field.name}</th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row?.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                                <input
                                    type={
                                        tableData.fields[cellIndex]?.value_type
                                    }
                                    value={cell}
                                    onChange={(e) =>
                                        handleInputChange(
                                            rowIndex,
                                            cellIndex,
                                            e.target.value
                                        )
                                    }
                                />
                            </td>
                        ))}
                        <td>
                            <button
                                className={styles.danger}
                                onClick={() => handleDeleteRow(rowIndex)}
                            >
                                -
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    {newRow.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                            <input
                                type={tableData.fields[cellIndex]?.value_type}
                                value={cell}
                                onChange={(e) =>
                                    handleNewRowChange(
                                        cellIndex,
                                        e.target.value
                                    )
                                }
                            />
                        </td>
                    ))}
                    <td>
                        <button
                            className={styles.add}
                            onClick={() => {
                                setRows([...rows, newRow]);
                                setNewRow(Array(newRow.length).fill(''));
                            }}
                        >
                            +
                        </button>
                    </td>
                </tr>
                <tr className={styles.trsummary}>
                    <td>{tableData.total_field[0]}</td>
                    <td colSpan={newRow.length}>{calculateTotal()}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default EditableCostTable;
