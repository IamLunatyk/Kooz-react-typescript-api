import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export function SetQuestionQty(p: {
  defaultValue: number;
  max: number;
  min: number;
  step: number;
  onClickNext: (amount: number) => void;
}) {
  const [sliderValue, setSliderValue] = useState<number>(p.defaultValue);

  const renderMarks = (): JSX.Element[] => {
    let marks = [];
    for (let index = p.min; index <= p.max; index += p.step) {
      marks.push(
        <SliderMark key={index} ml={-2} pt={4} value={index}>
          {index}
        </SliderMark>
      );
    }
    return marks;
  };
  return (
    <>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize="3xl" mb={20}>
          How many questions ?
        </Heading>
        <Slider
          value={sliderValue}
          maxW={400}
          max={p.max}
          min={p.min}
          step={p.step}
          colorScheme="yellow"
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
        >
          {renderMarks()}
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
      <Button
        onClick={() => p.onClickNext(sliderValue)}
        position={"absolute"}
        top={"80%"}
        right={"10%"}
        rightIcon={<ArrowForwardIcon />}
      >
        Set category
      </Button>
    </>
  );
}
