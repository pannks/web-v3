---
title: "Convert Number to Currency Format"
date: "2020-07-01"
filename: "convertToCurrency.ts"
lang: "typescript"
hash: "convert-to-currency"

---
export const convertToCurrency = (
    num: number,
    {
        locale = "en-US",
        currency = "THB",
        addPrefix = false,
        decimal = 2,
        includeCent = true
    }
) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: decimal
    });
    num = includeCent ? num / 100 : num;
    const formatted = formatter.format(num);
    return addPrefix ? formatted : formatted.slice(currency.length + 1);
};