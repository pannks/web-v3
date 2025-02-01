---
title: "ws-02"
description: "lorem50"
date: "2020-07-01"
filename: "QRDialogJs.html"
lang: "html"

---
<script>
 /**
  * Runs immediately when the dialog loads:
  * 1. Calls the server to fetch the active cell value
  * 2. Builds the QR code URL (client-side)
  * 3. Inserts the image and URL into the DOM
  */
 window.addEventListener('load', function() {
   google.script.run
     .withSuccessHandler(function(cellValue) {
       var container = document.getElementById('qrContainer');
       var qrUrlEl  = document.getElementById('qrUrl');

       // If no cell value, show an error
       if (!cellValue) {
         container.innerHTML = '<p style="color:red;">No active cell value found.</p>';
         return;
       }

       // Build the QR code URL client-side
       var qrCodeUrl = makeQRCodeUrl(cellValue);

       // Display the URL next to "URL:"
       qrUrlEl.textContent += qrCodeUrl;

       // Create and append the QR code image
       container.innerHTML += '<img src="' + qrCodeUrl + '" alt="QR Code" />';

       // Store the URL and the original value in container attributes
       container.setAttribute('data-url',  qrCodeUrl);
       container.setAttribute('data-value', cellValue);
     })
     .getActiveCell();
 });

 /**
  * Generate a QR code URL using QuickChart or any other API.
  * This example uses QuickChart with 300x300 size.
  */
 function makeQRCodeUrl(val) {
   if (!val) return '';
   var baseUrl  = 'https://quickchart.io/chart?cht=qr&chs=300x300&chl=';
   var encoded  = encodeURIComponent(val);
   return baseUrl + encoded;
 }

 /**
  * Copies the QR code URL to the clipboard.
  */
 function copyQRUrl() {
   var container = document.getElementById('qrContainer');
   var url = container.getAttribute('data-url') || '';
  
   if (!url) {
     document.getElementById('copyStatus').textContent = 'No QR URL found.';
     return;
   }
   navigator.clipboard.writeText(url).then(function() {
     document.getElementById('copyStatus').textContent = 'Copied to clipboard!';
   });
 }

 /**
  * Downloads the QR code image as a file (using Fetch + Blob).
  */
 async function downloadQRImage() {
   var container = document.getElementById('qrContainer');
   var url = container.getAttribute('data-url') || '';
   var cellValue = container.getAttribute('data-value') || '';
  
   if (!url) {
     document.getElementById('copyStatus').textContent = 'No QR URL found to download.';
     return;
   }

   try {
     // Fetch the generated QR image
     const response = await fetch(url);
     const blob = await response.blob();

     // Create a temporary object URL
     const blobUrl = URL.createObjectURL(blob);

     // Create a download link
     const link = document.createElement('a');
     link.href = blobUrl;
     link.download = 'qr_code_' + cellValue + '.png'; // Desired file name
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);

     // Optional: Revoke the URL after download
     URL.revokeObjectURL(blobUrl);
   } catch (error) {
     document.getElementById('copyStatus').textContent = 'Error downloading image.';
     console.error(error);
   }
 }
</script>