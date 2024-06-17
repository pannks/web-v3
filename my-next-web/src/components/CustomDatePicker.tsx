import { getMonth, getYear } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
    onDateChange: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    onDateChange,
}) => {
    const [startDate, setStartDate] = useState(new Date());
    const years = Array.from(
        { length: 100 },
        (_, i) => new Date().getFullYear() - i
    );
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const handleDateChange = (date: Date) => {
        setStartDate(date);
        onDateChange(date);
    };

    return (
        <DatePicker
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 10,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                    >
                        {'<'}
                    </button>
                    <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                        }
                    >
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                        }
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                    >
                        {'>'}
                    </button>
                </div>
            )}
            selected={startDate}
            onChange={handleDateChange}
            showTimeInput
            timeInputLabel="Time:"
            dateFormat="MMM d, yyyy HH:mm"
            timeFormat="HH:mm"
        />
    );
};

export default CustomDatePicker;
