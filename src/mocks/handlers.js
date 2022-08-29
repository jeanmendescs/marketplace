import { rest } from "msw";
import PRODUCTS from "data/products.json";

export const handlers = [
  rest.get("cgtrader.test.com/products", (req, res, ctx) => {
    return res(ctx.json(PRODUCTS));
  }),
];
