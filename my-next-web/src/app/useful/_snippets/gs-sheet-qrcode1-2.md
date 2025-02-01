---
title: "ws-02"
description: "lorem50"
date: "2020-07-01"
filename: "QRDialog.html"
lang: "html"

---

<!DOCTYPE html>
<html>
 <head>
   <!-- Include the CSS file -->
   <?!= include('QRDialogCss') ?>
 </head>
 <body>
   <div id="qrContainer">
     <h3>QR Code Generator</h3>
     <!-- The paragraph below shows the final QR code URL next to 'URL:' -->
     <p id="qrUrl">URL: </p>
   </div>
   <div style="margin-top: 0.4em; text-align:center;">
     <button onclick="copyQRUrl()">Copy QR URL</button>
     <button onclick="downloadQRImage()">Download QR</button>
     <p id="copyStatus"></p>
   </div>

   <!-- Include the JS file -->
   <?!= include('QRDialogJs') ?>
 </body>
</html>
