import { useState } from "react";
import { QuizCategory } from "../types/quiz-type";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Button,
  SimpleGrid,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

export function SetQuestionCategory(p: {
  categories: QuizCategory[];
  onClickNext: (categoryId: string) => void;
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    p.categories[0].id.toString()
  );

  const radioList = p.categories.map((category: QuizCategory) => {
    return (
      <Radio key={category.id} value={category.id.toString()}>
        {category.name}
      </Radio>
    );
  });
  console.log("***", selectedCategoryId);
  return (
    <>
      <Flex direction={"column"} alignItems={"center"} justify={"center"}>
        <Heading as="h1" fontSize="3xl" mb={20}>
          Which topic ?
        </Heading>
      </Flex>

      <RadioGroup
        display={"flex"}
        justifyContent={"center"}
        value={selectedCategoryId}
        onChange={setSelectedCategoryId}
      >
        <SimpleGrid columns={[1, 3, 4]} spacing={"4"}>
          {radioList}
        </SimpleGrid>
      </RadioGroup>

      <Button
        onClick={() => p.onClickNext(selectedCategoryId)}
        position={"absolute"}
        top={"80%"}
        right={"10%"}
        rightIcon={<ArrowForwardIcon />}
      >
        Set difficulty
      </Button>
    </>
  );
}
