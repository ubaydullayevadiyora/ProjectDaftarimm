import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { before } from "node:test";
import { AppModule } from "../src/app.module";
import * as request from "supertest";
import { error } from "console";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    // app.setGlobalPrefix("api")
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/sign-in")
      .send({
        email: "sadmin@gmail.com",
        password: "qwerty",
        value: "superadmin",
      });
    token = response.body.token;
    console.log("token", token);
  });
  it("/users (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it('/users (GET) --> 401 "Unauthorized" error', () => {
    return request(app.getHttpServer())
      .get("/users")

      .expect("Content-Type", /json/)
      .expect(401);
  });

//   it("/auth/sign-up (POST) --> 201", async () => {
//     return request(app.getHttpServer())
//       .post("/auth/sign-up")
//       .send({
//         name: "user221",
//         email: "user2212001@gmail.com",
//         password: "Uzbek1$t0n",
//         value: "superadmin",
//       })
//       .expect("Content-Type", /json/)
//       .expect(201)

//     //   .then((response) => {
//     //     expect(response.body).toMatchObject({
//     //       token: expect.any(String),
//     //     });
//     //   });
//   });

   it("/auth/sign-up (POST) --> 400", () => {
    return request(app.getHttpServer())
      .post("/auth/sign-up")
      .send({
        name: "user221",
        email: "user2212001@gmail.com",
        password: "Uzbek1$t0n",
        value: "superadmin",
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .expect({
        message:"Bunday emaili foydalanuvchi mavjud",
        error:"Bad Request",
        statusCode:400
      })
   });

  afterAll(async () => {
    await app.close();
  });
});
