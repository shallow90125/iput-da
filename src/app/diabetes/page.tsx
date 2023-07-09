"use client";

import { getDiabetes } from "@/actions/getDiabetes";
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

export default function Diabetes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Diabetes>();

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
          <Box flex="none" bgColor="pink.300" color="black" rounded="lg" p={4}>
            <Text fontSize="2xl" fontWeight="bold">
              糖尿病診断
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
                const res = await getDiabetes(data);
                router.push("/result?target=diabetes&res=" + res);
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
            <FormControl isInvalid={errors.highChol != undefined}>
              <FormLabel>高コレステロール血症</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("highChol", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("highChol", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.highChol && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.cholCheck != undefined}>
              <FormLabel>5年間以内にコレステロールをチェックした</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("cholCheck", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("cholCheck", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.cholCheck && (
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
              {errors.bmi && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.smoker != undefined}>
              <FormLabel>生涯でタバコを100本以上吸った</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("smoker", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("smoker", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.smoker && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.heartDiseaseorAttack != undefined}>
              <FormLabel>
                冠状動脈性心疾患 (CHD) または心筋梗塞 (MI) の経験 がある
              </FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("heartDiseaseorAttack", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("heartDiseaseorAttack", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.heartDiseaseorAttack && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.physActivity != undefined}>
              <FormLabel>過去30日以内に運動した</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("physActivity", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("physActivity", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.physActivity && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.fruits != undefined}>
              <FormLabel>果物を毎日食べている</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("fruits", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("fruits", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.fruits && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.veggies != undefined}>
              <FormLabel>野菜を毎日食べている</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("veggies", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("veggies", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.veggies && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.hvyAlcohlConsump != undefined}>
              <FormLabel>週に7杯以上の飲酒</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("hvyAlcohlConsump", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("hvyAlcohlConsump", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.hvyAlcohlConsump && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.genHlth != undefined}>
              <FormLabel>自身の健康状態に対する認識</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="5"
                    borderColor="black"
                    colorScheme="green"
                    {...register("genHlth", { required: true })}
                  >
                    非常に悪い
                  </Radio>
                  <Radio
                    value="4"
                    borderColor="black"
                    colorScheme="green"
                    {...register("genHlth", { required: true })}
                  >
                    悪い
                  </Radio>
                  <Radio
                    value="3"
                    borderColor="black"
                    colorScheme="green"
                    {...register("genHlth", { required: true })}
                  >
                    普通
                  </Radio>
                  <Radio
                    value="2"
                    borderColor="black"
                    colorScheme="green"
                    {...register("genHlth", { required: true })}
                  >
                    良い
                  </Radio>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("genHlth", { required: true })}
                  >
                    非常に良い
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.genHlth && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.mentHlth != undefined}>
              <FormLabel>過去30日間の精神的不調を感じた日数</FormLabel>
              <NumberInput
                min={1}
                max={30}
                borderColor="black"
                colorScheme="green"
                placeholder=" "
              >
                <NumberInputField
                  {...register("mentHlth", {
                    required: true,
                    validate: (value) => value.toString() != " ",
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.mentHlth && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.physHlth != undefined}>
              <FormLabel>過去30日間の怪我や病気の日数</FormLabel>
              <NumberInput
                min={1}
                max={30}
                borderColor="black"
                colorScheme="green"
                placeholder=" "
              >
                <NumberInputField
                  {...register("physHlth", {
                    required: true,
                    validate: (value) => value.toString() != " ",
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.physHlth && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.diffWalk != undefined}>
              <FormLabel>歩行が困難</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("diffWalk", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("diffWalk", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.diffWalk && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.stroke != undefined}>
              <FormLabel>脳卒中になった経験がある</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("stroke", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("stroke", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.stroke && (
                <FormErrorMessage>必須の質問です</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.highBp != undefined}>
              <FormLabel>高血圧である</FormLabel>
              <RadioGroup display="grid">
                <Wrap>
                  <Radio
                    value="1"
                    borderColor="black"
                    colorScheme="green"
                    {...register("highBp", { required: true })}
                  >
                    はい
                  </Radio>
                  <Radio
                    value="0"
                    borderColor="black"
                    colorScheme="green"
                    {...register("highBp", { required: true })}
                  >
                    いいえ
                  </Radio>
                </Wrap>
              </RadioGroup>
              {errors.highBp && (
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
