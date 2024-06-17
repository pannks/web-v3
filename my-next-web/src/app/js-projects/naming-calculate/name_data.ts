//เลข
const setOne = new Set([...'กดภถฤทุ่าำaAjJqQiIyY']);
const setTwo = new Set([...'ขชบปงูเแ้bBkKrR']);
const setThree = new Set([...'ฆฒต๋ฑๆcClLsS']);
const setFour = new Set([...'คธรญษโะิัdDmMtT']);
const setFive = new Set([...'ฉณฌนมฎหฬฮึeEnNxXhH']);
const setSix = new Set([...'วอจลใwWuUvV']);
const setSeven = new Set([...'ศสซีื๊oOzZ']);
const setEight = new Set([...'ยพฟผฝ็fFpP']);
const setNine = new Set([...'ฏฐไ์']);

export const textToNum = (text: string, callback?: (num: number) => void) => {
    let num = 0;
    for (let i = 0; i < text.length; i++) {
        num += setOne.has(text[i]) ? 1 : 0;
        num += setTwo.has(text[i]) ? 2 : 0;
        num += setThree.has(text[i]) ? 3 : 0;
        num += setFour.has(text[i]) ? 4 : 0;
        num += setFive.has(text[i]) ? 5 : 0;
        num += setSix.has(text[i]) ? 6 : 0;
        num += setSeven.has(text[i]) ? 7 : 0;
        num += setEight.has(text[i]) ? 8 : 0;
        num += setNine.has(text[i]) ? 9 : 0;
    }
    callback?.(num);
    return num;
};

//ทักษา
const set_1 = new Set([...'ะาิีึืุูเแไใำโ']);
const set_2 = new Set([...'กขคฆง']);
const set_3 = new Set([...'จฉชซญฌ']);
const set_4 = new Set([...'ฎฏฐฑฒณ']);
const set_5 = new Set([...'ดตถทธน']);
const set_6 = new Set([...'บปผฝพฟภม']);
const set_7 = new Set([...'ยรลว']);
const set_8 = new Set([...'ศษสหฬฮ']);

//6.00 - 17.59   พ กลางวัน
//18.00 - 23.59  พ กลางคืน
//0.00 - 5.59

export const TransToHoroDate = (date: Date) => {
    const dayInfo = [
        'อาทิตย์',
        'จันทร์',
        'อังคาร',
        'พุธ',
        'พฤหัสบดี',
        'ศุกร์',
        'เสาร์',
        'พุธกลางคืน',
    ];
    const dayInfoId = {
        อาทิตย์: 1,
        จันทร์: 2,
        อังคาร: 3,
        พุธ: 4,
        พฤหัสบดี: 6,
        ศุกร์: 8,
        เสาร์: 5,
        พุธกลางคืน: 7,
    };
    const day = date.getDay();
    const hour = date.getHours();

    let horoDate = new Date(date);
    let horoDay = day;

    // If the time is between 00:00 and 05:59, set horoDate to the previous day
    if (hour >= 0 && hour < 6) {
        horoDate.setDate(horoDate.getDate() - 1);
        horoDay = (horoDay - 1 + 7) % 7;
    }

    // Handle the special case for Wednesday night
    if ((day === 3 && hour >= 18) || (day === 4 && hour < 6)) {
        horoDay = 7; // Special case for Wednesday night
    }

    const formattedDate = `${horoDate.getDate()}  ${horoDate.toLocaleString(
        'th-TH',
        { month: 'short' }
    )} ${horoDate.getFullYear()}`;

    return {
        day: dayInfo[horoDay],
        dayId: dayInfoId[dayInfo[horoDay] as keyof typeof dayInfoId],
        date: formattedDate,
    };
};

function calcPosition(arrPos: string[], text: string) {
    let inputArr = [...text];
    let transToPos: string[] = [];

    inputArr.forEach((val, i) => {
        if (set_2.has(val)) {
            transToPos.push(arrPos[1]);
        } else if (set_3.has(val)) {
            transToPos.push(arrPos[2]);
        } else if (set_4.has(val)) {
            transToPos.push(arrPos[3]);
        } else if (set_5.has(val)) {
            transToPos.push(arrPos[4]);
        } else if (set_6.has(val)) {
            transToPos.push(arrPos[5]);
        } else if (set_7.has(val)) {
            transToPos.push(arrPos[6]);
        } else if (set_8.has(val)) {
            transToPos.push(arrPos[7]);
        } else if (set_1.has(val)) {
            transToPos.push(arrPos[0]);
        } else {
            transToPos.push(' ');
        }
    });
    return transToPos;
}
export function calcHoro(text: string, dayNum: number) {
    let genArr = [
        'บริวาร',
        'อายุ',
        'เดช',
        'ศรี',
        'มูละ',
        'อุสาหะ',
        'มนตรี',
        'กาลี',
    ];
    for (let i = 1; i < dayNum; i++) {
        genArr.unshift(genArr.pop()!);
    }
    const getTransToPos = calcPosition(genArr, text);
    return getTransToPos;
}
