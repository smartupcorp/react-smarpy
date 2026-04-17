"use client";

import { createContext } from "react";
import { type ColorScheme } from "../../types";

const SmarpyColorSchemeContext = createContext<ColorScheme | undefined>(undefined);

export default SmarpyColorSchemeContext;
