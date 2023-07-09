"use client";

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
  Text,
  Wrap,
} from "@/components/chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Hypertension() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Stroke>();

  const router = useRouter();

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

  const bmiList: number[] = [];

  for (let i = 16; i < 41; i++) {
    bmiList.push(i);
  }

  const bmiSelect = bmiList.map((bmi) => {
    return (
      <option key={bmi} value={bmi}>
        {bmi}
      </option>
    );
  });

  return (
    <Flex
      placeContent="streach"
      placeItems="streach"
      gap={4}
      p={4}
      direction="column"
    >
      <Box flex="none" bgColor="yellow.300" color="black" rounded="lg" p={4}>
        <Text fontSize="2xl" fontWeight="bold">
          脳卒中診断
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
          const params = [
            `age=${data.age}`,
            `sex=${data.sex}`,
            `hypertension=${data.hypertension}`,
            `heartDisease=${data.heartDisease}`,
            `everMarried=${data.everMarried}`,
            `workType=${data.workType}`,
            `residenceType=${data.residenceType}`,
            `avgGlucoseLevel=${data.avgGlucoseLevel}`,
            `bmi=${data.bmi}`,
            `smokingStatus=${data.smokingStatus}`,
          ].join("&");
          router.push("/result" + "?" + params);
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
          {errors.age && <FormErrorMessage>必須の質問です</FormErrorMessage>}
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
          {errors.sex && <FormErrorMessage>必須の質問です</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.hypertension != undefined}>
          <FormLabel>高血圧になったことがある</FormLabel>
          <RadioGroup display="grid">
            <Wrap>
              <Radio
                value="1"
                borderColor="black"
                colorScheme="green"
                {...register("hypertension", { required: true })}
              >
                はい
              </Radio>
              <Radio
                value="0"
                borderColor="black"
                colorScheme="green"
                {...register("hypertension", { required: true })}
              >
                いいえ
              </Radio>
            </Wrap>
          </RadioGroup>
          {errors.hypertension && (
            <FormErrorMessage>必須の質問です</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.heartDisease != undefined}>
          <FormLabel>心臓病を患ったことがある</FormLabel>
          <RadioGroup display="grid">
            <Wrap>
              <Radio
                value="1"
                borderColor="black"
                colorScheme="green"
                {...register("heartDisease", { required: true })}
              >
                はい
              </Radio>
              <Radio
                value="0"
                borderColor="black"
                colorScheme="green"
                {...register("heartDisease", { required: true })}
              >
                いいえ
              </Radio>
            </Wrap>
          </RadioGroup>
          {errors.heartDisease && (
            <FormErrorMessage>必須の質問です</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.everMarried != undefined}>
          <FormLabel>結婚したことがある</FormLabel>
          <RadioGroup display="grid">
            <Wrap>
              <Radio
                value="1"
                borderColor="black"
                colorScheme="green"
                {...register("everMarried", { required: true })}
              >
                はい
              </Radio>
              <Radio
                value="0"
                borderColor="black"
                colorScheme="green"
                {...register("everMarried", { required: true })}
              >
                いいえ
              </Radio>
            </Wrap>
          </RadioGroup>
          {errors.everMarried && (
            <FormErrorMessage>必須の質問です</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.workType != undefined}>
          <FormLabel>仕事の種類</FormLabel>
          <RadioGroup display="grid">
            <Wrap>
              <Radio
                value="0"
                borderColor="black"
                colorScheme="green"
                {...register("workType", { required: true })}
              >
                無職
              </Radio>
              <Radio
                value="1"
                borderColor="black"
                colorScheme="green"
                {...register("workType", { required: true })}
              >
                子供
              </Radio>
              <Radio
                value="2"
                borderColor="black"
                colorScheme="green"
                {...register("workType", { required: true })}
              >
                政府関係
              </Radio>
              <Radio
                value="3"
                borderColor="black"
                colorScheme="green"
                {...register("workType", { required: true })}
              >
                自営業
              </Radio>
              <Radio
                value="4"
                borderColor="black"
                colorScheme="green"
                {...register("workType", { required: true })}
              >
                個人事業主
              </Radio>
            </Wrap>
          </RadioGroup>
          {errors.workType && (
            <FormErrorMessage>必須の質問です</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.residenceType != undefined}>
          <FormLabel>居住地域</FormLabel>
          <RadioGroup display="grid">
            <Wrap>
              <Radio
                value="1"
                borderColor="black"
                colorScheme="green"
                {...register("residenceType", { required: true })}
              >
                都市部
              </Radio>
              <Radio
                value="0"
                borderColor="black"
                colorScheme="green"
                {...register("residenceType", { required: true })}
              >
                農村部
              </Radio>
            </Wrap>
          </RadioGroup>
          {errors.residenceType && (
            <FormErrorMessage>必須の質問です</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.avgGlucoseLevel != undefined}>
          <FormLabel>平均グルコースレベル</FormLabel>
          <NumberInput
            min={50.0}
            max={300.0}
            step={0.1}
            borderColor="black"
            colorScheme="green"
            placeholder=" "
          >
            <NumberInputField
              {...register("avgGlucoseLevel", {
                required: true,
                validate: (value) => value.toString() != " ",
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {errors.avgGlucoseLevel && (
            <FormErrorMessage>必須の質問です</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.bmi != undefined}>
          <FormLabel>BMI</FormLabel>
          <Select
            borderColor="black"
            colorScheme="green"
            placeholder=" "
            {...register("bmi", {
              required: true,
              validate: (value) => value.toString() != " ",
            })}
          >
            {bmiSelect}
          </Select>
          {errors.bmi && <FormErrorMessage>必須の質問です</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={errors.smokingStatus != undefined}>
          <FormLabel>喫煙経験がある</FormLabel>
          <RadioGroup display="grid">
            <Wrap>
              <Radio
                value="1"
                borderColor="black"
                colorScheme="green"
                {...register("smokingStatus", { required: true })}
              >
                はい
              </Radio>
              <Radio
                value="0"
                borderColor="black"
                colorScheme="green"
                {...register("smokingStatus", { required: true })}
              >
                いいえ
              </Radio>
            </Wrap>
          </RadioGroup>
          {errors.smokingStatus && (
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
  );
}
