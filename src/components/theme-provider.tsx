"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & { children: React.ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
