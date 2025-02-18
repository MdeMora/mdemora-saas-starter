// middlewares/chain.ts
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

type MiddlewareFunction = (
  request: NextRequest,
  event?: NextFetchEvent
) => Promise<NextResponse> | NextResponse;

export function chain(middlewares: MiddlewareFunction[]) {
  return async function handler(request: NextRequest, event?: NextFetchEvent) {
    let response = NextResponse.next();

    for (const middleware of middlewares) {
      response = await middleware(request, event);
      if (response.headers.get("x-middleware-next") !== "1") {
        return response;
      }
    }

    return response;
  };
}
