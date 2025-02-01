---
title: "Workshop 3.4 สร้าง QR Code ไว้ใช้เอง"
date: "2020-07-01"
filename: "Code.gs"
lang: "javascript"
hash: "gs-sheet-qrcode1-1"

---

/**
* @OnlyCurrentDoc
*/

/**
* Add a custom menu to show the QR dialog.
*/
function onOpen(e) {
 SpreadsheetApp.getUi()
   .createMenu('Custom Menu')
   .addItem('Generate QR (Dialog)', 'showQRDialog')
   .addToUi();
}

/**
* Show the QR code dialog by rendering `QRDialog.html` (which includes JS/CSS).
*/
function showQRDialog() {
 var template = HtmlService.createTemplateFromFile('QRDialog');
 var htmlOutput = template.evaluate()
     .setWidth(400)
     .setHeight(400);
 SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'QR Generator');
}

/**
* Returns the value of the active cell in the current sheet.
*/
function getActiveCell() {
 var value = SpreadsheetApp.getActiveSheet().getActiveCell().getValue();
 // Return null or empty if there is no value
 return value ? String(value) : null;
}

/**
* Helper function for using `<?!= include('filename') ?>` in templated HTML.
*/
function include(filename) {
 return HtmlService.createTemplateFromFile(filename).getRawContent();
}


