import { google } from "googleapis";
import keys from "../secrets.json";
import { SheetData } from "@types";
import { NextResponse } from "next/server";

export default async function getGoogleSheets() {
  try {
    const client = new google.auth.JWT(keys.client_email, undefined, keys.private_key, [
      "https://www.googleapis.com/auth/spreadsheets",
    ]);

    client.authorize(async function (err, tokens) {
      if (err) throw new Error("failed to fetch data");

      const gsapi = google.sheets({ version: "v4", auth: client });
      const response = await gsapi.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: "jul!A3:K3",
      });
      const values = response.data.values;
      console.log(values);
      return values;
    });
  } catch (e) {
    throw new Error("failed to fetch data");
  }
}
