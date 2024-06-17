'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import EditableCostTable, { TableData } from './EditableCostTable';
import ResultTable from './ResultTable';

const initTableFC: TableData = {
    fields: [
        {
            id: 'fc_fc',
            name: 'Fix Cost',
            value_type: 'text',
        },
        {
            id: 'fc_c',
            name: 'Cost / Month (THB)',
            value_type: 'number',
        },
        {
            id: 'fc_q',
            name: 'Qty',
            value_type: 'number',
        },
    ],
    data: [['edit here', 0, 1]],
    new_row: ['', 0, 1],
    total_field: ['Total Fixed Cost', 'fc_c * fc_q'],
};

const initTableVC: TableData = {
    fields: [
        {
            id: 'vc_vc',
            name: 'Variable Cost',
            value_type: 'text',
        },
        {
            id: 'vc_c',
            name: 'Cost / Unit (THB) / M',
            value_type: 'number',
        },
        {
            id: 'vc_u',
            name: 'Qty / Unit',
            value_type: 'number',
        },
    ],
    data: [['edit here', 0, 1]],
    new_row: ['', 0, 1],
    total_field: ['Total Variables Cost', 'vc_c * vc_u'],
};

const initTableRev: TableData = {
    fields: [
        {
            id: 'r_r',
            name: 'Revenue',
            value_type: 'text',
        },
        {
            id: 'r_p',
            name: 'Price / Unit (THB) / M',
            value_type: 'number',
        },
        {
            id: 'r_u',
            name: 'Qty',
            value_type: 'number',
        },
    ],
    data: [['edit here', 0, 1]],
    new_row: ['', 0, 1],
    total_field: ['Total Revenues', 'r_p * r_u'],
};

const BreakEvenPage = () => {
    const [sellQty, setSellQty] = useState<number>(0);
    const [sellMonths, setSellMonths] = useState<number>(0);

    const [totalFC, setTotalFC] = useState<number>(0);
    const [totalVC, setTotalVC] = useState<number>(0);
    const [totalRev, setTotalRev] = useState<number>(0);

    const breakEvenQty = totalFC / (totalRev - totalVC);
    const totalProfitAtQ1 = totalRev - totalVC - totalFC;
    const totalProfitAtQx = (totalRev - totalVC) * sellQty - totalFC;
    const totalProfitAtConfig =
        ((totalRev - totalVC) * sellQty - totalFC) * sellMonths;
    const profitMargin = totalRev !== 0 ? totalRev - totalVC : 0;
    const profitMarginPercent =
        totalRev !== 0
            ? Math.round(((totalRev - totalVC) / totalRev) * 100000) / 1000
            : 0;

    return (
        <div className={styles.page}>
            <h1>💰 Break Even Analysis</h1>
            <div className={styles.page__flex}>
                <div className={styles.page__interact}>
                    <div className={styles.cards}>
                        <h2>⚙️ Selling Config:</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sell QTY</th>
                                    <th>Sell Months</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="number"
                                            value={sellQty}
                                            onChange={(e) =>
                                                setSellQty(
                                                    parseInt(e.target.value) ||
                                                        0
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={sellMonths}
                                            onChange={(e) =>
                                                setSellMonths(
                                                    parseInt(e.target.value) ||
                                                        1
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.cards}>
                        <h2>💸 Cost: </h2>
                        <EditableCostTable
                            tableData={initTableFC}
                            onTotalChange={(t) => setTotalFC(t)}
                        />
                        <EditableCostTable
                            tableData={initTableVC}
                            onTotalChange={(t) => setTotalVC(t)}
                        />
                    </div>
                    <div className={styles.cards}>
                        <h2>🧲 Revenue: </h2>
                        <EditableCostTable
                            tableData={initTableRev}
                            onTotalChange={(t) => setTotalRev(t)}
                        />
                    </div>
                </div>

                <div className={styles.page__result}>
                    <div className={styles.cards}>
                        <h2>🔑 Result:</h2>
                        <ResultTable
                            trData={[
                                [`🎉 Total Profit at Q=${sellQty}`, '0', 'THB'],
                                ['Profit at Q=1', '0', 'THB'],
                                ['Profit at config', '0', 'THB'],
                                ['📌 Break Even (month)', '0', 'Qty/Month'],
                                ['📌 Break Even (day)', '0', 'Qty/Day'],
                                ['Profit Margin (THB)', '0', 'THB/ unit'],
                                ['Profit Margin (%) ', '0', '%/ unit'],
                            ]}
                            resultArray={[
                                totalProfitAtQx,
                                totalProfitAtQ1,
                                totalProfitAtConfig,
                                breakEvenQty,
                                breakEvenQty / 30,
                                profitMargin,
                                profitMarginPercent,
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakEvenPage;
