import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VijayDashboardPageRow from "../../components/VijayDashboardPageRow";

const data = [
  { duration: "5 Minute calming down session", time: "5 am", image: "images/img_arrow_right_blue_gray_900_02.svg" },
  { duration: "Warming & Yoga exercises", time: "5.05 am", image: "images/img_arrow_right.svg" },
  { duration: "Talk on spiritual topic", time: "5.30 am", image: "images/img_arrow_right.svg" },
  { duration: "Breathing exercise", time: "5.40 am", image: "images/img_arrow_right.svg" },
  { duration: "Meditation", time: "5.50 am", image: "images/img_arrow_right.svg" },
  { duration: "Q & A session", time: ".", image: "images/img_arrow_right.svg" },
];

export default function VijayDashboardpagePage() {
  return (
    <>
      <Helmet>
        <title>mbmfigma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* dashboard main section */}
      <div className="flex w-full flex-col items-center bg-white-A700">
        {/* header section */}
        <Header className="flex items-center justify-between gap-5 self-stretch bg-gray-100_01 md:flex-col" />

        {/* content section */}
        <div className="mx-auto mt-[46px] w-full max-w-[1040px] md:p-5">
          <div className="flex flex-col gap-[52px] sm:gap-[26px]">
            <div className="relative h-[305px] rounded-[16px] border border-solid border-yellow-900 p-[21px] sm:p-5">
              <div className="absolute bottom-[21.87px] left-0 right-0 m-auto flex w-[96%] flex-col items-end">
                <Img
                  src="images/img_frame_162.svg"
                  alt="image"
                  className="relative z-[1] mr-9 h-[188px] w-[39%] md:mr-0"
                />
                <Img
                  src="images/img_shadow_long.svg"
                  alt="shadowlong"
                  className="relative mt-[-26px] h-[38px] w-full md:h-auto"
                />
              </div>
              <div className="absolute left-[3%] top-[23.00px] z-[2] m-auto flex w-[87%] items-start justify-between gap-5 md:relative md:flex-col">
                <div className="flex w-[61%] items-center justify-between gap-5 p-1.5 md:w-full sm:flex-col">
                  <div className="ml-[9px] mt-[5px] flex w-[66%] items-start justify-between gap-5 md:ml-0 sm:w-full">
                    <div className="flex w-[44%] flex-col items-start gap-[100px] md:gap-[75px] sm:gap-[50px]">
                      <Heading size="2xl" as="h1" className="tracking-[0.25px] !text-deep_orange-500">
                        Your Progress !
                      </Heading>
                      <div className="ml-4 flex w-[68%] flex-col items-start md:ml-0 md:w-full">
                        <div className="flex w-[81%] items-center gap-4 md:w-full">
                          <div className="mb-[11px] h-[22px] w-[22px] self-end rounded-lg bg-gray-300" />
                          <Heading size="6xl" as="h2" className="!font-poppins !text-blue_gray-900_01">
                            10
                          </Heading>
                        </div>
                        <Heading size="xs" as="h3" className="!text-gray-600_02">
                          Days remaining
                        </Heading>
                      </div>
                    </div>
                    <div className="w-[46%] rounded-[75px] border-[12px] border-solid border-gray-300 pl-1">
                      <div className="flex h-[150px] flex-col items-start justify-center bg-[url(/public/images/img_group_4.svg)] bg-cover bg-no-repeat p-[37px] md:h-auto sm:p-5">
                        <Heading
                          size="xl"
                          as="h4"
                          className="mb-[23px] mt-6 text-center !font-poppins !text-yellow-900_01"
                        >
                          65%
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="mr-[18px] flex w-[17%] flex-col items-start self-end md:mr-0 sm:w-full">
                    <div className="relative z-[3] flex w-[78%] items-center gap-2.5 md:w-full">
                      <div className="mb-[11px] h-[22px] w-[22px] self-end rounded-lg bg-orange-800" />
                      <Heading size="6xl" as="h5" className="!font-poppins !text-blue_gray-900_01">
                        16
                      </Heading>
                    </div>
                    <Heading size="xs" as="h6" className="!text-gray-600_02">
                      Days attended
                    </Heading>
                  </div>
                </div>
                <div className="mt-1.5 flex w-[29%] flex-col items-start md:w-full">
                  <Button size="lg" className="w-full rounded-[25px] font-bold">
                    Welcome Ramesh to MBM !
                  </Button>
                  <Img src="images/img_settings.svg" alt="settings" className="ml-[27px] h-[19px] md:ml-0" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[25px] md:flex-col">
              <div className="flex w-full flex-col gap-[27px]">
                <div className="flex flex-col items-start gap-10">
                  <div className="flex flex-col items-center gap-[7px] self-stretch rounded-[16px] border border-solid border-deep_orange-A200 bg-red-50 p-[19px]">
                    <Heading size="9xl" as="h1" className="w-[67%] !text-blue_gray-600 md:w-full">
                      <span className="text-blue_gray-600">Day -&nbsp;</span>
                      <span className="text-9xl text-blue_gray_900">01</span>
                      <span className="text-2xl text-blue_gray_900">/26</span>
                      <span className="text-9xl text-blue_gray-600">&nbsp;</span>
                      <span className="text-blue_gray-600">&nbsp;</span>
                    </Heading>
                    <Heading size="xl" as="h6" className="!text-gray-500_04">
                      Batch 42 - Session starts at 5 am{" "}
                    </Heading>
                    <Button size="md" className="min-w-[429px] rounded-[16px] font-bold sm:px-5">
                      Click here to join the session →
                    </Button>
                  </div>
                  <Heading size="6xl" as="h2" className="!text-gray-500 underline">
                    Schedule
                  </Heading>
                </div>
                <div>
                  <div className="flex flex-col gap-[19px]">
                    {data.map((d, index) => (
                      <VijayDashboardPageRow
                        {...d}
                        key={"listview" + index}
                        className="flex flex-1 items-center justify-between gap-5 rounded-[17px] bg-gray-100 p-3"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[51px] sm:gap-[25px]">
                <div className="flex items-start gap-[30px] sm:flex-col">
                  <div className="flex flex-1 flex-col gap-4 sm:self-stretch">
                    <div className="flex items-start justify-center gap-3">
                      <Img
                        src="images/img_ellipse_2_58x58.png"
                        alt="circleimage"
                        className="h-[58px] w-[58px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-start gap-[7px] px-3">
                        <Heading size="7xl" as="h2" className="!text-[33.28px] !text-blue_gray-600">
                          MBM Schedule
                        </Heading>
                        <Heading size="3xl" as="h5" className="!text-[23.3px] !text-blue_gray-100_01">
                          Batch 42{" "}
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-[7px] bg-white-A700 p-3">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-1 flex-wrap items-center justify-between gap-5 p-[25px] sm:p-5">
                          <Heading as="h6" className="self-start !text-[16.64px] !text-gray-600_01">
                            DAY{" "}
                          </Heading>
                          <Heading as="h6" className="self-start !text-[16.64px] !text-gray-600_01">
                            DAY
                          </Heading>
                          <Heading as="h6" className="!text-[16.64px] !text-gray-600_01">
                            DAY
                          </Heading>
                          <Heading as="h6" className="!text-[16.64px] !text-gray-600_01">
                            DAY
                          </Heading>
                          <Heading as="h6" className="mr-[9px] !text-[16.64px] !text-gray-600_01 md:mr-0">
                            DAY
                          </Heading>
                        </div>
                        <div className="flex flex-1 flex-wrap justify-between gap-5 bg-white-A700 p-[26px] sm:p-5">
                          <Heading as="h6" className="ml-[13px] text-center !text-[16.64px] !text-gray-700_02 md:ml-0">
                            1
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px] !text-gray-700_02">
                            2
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px] !text-gray-700_02">
                            3
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px] !text-gray-700_02">
                            4
                          </Heading>
                          <Heading as="h6" className="mr-2.5 text-center !text-[16.64px] !text-blue_gray-600 md:mr-0">
                            5
                          </Heading>
                        </div>
                        <div className="flex flex-1 items-center justify-between gap-5 bg-white-A700 p-3">
                          <Heading as="h6" className="ml-6 text-center !text-[16.64px] !text-blue_gray-600 md:ml-0">
                            6
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px] !text-blue_gray-600">
                            7
                          </Heading>
                          <div className="mr-5 flex w-[52%] items-center justify-between gap-5 md:mr-0">
                            <Heading as="h6" className="text-center !text-[16.64px] !text-blue_gray-600">
                              8
                            </Heading>
                            <Button size="lg" shape="round" className="min-w-[59px] font-dmsans font-bold sm:px-5">
                              9
                            </Button>
                            <Heading as="h6" className="text-center !text-[16.64px] !text-gray-400_01">
                              10
                            </Heading>
                          </div>
                        </div>
                        <div className="flex flex-1 justify-between gap-5 bg-white-A700 p-[26px] sm:p-5">
                          <Heading as="h6" className="ml-2.5 text-center !text-[16.64px] md:ml-0">
                            11
                          </Heading>
                          <div className="mr-[7px] flex w-[77%] flex-wrap justify-between gap-5 md:mr-0">
                            <Heading as="h6" className="text-center !text-[16.64px]">
                              12
                            </Heading>
                            <Heading as="h6" className="text-center !text-[16.64px]">
                              13
                            </Heading>
                            <Heading as="h6" className="text-center !text-[16.64px]">
                              14
                            </Heading>
                            <Heading as="h6" className="text-center !text-[16.64px]">
                              15
                            </Heading>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-wrap justify-between gap-5 bg-white-A700 p-[26px] sm:p-5">
                          <Heading as="h6" className="ml-1.5 text-center !text-[16.64px] md:ml-0">
                            16
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px]">
                            17
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px]">
                            18
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px]">
                            19
                          </Heading>
                          <Heading as="h6" className="mr-[5px] h-[22px] w-[22px] text-center !text-[16.64px] md:mr-0">
                            20
                          </Heading>
                        </div>
                        <div className="flex flex-1 flex-wrap justify-between gap-5 bg-white-A700 p-[26px] sm:p-5">
                          <Heading as="h6" className="ml-[7px] text-center !text-[16.64px] md:ml-0">
                            21
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px]">
                            22
                          </Heading>
                          <Heading as="h6" className="text-center !text-[16.64px]">
                            23
                          </Heading>
                          <Heading as="h6" className="h-[22px] w-[21px] text-center !text-[16.64px]">
                            24
                          </Heading>
                          <Heading
                            as="h6"
                            className="mr-1.5 text-center !text-[16.64px] !text-deep_orange-A200 md:mr-0"
                          >
                            25
                          </Heading>
                        </div>
                      </div>
                      <Button
                        size="2xl"
                        shape="round"
                        className="w-full !rounded-[9px] font-poppins font-medium sm:px-5"
                      >
                        DAY - 26
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[30px] rounded-[16px] border border-solid border-deep_orange-A200 p-[31px] sm:p-5">
                  <Heading size="2xl" as="h5" className="!font-bold !text-gray-500_04">
                    <span className="text-gray-500_04">How’s your energy&nbsp;</span>
                    <span className="text-blue_gray_900">After</span>
                    <span className="text-gray-500_04">&nbsp;the session?&nbsp;</span>
                  </Heading>
                  <Img
                    src="images/img_frame_4.png"
                    alt="image"
                    className="h-[97px] w-[80%] rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <Footer className="mt-[137px] flex items-start gap-[35px] self-stretch bg-blue_gray-100_87 p-[45px] md:flex-col md:p-5" />
      </div>
    </>
  );
}
