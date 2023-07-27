import { Controller, Get, Inject, Query, Response } from "@nestjs/common";
import { Response as ExpressResponse } from "express";

import { LangService } from "./lang.service";

@Controller("api")
export class LangController {
  @Inject(LangService)
  private readonly langService: LangService;

  @Get("lang")
  getLang(@Query("lang") lang: string, @Response() response: ExpressResponse) {
    const stream = this.langService.getLangData(lang);
    if (stream) {
      stream.pipe(response);
    } else {
      response.status(404).json({ data: "not found" });
    }
  }
}