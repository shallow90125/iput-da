"use client";

import { getHypertension } from "@/actions/getHypertension";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Spinner,
  Text,
  Wrap,
} from "@/components/chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

export default function Hypertension() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Hypertension>();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState(false);

  const ageList: number[] = [];

  for (let i = 0; i < 99; i++) {
    ageList.push(i);
  }

  const ageSelect = ageList.map((age) => {
    return (
      <option key={age} value={age}>
        {age}
      </option>
    );
  });

  return (
    <>
      {state ? (
        <SimpleGrid placeContent="center" placeItems="center" gap={4}>
          <Text>AIが分析しています...</Text>
          <Spinner />
        </SimpleGrid>
      ) : (
        <Flex
          placeContent="streach"
          placeItems="streach"
          gap={4}
          p={4}
          direction="column"
        >
          <Box flex="none" bgColor="cyan.300" color="black" rounded="lg" p={4}>
            <Text fontSize="2xl" fontWeight="bold">
              高血圧診断
            </Text>
            <Text>質問に解答して診断しましょう</Text>
          </Box>
          <SimpleGrid
            as="form"
            bgColor="green.100"
            rounded="lg"
            p={4}
            gap={4}
            onSubmit={handleSubmit((data) => {
              setState(true);
              startTransition(async () => {
                const res = await getHypertension(data);
                router.push("/result?target=hypertension&res=" + res);
              });
            })}
          >
            <FormControl isInvalid={errors.age != undefined}>
              <FormLabel>年齢</FormLabel>
              <Select
                borderColor="black"
                colorScheme="green"
                placeholder=" "
                {...register("age", {
                  required: true,
                  validate: (value) => value.toString() != " ",
                })}
              >
                {ageSelect}
              </Select>
              {errors.age && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.sex != undefined}>
              <FormLabel>性別</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("sex", { required: true })}
                  >
                    男性
                  </Radio>
                  <Radio
                    value="2"
                    borderColor="black"
                    colorScheme="green"
                    {...register("sex", { required: true })}
                  >
                    女性
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.sex && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.cp != undefined}>
              <FormLabel>胸痛のタイプ</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("cp", { required: true })}
                  >
                    無症候性
                  </Radio>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("cp", { required: true })}
                  >
                    典型的狭心症
                  </Radio>
                  <Radio
                    value="2"
                    borderColor="black"
                    colorScheme="green"
                    {...register("cp", { required: true })}
                  >
                    非典型的狭心症
                  </Radio>
                  <Radio
                    value="3"
                    borderColor="black"
                    colorScheme="green"
                    {...register("cp", { required: true })}
                  >
                    非狭心症性疼痛
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.cp && <FormErrorMessage>必須の質問です</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.trestbps != undefined}>
              <FormLabel>安静時血圧 (mmHg)</FormLabel>
              <NumberInput
                min={100}
                max={200}
                borderColor="black"
                colorScheme="green"
                placeholder=" "
              >
                <NumberInputField
                  {...register("trestbps", {
                    required: true,
                    validate: (value) => value.toString() != " ",
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.trestbps && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.chol != undefined}>
              <FormLabel>血清コレステロール (mg/dl)</FormLabel>
              <NumberInput
                min={100}
                max={500}
                borderColor="black"
                colorScheme="green"
                placeholder=" "
              >
                <NumberInputField
                  {...register("chol", {
                    required: true,
                    validate: (value) => value.toString() != " ",
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.chol && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.fbs != undefined}>
              <FormLabel>空腹時血糖値が120mg/dl以上</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("fbs", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("fbs", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.fbs && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.restecg != undefined}>
              <FormLabel>安静時心電図の結果</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("restecg", { required: true })}
                  >
                    正常
                  </Radio>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("restecg", { required: true })}
                  >
                    ST-T波異常
                  </Radio>
                  <Radio
                    value="2"
                    borderColor="black"
                    colorScheme="green"
                    {...register("restecg", { required: true })}
                  >
                    Estesの基準による左室肥大の可能性が高い、または明確である
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.restecg && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.thalach != undefined}>
              <FormLabel>最大心拍数</FormLabel>
              <NumberInput
                min={70}
                max={200}
                borderColor="black"
                colorScheme="green"
                placeholder=" "
              >
                <NumberInputField
                  {...register("thalach", {
                    required: true,
                    validate: (value) => value.toString() != " ",
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.thalach && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.exang != undefined}>
              <FormLabel>運動誘発狭心症</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("exang", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("exang", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.exang && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.oldpeak != undefined}>
              <FormLabel>STの低下量</FormLabel>
              <NumberInput
                min={0.0}
                max={6.0}
                step={0.1}
                borderColor="black"
                colorScheme="green"
                placeholder=" "
              >
                <NumberInputField
                  {...register("oldpeak", {
                    required: true,
                    validate: (value) => value.toString() != " ",
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.oldpeak && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.slope != undefined}>
              <FormLabel>ピーク運動時のSTセグメントの傾き</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("slope", { required: true })}
                  >
                    上り勾配
                  </Radio>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("slope", { required: true })}
                  >
                    平坦
                  </Radio>
                  <Radio
                    value="2"
                    borderColor="black"
                    colorScheme="green"
                    {...register("slope", { required: true })}
                  >
                    下り勾配
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.slope && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.ca != undefined}>
              <FormLabel>透視検査での着色された主要血管の数</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("ca", { required: true })}
                  >
                    なし
                  </Radio>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("ca", { required: true })}
                  >
                    1つ
                  </Radio>
                  <Radio
                    value="2"
                    borderColor="black"
                    colorScheme="green"
                    {...register("ca", { required: true })}
                  >
                    2つ
                  </Radio>
                  <Radio
                    value="3"
                    borderColor="black"
                    colorScheme="green"
                    {...register("ca", { required: true })}
                  >
                    3つ以上
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.ca && <FormErrorMessage>必須の質問です</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.thal != undefined}>
              <FormLabel>サラセミアの状態</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="3"
                    borderColor="black"
                    colorScheme="green"
                    {...register("thal", { required: true })}
                  >
                    正常
                  </Radio>
                  <Radio
                    value="6"
                    borderColor="black"
                    colorScheme="green"
                    {...register("thal", { required: true })}
                  >
                    固定欠損
                  </Radio>
                  <Radio
                    value="7"
                    borderColor="black"
                    colorScheme="green"
                    {...register("thal", { required: true })}
                  >
                    可逆欠損
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.thal && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <SimpleGrid placeItems="center">
              <Button
                bgColor="green.700"
                color="white"
                colorScheme="green"
                type="submit"
              >
                解答を送信する
              </Button>
            </SimpleGrid>
          </SimpleGrid>
        </Flex>
      )}
    </>
  );
}
