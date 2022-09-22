import { Injectable } from "@nestjs/common";
import { createReadStream } from "fs";
import { resolve } from "path";

import type { ReadStream } from "fs";

@Injectable()
export class LangService {
  getLangData(lang: string): ReadStream {
    if (lang === "en" || lang === "ar") {
      const stream = createReadStream(resolve(process.cwd(), "lang", `${lang}.json`));
      return stream;
    } else {
      return null;
    }
  }
}
