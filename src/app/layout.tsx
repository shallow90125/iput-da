import Provider from "@/components/Provider";
import { Link } from "@/components/chakra-ui/next-js";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@/components/chakra-ui/react";
import { Noto_Sans_JP } from "next/font/google";

const font = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "AI健康診断",
  description: "3つの病気のリスクをAIが診断します",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Box
          as="body"
          fontFamily={font.style.fontFamily}
          fontWeight={font.style.fontWeight}
          fontStyle={font.style.fontStyle}
        >
          <Provider>
            <Flex direction="column" h="100dvh" w="100dvw">
              <Grid
                as="header"
                h="16"
                flex="none"
                placeItems="center"
                fontWeight="bold"
                bgColor="green.700"
                color="white"
              >
                <GridItem fontSize="2xl">
                  <Link href="/">
                    <Text>AI健康診断</Text>
                  </Link>
                </GridItem>
              </Grid>
              <Divider />
              <Container as="main" flexGrow={1} display="grid">
                {children}
              </Container>
              <Divider />
              <Grid
                as="footer"
                h="16"
                flex="none"
                placeItems="center"
                fontWeight="bold"
                bgColor="green.700"
                color="white"
              >
                <GridItem>
                  <Link href="/">&copy; 2023 iput-da</Link>
                </GridItem>
              </Grid>
            </Flex>
          </Provider>
        </Box>
      </body>
    </html>
  );
}
