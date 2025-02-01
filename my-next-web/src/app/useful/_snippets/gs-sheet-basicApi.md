---
title: "สร้าง API จาก Google Sheet อย่างง่าย (Get-Post)"
date: "2020-07-01"
filename: "Code.gs"
lang: "javascript"
hash: "basic-sheet-api"

---
/***********************************
 * Replace with your own configuration
 ***********************************/
var SPREADSHEET_ID = "your-id";
var SHEET_NAME = "your-sheet-name";

/**
 * doGet(e)
 * This function is triggered when a GET request is sent to the web app URL.
 * In this example, we:
 *   1) Read the latest rows from the sheet
 *   2) Return them as a JSON response
 */
function doGet(e) {
  try {
    // Open spreadsheet and select sheet
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    // Get data from the sheet
    var data = sheet.getDataRange().getValues();
    
    // Convert the sheet data into JSON
    // The first row is assumed to be the header.
    var headers = data[0];
    var rows = data.slice(1); // all except header
    
    // Only get the last 10 rows (adjust as needed)
    var recentRows = rows.slice(-10);
    
    // Build array of objects for JSON
    var output = recentRows.map(function(row) {
      var obj = {};
      headers.forEach(function(h, i) {
        obj[h] = row[i];
      });
      return obj;
    });
    
    // Return JSON
    return ContentService
      .createTextOutput(JSON.stringify(output))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error message if something goes wrong
    var errorMsg = {
      status: "error",
      message: error.toString()
    };
    return ContentService
      .createTextOutput(JSON.stringify(errorMsg))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * doPost(e)
 * This function is triggered when a POST request is sent to the web app URL.
 * In this example, we:
 *   1) Parse the incoming JSON data
 *   2) Insert a new row in the sheet with the expected schema
 *   3) Return a success or error message as JSON
 */
function doPost(e) {
  try {
    // Parse incoming POST data as JSON
    var data = JSON.parse(e.postData.contents);
    
    // Open spreadsheet and select sheet
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    // Build a new row based on the provided schema
    // If 'timestamp' is not provided by the client, we can generate the current time
    var timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    
    // Prepare the row data in the correct order
    // Match this order to the columns in your sheet
    var newRow = [
      timestamp,          // Column A: timestamp
    /* -- change with your data schema
      data.user_id,       
      data.user_name,     
      data.message,       
    */       
    ];
    
    // Append the row
    sheet.appendRow(newRow);
    
    // Build a JSON response
    var successMsg = {
      status: "success",
      message: "Data saved successfully",
      data: newRow
    };
    
    return ContentService
      .createTextOutput(JSON.stringify(successMsg))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error message if something goes wrong
    var errorMsg = {
      status: "error",
      message: error.toString()
    };
    return ContentService
      .createTextOutput(JSON.stringify(errorMsg))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
