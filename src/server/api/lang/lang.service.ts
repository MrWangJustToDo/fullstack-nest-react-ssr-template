import { Injectable } from '@nestjs/common';
import { createReadStream, ReadStream } from 'fs';
import { resolve } from 'path';

@Injectable()
export class LangService {
  getLangData(lang: string): ReadStream {
    if (lang === 'en' || lang === 'ar') {
      const stream = createReadStream(
        resolve(process.cwd(), 'lang', `${lang}.json`),
      );
      return stream;
    } else {
      return null;
    }
  }
}
