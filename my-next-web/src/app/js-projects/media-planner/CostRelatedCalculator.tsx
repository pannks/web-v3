import React, { useState, useEffect } from "react";

interface Props {
    labelA: string; // For example: "Impressions" or "Clicks"
    labelC: string; // For example: "CPM" or "CPC"
    computeC: (a: number, b: number) => number; // b will be the global cost
    computeA: (b: number, c: number) => number;
    globalCost: number; // This is the global cost passed down
}

const CostRelatedCalculator: React.FC<Props> = ({
    labelA,
    labelC,
    computeA,
    computeC,
    globalCost,
}) => {
    const [valueA, setValueA] = useState<number | null>(null);
    const [valueC, setValueC] = useState<number | null>(null);
    const [lastChanged, setLastChanged] = useState<"A" | "C" | null>(null);

    useEffect(() => {
        switch (lastChanged) {
            case "A":
                setValueC(computeC(valueA!, globalCost));
                break;
            case "C":
                setValueA(computeA(globalCost, valueC!));
                break;
            default:
                break;
        }
    }, [valueA, valueC, lastChanged, computeA, computeC, globalCost]);

    return (
        <div>
            <label>
                {labelA}:
                <input
                    type="number"
                    value={valueA || ""}
                    onChange={(e) => {
                        setValueA(Number(e.target.value));
                        setLastChanged("A");
                    }}
                    onBlur={() => setLastChanged("A")}
                />
            </label>

            <label>
                {labelC}:
                <input
                    type="number"
                    value={valueC || ""}
                    onChange={(e) => {
                        setValueC(Number(e.target.value));
                        setLastChanged("C");
                    }}
                    onBlur={() => setLastChanged("C")}
                />
            </label>
        </div>
    );
};

export default CostRelatedCalculator;
