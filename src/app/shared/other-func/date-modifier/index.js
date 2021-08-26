import moment from "moment";
export const pubDate = (date) => {
  return `${moment(date).format("h")}h`;
};
