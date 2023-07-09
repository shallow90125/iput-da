"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor: "green.50",
          color: "black",
        },
      },
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
