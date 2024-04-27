import React from "react";
import { Img, Button, Text, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="mb-[92px] flex w-full flex-col gap-[17px]">
        <Img src="images/img_footer_logo.png" alt="footerlogo" className="h-[61px] w-[89px] object-cover" />
        <Heading size="5xl" as="h4" className="!text-[26.39px] leading-[156%] !text-gray-700_01">
          Clear your thoughts, Focus your mind, and Reduce stress!
        </Heading>
      </div>
      <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
        <div className="flex flex-col gap-1.5">
          <Heading size="lg" as="h6" className="!text-[17.59px] !text-gray-700_01">
            Quick Links
          </Heading>
          <ul className="flex flex-col items-start gap-2">
            <li>
              <a href="Home" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-[17.59px]">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="Community" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-[17.59px]">
                  Community
                </Text>
              </a>
            </li>
            <li>
              <a href="Courses" target="_blank" rel="noreferrer">
                <Text as="p" className="!text-[17.59px]">
                  Courses
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-1.5 self-start">
          <Heading size="lg" as="h6" className="!text-[17.59px] !text-gray-700_01">
            Company
          </Heading>
          <ul className="flex flex-col items-start gap-2">
            <li>
              <a href="#">
                <Text as="p" className="!text-[17.59px]">
                  About us
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-[17.59px]">
                  Contact us
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1.5">
          <Heading size="lg" as="h6" className="!text-[17.59px] !text-gray-700_01">
            Further information
          </Heading>
          <ul className="flex flex-col items-start gap-2">
            <li>
              <a href="#">
                <Text as="p" className="!text-[17.59px]">
                  Terms & Conditions
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-[17.59px]">
                  Privacy policy
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="!text-[17.59px]">
                  Cookies policy
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[17px]">
        <div className="flex flex-col items-start gap-[15px]">
          <Heading size="lg" as="h6" className="!text-[17.59px] !text-gray-700_01">
            Need help?
          </Heading>
          <div className="flex items-center justify-between gap-5 self-stretch rounded-lg bg-gray-50 pl-3.5 shadow-xs">
            <Text size="xs" as="p" className="!text-[13.2px]">
              Your email address
            </Text>
            <Button className="min-w-[141px] rounded-sm font-bold sm:px-5">Submit</Button>
          </div>
        </div>
        <div className="flex w-[36%] justify-between gap-5 md:w-full">
          <Img src="images/img_svg8.svg" alt="svgeight" className="h-[26px] w-[26px]" />
          <Img src="images/img_layer_1.svg" alt="layerone" className="h-[26px] w-[26px]" />
          <Img src="images/img_svg8_deep_orange_a200.svg" alt="svgeight" className="h-[26px] w-[26px]" />
        </div>
      </div>
    </footer>
  );
}
