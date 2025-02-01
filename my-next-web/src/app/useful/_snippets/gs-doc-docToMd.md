---
title: "สร้าง API ดึงข้อมูลจาก Doc มาเป็น Markdown"
date: "2020-07-01"
filename: "Code.gs"
lang: "javascript"
hash: "doc-to-md"

---
/**
 * Handles GET requests to the web app.
 * Expects a 'docId' parameter and returns the document's content as Markdown.
 */
function doGet(e) {
  try {
    // Validate the presence of 'docId' parameter
    if (!e.parameter.docId) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Missing 'docId' parameter."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var docId = e.parameter.docId;
    var doc;
    try {
      doc = DocumentApp.openById(docId);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Invalid 'docId' or insufficient permissions."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Document title
    var docTitle = doc.getName();

    // Get all top-level tabs
    var topLevelTabs = doc.getTabs();
    var tabsData = topLevelTabs.map(function(tab) {
      return traverseTabAsMarkdown(tab);
    });

    // Structure the response
    var response = {
      success: true,
      document: {
        id: docId,
        title: docTitle,
        tabs: tabsData
      }
    };

    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: "An unexpected error occurred.",
        details: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Recursively traverse a tab and build a Markdown string from its content.
 * Also handle any child tabs.
 *
 * @param {Tab} tab - The Tab object to traverse.
 * @return {Object} - { id, title, content } with markdown content
 */
function traverseTabAsMarkdown(tab) {
  var tabId = tab.getId();
  var tabTitle = tab.getTitle();

  var documentTab = tab.asDocumentTab();
  var body = documentTab.getBody();

  // Convert the body to a Markdown string
  var markdownContent = bodyToMarkdown(body);

  // Recursively process child tabs
  var childTabs = tab.getChildTabs();
  var subTabs = childTabs.map(function(childTab) {
    return traverseTabAsMarkdown(childTab);
  });

  return {
    id: tabId,
    title: tabTitle,
    content: markdownContent,
    subTabs: subTabs
  };
}

/**
 * Converts the entire Body of a DocumentTab into a single Markdown string,
 * ignoring headings beyond HEADING2 and converting bold text to **bold**.
 *
 * @param {Body} body - The DocumentTab's body.
 * @return {string} - Markdown representation of the content.
 */
function bodyToMarkdown(body) {
  var markdown = [];
  var numChildren = body.getNumChildren();

  for (var i = 0; i < numChildren; i++) {
    var element = body.getChild(i);
    if (element.getType() === DocumentApp.ElementType.PARAGRAPH) {
      var paragraph = element.asParagraph();
      var heading = paragraph.getHeading();

      // Convert the paragraph to a Markdown line (with possible bold text)
      var mdLine = paragraphToMarkdown(paragraph);

      // Decide how to label the line based on heading level
      if (heading === DocumentApp.ParagraphHeading.HEADING1) {
        // # Heading
        mdLine = "# " + mdLine;
      } else if (heading === DocumentApp.ParagraphHeading.HEADING2) {
        // ## Heading
        mdLine = "## " + mdLine;
      } else if (heading === DocumentApp.ParagraphHeading.HEADING3 ) {
        mdLine = '###' + mdLine
      } else if 
      (
        heading === DocumentApp.ParagraphHeading.HEADING4 ||
        heading === DocumentApp.ParagraphHeading.HEADING5 ||
        heading === DocumentApp.ParagraphHeading.HEADING6
      ) {
     
        continue; 
      }

      // Append to our final Markdown
      // (skip entirely if blank—often empty paragraphs occur)
      if (mdLine.trim() !== "") {
        markdown.push(mdLine);
      }
    }
    // Note: ignoring tables, images, etc. as requested
  }

  // Combine into a single string with newlines
  return markdown.join("\n\n");
}

/**
 * Converts a single paragraph into a Markdown string, detecting bold text.
 * Everything else (italics, underline, etc.) is left plain by default.
 *
 * @param {Paragraph} paragraph - The paragraph to process.
 * @return {string} - The paragraph text with **bold** segments in Markdown.
 */
function paragraphToMarkdown(paragraph) {
  var mdParts = [];
  var numChild = paragraph.getNumChildren();

  for (var i = 0; i < numChild; i++) {
    var child = paragraph.getChild(i);
    if (child.getType() === DocumentApp.ElementType.TEXT) {
      var textElement = child.asText();
      var textStyle = textElement.getTextAttributeIndices();
      // We'll iterate by style runs
      for (var s = 0; s < textStyle.length; s++) {
        var startOffset = textStyle[s];
        var endOffset = (s === textStyle.length - 1)
          ? textElement.getText().length - 1
          : textStyle[s + 1] - 1;

        var segment = textElement.getText().substring(startOffset, endOffset + 1);

        // Check if this range is bold
        var isBold = textElement.isBold(startOffset);

        if (isBold) {
          mdParts.push("**" + segment + "**");
        } else {
          mdParts.push(segment);
        }
      }
    }
  }

  // Join all text/bold runs into one line
  return mdParts.join("");
}
