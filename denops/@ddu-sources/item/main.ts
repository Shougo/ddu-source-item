import type { Context, Item } from "@shougo/ddu-vim/types";
import { BaseSource } from "@shougo/ddu-vim/source";

import type { Denops } from "@denops/std";

type Params = {
  items: Item[];
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
