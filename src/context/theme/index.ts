import { useState } from "react"
import { Theme } from "@material-ui/core"

export type ThemeType = Theme['palette']['type']
export const useCusThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeType>('dark')
  return { themeMode, setThemeMode }
}