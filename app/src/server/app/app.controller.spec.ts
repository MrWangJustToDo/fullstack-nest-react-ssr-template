import { Test } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import type { TestingModule } from "@nestjs/testing";

describe("AppController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});
