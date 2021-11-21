import { locations } from "../../../../mocks/database/location";

export const suggestionList = (inputValue) => {
  return locations
    .map((item) => {
      if (item.place_name.toLocaleLowerCase().includes(inputValue)) {
        item.score = item.place_name
          .toLocaleLowerCase()
          .match(inputValue)[0].length;
      }
      return item;
    })
    .sort((a, b) => a.score - b.score)
    .reverse()
    .slice(0, 5);
};
