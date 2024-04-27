import React from "react";
import { Img, Text, Heading } from "./..";

export default function VijayDashboardPageRow({
  duration = "5 Minute calming down session",
  time = "5 am",
  image = "images/img_arrow_right_blue_gray_900_02.svg",
  ...props
}) {
  return (
    <div {...props}>
      <div className="ml-[31px] flex w-[81%] items-center justify-between gap-5 self-end sm:ml-0 sm:w-full">
        <div className="h-[10px] w-[11px] rounded-[5px] bg-indigo-A700" />
        <div className="flex flex-col items-start gap-[15px]">
          <Heading size="2xl" as="h5" className="!text-black-900">
            {duration}
          </Heading>
          <Text size="md" as="p" className="!text-gray-900_01">
            {time}
          </Text>
        </div>
      </div>
      <Img src={image} alt="image" className="mr-[31px] h-[17px] sm:mr-0 sm:w-full" />
    </div>
  );
}
