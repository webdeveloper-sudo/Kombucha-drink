/**
 * GOOGLE APPS SCRIPT (SERVER-SIDE)
 * 
 * 1. Open Google Sheets.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this.
 * 4. Update the ADMIN_EMAIL below.
 * 5. Click "Deploy" > "New Deployment" > "Web App".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL and paste it into Contact.tsx's SCRIPT_URL variable.
 */

// 1. CONFIGURATION
const ADMIN_EMAIL = "vp.expansions@hopemarket.in"; // Update this to your real admin email
const SHEET_NAME = "Inquiries";

/**
 * Main function that handles form submissions
 */
function doPost(e) {
  try {
    Logger.log("--- New Submission Received ---");
    
    // Extract parameters from form-encoded data
    const params = e.parameter || JSON.parse(e.postData.contents);
    Logger.log("Data received: " + JSON.stringify(params));

    // A. Append to Sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add Headers if new sheet
      sheet.appendRow(["Timestamp", "Name", "Email", "Mobile", "Message"]);
    }
    
    sheet.appendRow([
      new Date(),
      params.name || "N/A",
      params.email || "N/A",
      params.mobile || "N/A",
      params.message || "N/A"
    ]);
    Logger.log("✅ Successfully appended to sheet");

    // B. Send Admin Email
    try {
      sendAdminNotification(params);
      Logger.log("✅ Admin notification sent");
    } catch (err) {
      Logger.log("❌ Admin Email Error: " + err.toString());
    }

    // Return success response (CORS headers necessary for React fetch)
    return ContentService.createTextOutput(JSON.stringify({"status": "Success"}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST");

  } catch (error) {
    Logger.log("FATAL ERROR: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({"status": "Error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles preflight requests for CORS
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Headers", "Content-Type")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
}

function sendAdminNotification(data) {
  const subject = "🌱 New Inquiry: Hope Kombucha Website";
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 12px; background-color: #fff; max-width: 600px;">
      <h2 style="color: #611082; border-bottom: 3px solid #611082; padding-bottom: 10px; margin-top: 0;">New Website Inquiry</h2>
      <div style="background-color: #FAF8F5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${data.name}</p>
        <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${data.email}</p>
        <p style="margin: 5px 0;"><strong>📱 Mobile:</strong> ${data.mobile}</p>
      </div>
      
      <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
      <div style="padding: 15px; border-left: 4px solid #611082; background-color: #f9f9f9; font-style: italic;">
        ${data.message.replace(/\n/g, "<br>")}
      </div>
      
      <div style="margin-top: 25px; text-align: center; color: #888; font-size: 12px;">
        <p>This is an automated notification from the Hope Kombucha website contact form.</p>
      </div>
    </div>
  `;
  GmailApp.sendEmail(ADMIN_EMAIL, subject, "New inquiry received.", { htmlBody: htmlBody });
}

/**
 * 🚨 IMPORTANT: RUN THIS ONCE MANUALLY
 * Click 'Run' next to this function in the toolbar to authorize Gmail & Sheets.
 */
function runOnceToAuthorize() {
  const email = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(email, "Authorization Successful", "Your script is now authorized to send emails and access sheets.");
  Logger.log("Authorization successful!");
}
