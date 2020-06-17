import { renderHook, act } from "@testing-library/react-hooks";
import { get } from "axios";

import useApi from ".";

jest.mock("axios");

describe("useApi", () => {
  it("returns the response when get request is completed", async () => {
    get.mockReturnValue(Promise.resolve({ data: { key: "value" } }));
    const { result } = renderHook(() => useApi("http://example.com"));

    await act(async () => {
      await result.current.fetch();
    });

    expect(result.current.response).toEqual({
      data: {
        key: "value",
      },
    });
  });

  it("returns a false loading state when finished", async () => {
    get.mockReturnValue(Promise.resolve({ data: { key: "value" } }));
    const { result } = renderHook(() => useApi("http://example.com"));

    await act(async () => {
      await result.current.fetch();
    });

    expect(result.current.isLoading).toBe(false);
  });
});
