import { google } from "googleapis";
import keys from "../secrets.json";

export async function getGoogleSheets(req: any, res: any) {
  try {
    const client = new google.auth.JWT(keys.client_email, undefined, keys.private_key, [
      "https://www.googleapis.com/auth/spreadsheets",
    ]);
    client.authorize(async function (err, tokens) {
      if (err) {
        return err;
      }

      const gsapi = google.sheets({ version: "v4", auth: client });
      const response = await gsapi.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: "jul!A2:K10",
      });
      return res.status(200).json(response.data.values);
    });
  } catch (e: any) {
    return e.message;
  }
}
