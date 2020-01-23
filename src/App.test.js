import { cleanup, render } from "@testing-library/svelte";
import App from "./App.svelte";

describe("LocationsList", () => {
  afterEach(cleanup);

  test("Displats property internationalized messages", () => {
    render(App);
    // assert stuff here
  });
});
