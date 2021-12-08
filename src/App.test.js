import { render, screen } from '@testing-library/react';
import App from './App';
import { url } from './api';

import { rest } from "msw";
import { setupServer } from "msw/node";


const productErrorResponse = rest.get(url, (req, res, ctx) => {
  return res(ctx.status(500));
});

const productResponse = rest.get(url, (req, res, ctx) => {
  return res(
    ctx.json({"products" : [
      { id: 1, productName: "Product 1", shortDescription: "Product 1 Short Desc", detailedDescription: "Product 1 Detailed Desc", category: "Product 1 Category", startingPrice: "500", bidEndDate: "31-12-2021" },
      { id: 2, productName: "Product 2", shortDescription: "Product 2 Short Desc", detailedDescription: "Product 2 Detailed Desc", category: "Product 2 Category", startingPrice: "1000", bidEndDate: "31-01-2022" },
    ]})
  );
});

const handlers = [productResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test("it should handle error message from products", async () => {
  server.use(productErrorResponse);
  render(<App />);
  const productItem = await screen.findByText("Oops! Something went wrong. Please try again later.");
  expect(productItem).toBeVisible();
});

test("it should have the correct product name - Product 1", async () => {
  render(<App/>);
  const productItem = await screen.findByText("Product 1");
  expect(productItem).toBeVisible();
});

test("it should have the correct product name - Product 2", async () => {
  render(<App/>);
  const productItem = await screen.findByText("Product 2");
  expect(productItem).toBeVisible();
});