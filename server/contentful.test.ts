import { describe, expect, it } from "vitest";

describe("Contentful API Credentials", () => {
  it("should have CONTENTFUL_SPACE_ID configured", () => {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    expect(spaceId).toBeDefined();
    expect(spaceId).not.toBe("");
    expect(typeof spaceId).toBe("string");
  });

  it("should have CONTENTFUL_ACCESS_TOKEN configured", () => {
    const token = process.env.CONTENTFUL_ACCESS_TOKEN;
    expect(token).toBeDefined();
    expect(token).not.toBe("");
    expect(typeof token).toBe("string");
  });

  it("should have CONTENTFUL_ENVIRONMENT configured", () => {
    const env = process.env.CONTENTFUL_ENVIRONMENT;
    expect(env).toBeDefined();
    expect(env).not.toBe("");
  });

  it("should successfully connect to Contentful Delivery API", async () => {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const token = process.env.CONTENTFUL_ACCESS_TOKEN;

    if (!spaceId || !token) {
      console.warn("Skipping API test: Contentful credentials not set");
      return;
    }

    const response = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/${process.env.CONTENTFUL_ENVIRONMENT || "master"}/entries?limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    expect(response.ok).toBe(true);
    const data = await response.json();
    expect(data).toHaveProperty("sys");
    expect(data.sys.type).toBe("Array");
  });
});
