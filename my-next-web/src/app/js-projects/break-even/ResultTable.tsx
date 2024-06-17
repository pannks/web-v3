import React from 'react';
import styles from './page.module.scss';

type ResultTableProps = {
    trData: string[][];
    resultArray: number[];
};

const ResultTable: React.FC<ResultTableProps> = ({ resultArray, trData }) => {
    return (
        <table className={styles.table_result}>
            <tbody>
                {trData?.map((row, i) => (
                    <tr key={i}>
                        <td>{row[0]}</td>
                        <td>{resultArray?.[i] ?? NaN}</td>
                        <td>{row[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ResultTable;
