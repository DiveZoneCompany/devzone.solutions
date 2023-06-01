const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

const htmlDateString = (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

const md = (content = "") => {
  return markdownIt({ html: true }).render(content);
};

module.exports = {
  htmlDateString,
  md,
};
