const testImage = "http://localhost:8000/image/fakeimage.jpg";

export const posts1 = [
  {
    _id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    author: {
      name: "User",
      age: "25",
      follower_count: 25,
      follwing_count: 26,
      follow_status: false,
      rating: 5,
      role: "NB",
    },
    external_link: "https://www.google.com/",
    like_count: 23,
    comment_count: 26,
    views_count: 29,
    post_image: testImage,
    post_date: new Date(),
    share_count: "12",
    fake_flag: "misleading",
    share_link: "url for sharing post",
    location: { latitude: "11", longitude: "656" },
    location_name: "Deoria",
    long_article: false,
    topic: "politics",
  },

  {
    _id: 2,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    author: "60f12e1f809f4c42b89c7c08",
    external_link: "https://www.google.com/",
    like_count: 23,
    comment_count: 26,
    views_count: 29,
    post_image: testImage,
    post_date: new Date(),
    share_count: "12",
    fake_flag: "misleading",
    share_link: "url for sharing post",
    location: { latitude: "11", longitude: "656" },
    location_name: "Deoria",
    long_article: false,
    topic: "politics",
  },
];
