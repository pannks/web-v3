//เแปรอักษรเป็นลข
const setOne = new Set([...'กดภถฤทุ่าำaAjJqQiIyY']);
const setTwo = new Set([...'ขชบปงูเแ้bBkKrR']);
const setThree = new Set([...'ฆฒต๋ฑๆcClLsS']);
const setFour = new Set([...'คธรญษโะิัdDmMtT']);
const setFive = new Set([...'ฉณฌนมฎหฬฮึeEnNxXhH']);
const setSix = new Set([...'วอจลใwWuU']);
const setSeven = new Set([...'ศสซีื๊oOzZ']);
const setEight = new Set([...'ยพฟผฝ็fFpP']);
const setNine = new Set([...'ฏฐไ์']);

//ทักษา
const set_1 = new Set([...'ะาิีึืุูเแไใำโ']);
const set_2 = new Set([...'กขคฆง']);
const set_3 = new Set([...'จฉชซญฌ']);
const set_4 = new Set([...'ฎฏฐฑฒณ']);
const set_5 = new Set([...'ดตถทธน']);
const set_6 = new Set([...'บปผฝพฟภม']);
const set_7 = new Set([...'ยรลว']);
const set_8 = new Set([...'ศษสหฬฮ']);

const dp_inputfn = document.getElementById('dpfn');
const dp_inputln = document.getElementById('dpln');
const dp_inputnn = document.getElementById('dpnn');
const dp_sumfnln = document.getElementById('sumfnln');

const inputfn = document.getElementById('inputfn');
const inputln = document.getElementById('inputln');
const inputnn = document.getElementById('inputnn');
const inputday = document.getElementById('inputday');
const inputphone = document.getElementById('inputphone');

inputfn.addEventListener('keyup', e => calcName(e.target.id));
inputln.addEventListener('keyup', e => calcName(e.target.id));
inputnn.addEventListener('keyup', e => calcName(e.target.id));

const numeriaclJson = fetchNumericMeaning();

inputphone.addEventListener('keyup', e => {
   let inputPhoneArr = [...inputphone.value];
   let sumOfPhone = 0;
   inputPhoneArr.forEach(e => {
      sumOfPhone += Number(e);
   });
   document.getElementById('dpphone').innerHTML = `${sumOfPhone} test`;
});

function calcBirth() {
   let inputBirth = [...document.getElementById('inputdd').value, ...document.getElementById('inputyy').value];
   let sumOfBirth = 0;
   inputBirth.forEach(e => {
      sumOfBirth += Number(e);
   });
   document.getElementById('dpbirth').innerHTML = sumOfBirth;
}
document.getElementById('inputdd').addEventListener('keyup', () => calcBirth());
document.getElementById('inputyy').addEventListener('keyup', () => calcBirth());

let sumfnln = 0;

document.getElementById('calc').addEventListener('click', () => {
   let dayNum = inputday.value;

   let genArr = ['บริวาร', 'อายุ', 'เดช', 'ศรี', 'มูละ', 'อุสาหะ', 'มนตรี', 'กาลี'];
   for (let i = 1; i < dayNum; i++) {
      popNum = genArr.pop();
      genArr.splice(0, 0, popNum);
   }
   const getTransToPos = calcPosition(genArr);

   let txtOutput = '';
   let txtTransToPos = '';
   let txtMeaning = '';

   getTransToPos.forEach(element => {
      txtTransToPos += element;
      txtTransToPos += '  ';
   });
   const sumOfFullName = Number(dp_inputfn.textContent) + Number(dp_inputln.textContent);
   txtOutput += `ผลรวม = ${sumOfFullName} <br>`;
   txtOutput += `อักษรคุม = ${txtTransToPos} <br><br>`;

   const meaningObj =
      sumOfFullName >= 1 && sumOfFullName <= 100
         ? getObjectByNum(numeriaclJson, sumOfFullName)
         : { subhead: '-', meaning: '-' };
   txtMeaning += `<strong>${meaningObj.subhead}</strong><br><p>${meaningObj.meaning}</p>`;
   txtOutput += `${txtMeaning}`;
   dp_sumfnln.innerHTML = txtOutput;
});

function calcPosition(arrPos) {
   let inputName = document.getElementById('inputfn').value;
   let inputArr = [...inputName];
   let transToPos = [];

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

function calcName(input) {
   let inputName = document.getElementById(`${input}`).value;
   let inputArr = [...inputName];
   let transToNum = [];
   let sumOfName = 0;

   inputArr.forEach((val, i) => {
      if (setOne.has(val)) {
         transToNum.push(1);
         sumOfName += 1;
      } else if (setTwo.has(val)) {
         transToNum.push(2);
         sumOfName += 2;
      } else if (setThree.has(val)) {
         transToNum.push(3);
         sumOfName += 3;
      } else if (setFour.has(val)) {
         transToNum.push(4);
         sumOfName += 4;
      } else if (setFive.has(val)) {
         transToNum.push(5);
         sumOfName += 5;
      } else if (setSix.has(val)) {
         transToNum.push(6);
         sumOfName += 6;
      } else if (setSeven.has(val)) {
         transToNum.push(7);
         sumOfName += 7;
      } else if (setEight.has(val)) {
         transToNum.push(8);
         sumOfName += 8;
      } else if (setNine.has(val)) {
         transToNum.push(9);
         sumOfName += 9;
      }
   });
   let fnObj = {
      typeInput: input,
      inputArr: inputArr,
      sumOfName: sumOfName,
      transToNum: transToNum
   };
   if (input === 'inputfn') {
      dp_inputfn.innerHTML = sumOfName;
      sumfnln += sumOfName;
   } else if (input === 'inputln') {
      dp_inputln.innerHTML = sumOfName;
      sumfnln += sumOfName;
   } else if (input === 'inputnn') {
      dp_inputnn.innerHTML = sumOfName;
   }

   // console.log(fnObj);
}

function fetchNumericMeaning() {
   var request = new XMLHttpRequest();
   request.open('GET', './json/numerical.json', false);
   request.send(null);
   return JSON.parse(request.responseText);
}

function getObjectByNum(jsonArray, num) {
   return jsonArray.find(obj => obj.num === num);
}

document.getElementById('delete').addEventListener('click', () => {
   inputfn.value = '';
   inputln.value = '';
   inputnn.value = '';
   inputphone.value = '';
   document.getElementById('inputdd').value = '';
   document.getElementById('inputyy').value = '';
});
