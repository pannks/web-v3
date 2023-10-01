import React, { useState, useEffect } from "react";
import { HiMiniLockClosed, HiMiniLockOpen } from "react-icons/hi2";

interface Props {
    labelA: string;
    labelB: string;
    labelC: string;
    computeC: (a: number, b: number) => number;
    computeB: (a: number, c: number) => number;
    computeA: (b: number, c: number) => number;
}

const TriangleCalculator: React.FC<Props> = ({
    labelA,
    labelB,
    labelC,
    computeA,
    computeB,
    computeC,
}) => {
    const [valueA, setValueA] = useState<number | null>(null);
    const [valueB, setValueB] = useState<number | null>(null);
    const [valueC, setValueC] = useState<number | null>(null);
    const [lastChanged, setLastChanged] = useState<"A" | "B" | "C" | null>(
        null
    );
    const [lockA, setLockA] = useState(false);
    const [lockB, setLockB] = useState(false);
    const [lockC, setLockC] = useState(false);

    useEffect(() => {
        switch (lastChanged) {
            case "A":
                if (!lockB && valueC !== null)
                    setValueB(computeB(valueA!, valueC));
                if (!lockC && valueB !== null)
                    setValueC(computeC(valueA!, valueB));
                break;
            case "B":
                if (!lockA && valueC !== null)
                    setValueA(computeA(valueB!, valueC));
                if (!lockC && valueA !== null)
                    setValueC(computeC(valueA, valueB!));
                break;
            case "C":
                if (!lockA && valueB !== null)
                    setValueA(computeA(valueB!, valueC!));
                if (!lockB && valueA !== null)
                    setValueB(computeB(valueA!, valueC!));
                break;
            default:
                break;
        }
    }, [
        valueA,
        valueB,
        valueC,
        lastChanged,
        lockA,
        lockB,
        lockC,
        computeA,
        computeB,
        computeC,
    ]);

    return (
        <div>
            <label>
                {labelA}:
                <div>
                    <input
                        type="number"
                        step="10"
                        value={valueA || ""}
                        onChange={(e) => {
                            setValueA(Number(e.target.value));
                            setLastChanged("A");
                        }}
                        onBlur={() => setLastChanged("A")}
                    />
                    <button
                        onClick={() => setLockA(!lockA)}
                        className={`${lockA && "lock__active"}`}
                    >
                        {lockA ? <HiMiniLockClosed /> : <HiMiniLockOpen />}
                    </button>
                </div>
            </label>

            <label>
                {labelB}:
                <div>
                    <input
                        type="number"
                        step="10"
                        value={valueB || ""}
                        onChange={(e) => {
                            setValueB(Number(e.target.value));
                            setLastChanged("B");
                        }}
                        onBlur={() => setLastChanged("B")}
                    />
                    <button
                        onClick={() => setLockB(!lockB)}
                        className={`${lockB && "lock__active"}`}
                    >
                        {lockB ? <HiMiniLockClosed /> : <HiMiniLockOpen />}
                    </button>
                </div>
            </label>

            <label>
                {labelC}:
                <div>
                    <input
                        type="number"
                        step="1"
                        value={valueC || ""}
                        onChange={(e) => {
                            setValueC(Number(e.target.value));
                            setLastChanged("C");
                        }}
                        onBlur={() => setLastChanged("C")}
                    />
                    <button
                        onClick={() => setLockC(!lockC)}
                        className={`${lockC && "lock__active"}`}
                    >
                        {lockC ? <HiMiniLockClosed /> : <HiMiniLockOpen />}
                    </button>
                </div>
            </label>
        </div>
    );
};

export default TriangleCalculator;
