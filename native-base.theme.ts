import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      400: "#313144",
      500: "#1F1F2B",
    },
    secondary: {
      500: "#FED95F",
    },
    gray: {
      0: "#FFFFFF",
      50: "#EAEAEA",
      100: "#CCCCCC",
      200: "#C6C6D3",
    },
  },
  fontConfig: {
    Inter: {
      400: {
        normal: "Inter_400Regular",
      },
      500: {
        normal: "Inter_500Medium",
      },
      600: {
        normal: "Inter_600SemiBold",
      },
      700: {
        normal: "Inter_700Bold",
      },
    },
    Archivo: {
      400: {
        normal: "Archivo_400Regular",
      },
      500: {
        normal: "Archivo_500Medium",
      },
    },
  },
  fonts: {
    heading: "Inter",
    body: "Archivo",
  },
  config: {
    initialColorMode: "dark",
  },
});
