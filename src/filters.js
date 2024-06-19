import { DateTime } from "luxon";
import markdownIt from "markdown-it";

const htmlDateString = (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

const md = (content = "") => {
  return markdownIt({ html: true }).render(content);
};

export default {
  htmlDateString,
  md,
};
