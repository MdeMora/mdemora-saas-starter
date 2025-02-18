// middleware.ts
import i18nMiddleware from "@/middlewares/i18nMiddleware";
import { chain } from "@/middlewares/chain";
import { authMiddleware } from "@/middlewares/authMiddleware";

export default chain([i18nMiddleware, authMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
