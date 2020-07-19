import { cleanup, render, findByTestId } from "@testing-library/svelte";
import './i18n';
import App from "./App.svelte";

describe("LocationsList", () => {
  afterEach(cleanup);

  test("Displats property internationalized messages", async () => {
    const {findByTestId} = render(App);
    const plainElement = await findByTestId('plain')
    expect(plainElement).toHaveTextContent("Some text without interpolations")
  });
});
