import 'dotenv/config'

// Change this if we want to scrape the past
export const YEAR = process.env.YEAR
  ? parseInt(process.env.YEAR)
  : new Date().getFullYear();

export const HASURAGRES_URL = `http://${process.env.HASURAGRES_HOST}:${process.env.HASURAGRES_PORT}`;
console.log("Url to hit: " + HASURAGRES_URL);
