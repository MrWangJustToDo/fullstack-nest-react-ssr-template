import { Controller, Get, Query, Response } from "@nestjs/common";
import { Response as ExpressResponse } from "express";

import { LangService } from "./lang.service";

@Controller("api")
export class LangController {
  constructor(private langService: LangService) {}

  @Get("lang")
  async getLang(@Query("lang") lang, @Response() response: ExpressResponse) {
    const stream = this.langService.getLangData(lang);
    if (stream) {
      stream.pipe(response);
    } else {
      response.status(404).json({ data: "not found" });
    }
  }
}
