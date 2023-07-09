"use client";

import { Link } from "@/components/chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
} from "@/components/chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Result() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const target = searchParams.get("target");
  const isSick = (() => {
    const res = searchParams.get("res");
    if (res == "1") {
      return true;
    } else {
      return false;
    }
  })();

  useEffect(() => {
    if (!searchParams.get("target") || !searchParams.get("res")) {
      router.replace("/");
    }
  });

  return (
    <>
      {searchParams.get("target") && searchParams.get("res") ? (
        <Flex
          placeContent="streach"
          placeItems="streach"
          gap={4}
          p={4}
          direction="column"
        >
          {(() => {
            if (target == "diabetes") {
              return (
                <Box
                  flex="none"
                  bgColor="pink.300"
                  color="black"
                  rounded="lg"
                  p={4}
                >
                  <Text fontSize="2xl" fontWeight="bold">
                    糖尿病診断
                  </Text>
                </Box>
              );
            }

            if (target == "hypertension") {
              return (
                <Box
                  flex="none"
                  bgColor="cyan.300"
                  color="black"
                  rounded="lg"
                  p={4}
                >
                  <Text fontSize="2xl" fontWeight="bold">
                    高血圧診断
                  </Text>
                </Box>
              );
            }

            if (target == "stroke") {
              return (
                <Box
                  flex="none"
                  bgColor="yellow.300"
                  color="black"
                  rounded="lg"
                  p={4}
                >
                  <Text fontSize="2xl" fontWeight="bold">
                    脳卒中診断
                  </Text>
                </Box>
              );
            }
          })()}
          {isSick ? (
            <SimpleGrid
              flexGrow={1}
              placeContent="center"
              placeItems="center"
              gap={4}
            >
              <Flex>
                <Text fontSize="4xl" fontWeight="bold">
                  診断結果:
                </Text>
                <Text fontSize="4xl" fontWeight="bold" color="red.500">
                  リスク高
                </Text>
              </Flex>
              <Text fontSize="2xl">
                あなたの入力に基づくと、健康リスクが高い可能性があります。早急に医療専門家と相談することを強くお勧めします。このアプリの診断は初期評価に過ぎず、医師による評価を置き換えるものではありません。
              </Text>
            </SimpleGrid>
          ) : (
            <SimpleGrid
              flexGrow={1}
              placeContent="center"
              placeItems="center"
              gap={4}
            >
              <Flex>
                <Text fontSize="4xl" fontWeight="bold">
                  診断結果:
                </Text>
                <Text fontSize="4xl" fontWeight="bold">
                  リスク低
                </Text>
              </Flex>
              <Text fontSize="2xl">
                あなたの入力に基づくと、現時点での健康リスクは低いと考えられます。しかし、健康状態は定期的にチェックすることが重要です。何か変化があった場合、または気になる症状がある場合は、すぐに医療専門家と相談してください。
              </Text>
            </SimpleGrid>
          )}
          <SimpleGrid placeItems="center">
            <Link href="/">
              <Button bgColor="green.700" color="white" colorScheme="green">
                戻る
              </Button>
            </Link>
          </SimpleGrid>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}
