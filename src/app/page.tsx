import HomeWidget from "@/components/HomeWidget";
import { Flex, Grid, Stack, Text } from "@/components/chakra-ui/react";

export default function Home() {
  return (
    <Flex
      placeContent="streach"
      placeItems="streach"
      gap={4}
      p={4}
      direction="column"
    >
      <Stack flex="none">
        <Text fontSize="3xl" fontWeight="bold" color="green.700">
          3つの病気のリスクをAIが診断します
        </Text>
      </Stack>
      <Grid templateRows="repeat(3, 1fr)" gap="4" flexGrow={1}>
        <HomeWidget
          href="/diabetes"
          text="糖尿病"
          bgColor="pink.300"
          describe="症状とライフスタイルを分析し、糖尿病の可能性を評価します"
        ></HomeWidget>
        <HomeWidget
          href="/diabetes"
          text="高血圧"
          bgColor="cyan.300"
          describe="血圧と生活習慣から、高血圧のリスクを予測します"
        ></HomeWidget>
        <HomeWidget
          href="/diabetes"
          text="脳卒中"
          bgColor="yellow.300"
          describe="異常な症状を検出し、脳卒中の早期警告を提供します"
        ></HomeWidget>
      </Grid>
    </Flex>
  );
}
