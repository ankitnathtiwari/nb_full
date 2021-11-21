import { rest } from "msw";
import { posts1 } from "./database/post/index";

import fakeimage from "./database/images/fakeimage.jpg";
import regeneratorRuntime from "regenerator-runtime";
import { baseUrl } from "../app/base-url";
import { user1, user2 } from "./database/user";
import { followerList } from "./database/followers";
const authUrl = `${baseUrl}/json_api/auth`;
const postUrl = `${baseUrl}/json_api/post`;

export const handlers = [
  rest.get(`${authUrl}`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: user2 }));
  }),

  rest.post(`${authUrl}/login`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: "User" }));
  }),

  rest.post(`${authUrl}/password_forgot`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: "User" }));
  }),

  rest.post(`${authUrl}/register`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: "User" }));
  }),

  rest.get(`${postUrl}/home`, (req, res, ctx) => {
    return res(ctx.json({ status: true, postList: posts1 }));
    // if (req.url.searchParams.get("page") == 1) {
    //   return res(ctx.json(posts1));
    // }
    // if (req.url.searchParams.get("page") == 2) {
    //   return res(ctx.json(posts2));
    // }
    // if (req.url.searchParams.get("page") == 3) {
    //   return res(ctx.json(posts3));
    // }
    // return res(ctx.json([]));
  }),

  rest.get(`${postUrl}/mypost`, (req, res, ctx) => {
    // if (req.url.searchParams.get("page") == 1) {
    //   return res(ctx.json(posts1));
    // }
    // if (req.url.searchParams.get("page") == 2) {
    //   return res(ctx.json(posts2));
    // }
    // if (req.url.searchParams.get("page") == 3) {
    //   return res(ctx.json(posts3));
    // }
    return res(ctx.json([]));
  }),
  rest.post(`${postUrl}/like`, (req, res, ctx) => {
    return res(ctx.json({ status: true, message: "post created" }));
  }),
  rest.post(`${postUrl}/follow`, (req, res, ctx) => {
    return res(ctx.json({ status: true, message: "post created" }));
  }),
  rest.get(`${baseUrl}/json_api/user/profile`, (req, res, ctx) => {
    if (req.url.searchParams.get("id") == "user1") {
      return res(ctx.json(user1));
    }
    if (req.url.searchParams.get("id") == "user2") {
      return res(ctx.json(user2));
    }
    // if (req.url.searchParams.get("page") == 3) {
    //   return res(ctx.json(posts3));
    // }
    // return res(ctx.json([]));
    return res(ctx.json({ status: true, profile: user1 }));
  }),

  rest.get(`${baseUrl}/json_api/user/followers`, (req, res, ctx) => {
    console.log("api hit");
    return res(ctx.json({ status: true, followers: followerList }));
  }),

  rest.get(`${baseUrl}/json_api/profile/followings`, (req, res, ctx) => {
    return res(ctx.json({ status: true, followers: followerList }));
  }),
  rest.post(`${postUrl}/create`, (req, res, ctx) => {
    return res(ctx.json({ status: true, message: "Post Created" }));
  }),

  rest.get(`${authUrl}/logout`, (req, res, ctx) => {
    return res(ctx.json({ auth: false }));
  }),

  rest.post(`${postUrl}/delete`, (req, res, ctx) => {
    return res(ctx.json({ deleteStatus: true }));
  }),
  rest.put(`${postUrl}/update`, (req, res, ctx) => {
    return res(ctx.json({ updateStatus: true, message: "post updated" }));
  }),

  rest.get("http://localhost:8000/image/fakeimage.jpg", async (_, res, ctx) => {
    // Convert "base64" image to "ArrayBuffer".
    const imageBuffer = await fetch(fakeimage).then((res) => res.arrayBuffer());
    return res(
      ctx.set("Content-Length", imageBuffer.byteLength.toString()),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(imageBuffer)
    );
  }),
];
