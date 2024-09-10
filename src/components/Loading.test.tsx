// @vitest-environment jsdom

import { expect, test } from "vitest";
import Loading from "./Loading";

test("renders loading text", () => {
  const loading = Loading();
  const { props } = loading;
  const h1Element = props.children.props.children;
  expect(h1Element).toBe("Computer is Selecting");
});

test("matches snapshot", () => {
  const loading = Loading();
  expect(loading).toMatchSnapshot();
});

test("renders with correct structure", () => {
  const loading = Loading();
  expect(loading.type).toBe("div");
  expect(loading.props.children.type).toBe("h1");
  expect(loading.props.children.props.children).toBe("Computer is Selecting");
});

test("renders with correct styles", () => {
  const loading = Loading();
  expect(loading.props.className).toBe("loading text-8xl text-white font-bold");
  expect(loading.props.style).toBeUndefined();
});
