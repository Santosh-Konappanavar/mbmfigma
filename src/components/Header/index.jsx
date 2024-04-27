import React from "react";
import { Img, SelectBox, Heading } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Img
        src="images/img_header_logo.png"
        alt="headerlogo"
        className="ml-24 h-[92px] w-[133px] object-cover md:ml-0"
      />
      <div className="mr-[203px] flex w-[65%] items-center justify-between gap-5 md:mr-0 md:w-full md:flex-col">
        <ul className="flex flex-wrap gap-[45px]">
          <li>
            <a href="#">
              <Heading size="s" as="p" className="!text-gray-600">
                Dashboard
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="s" as="p" className="!text-gray-500_01 hover:!text-gray-600">
                Courses
              </Heading>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <Heading size="s" as="p" className="!text-gray-500_01 hover:!text-gray-600">
                Community
              </Heading>
            </a>
          </li>
        </ul>
        <div className="flex w-[46%] items-center justify-center gap-6 md:w-full">
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="images/img_hugeicon_arrows_bulk_directionleft_01.svg"
                alt="huge-icon/arrows/bulk/direction-left 01"
                className="h-[18px] w-[18px]"
              />
            }
            name="email"
            placeholder={`ramesh.123@example.com`}
            options={dropDownOptions}
            className="flex-grow gap-px border-[0.5px] border-solid border-blue_gray-100_01 font-semibold sm:pr-5"
          />
          <a href="#">
            <Img src="images/img_ellipse_2.png" alt="circleimage" className="h-[50px] w-[50px] rounded-[50%]" />
          </a>
          <a href="#">
            <Img src="images/img_alarm.svg" alt="alarm" className="h-[24px] w-[24px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
