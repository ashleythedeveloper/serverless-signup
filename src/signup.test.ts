import supertest from "supertest";

let lambdaEndpoint = "http://localhost:4000/dev";

const request = supertest(lambdaEndpoint);

describe("check lambda is up", () => {
  test("get request should return 200", async () => {
    await request.post("/").then((res) => {
      console.log(res.status);
      expect(res.status).toBe(200);
    });
  });
});
