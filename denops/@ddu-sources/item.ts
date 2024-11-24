import {
  type Context,
  type DduItem,
  type Item,
} from "jsr:@shougo/ddu-vim@~6.4.0/types";
import { BaseSource } from "jsr:@shougo/ddu-vim@~6.4.0/source";

import type { Denops } from "jsr:@denops/core@~7.0.0";

type Params = {
  items: DduItem[];
};

export class Source extends BaseSource<Params> {
  override gather(args: {
    denops: Denops;
    context: Context;
    sourceParams: Params;
  }): ReadableStream<Item[]> {
    return new ReadableStream({
      start(controller) {
        controller.enqueue(args.sourceParams.items);
        controller.close();
      },
    });
  }

  override params(): Params {
    return {
      items: [],
    };
  }
}
