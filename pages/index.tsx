import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "../components/layout";

const Timer = ({ type }: any) => {
  const [timer, setTimer] = useState({ days: 0, hr: 0, min: 0, sec: 0 });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const countDownDate = new Date("March 1, 2024 15:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimer({ days: days, hr: hours, min: minutes, sec: seconds });
      setIsLoading(false);
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, []);

  switch (type) {
    case "vertical":
      return (
        <div id="timer" className="mt-5">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl p-2 align-middle">
              <div className="flex">
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.days}</span>
                  <span className="text-xs text-blue-500">Days</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.hr}</span>
                  <span className="text-xs text-blue-500">Hrs</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.min}</span>
                  <span className="text-xs text-blue-500">mins</span>
                </span>
                <span className="mr-4 flex flex-col p-2">
                  <span>{timer.sec}</span>
                  <span className="text-xs text-blue-500">Sec</span>
                </span>
              </div>
              <a href="https://achuthhadnoor.gumroad.com/l/annotate">
                <button className="mt-2 w-full rounded-lg bg-orange-500 px-4 py-2 text-xs ring-purple-900 hover:ring-2 sm:text-sm">
                  Get It for{" "}
                  <span className="stroke-orange-600 text-purple-300 line-through">
                    $9
                  </span>{" "}
                  <span className="ring-1 ring-gray-900">$3</span>
                </button>
              </a>
            </div>
          )}
        </div>
      );
    case "horizontal":
      return (
        <div id="timer" className="mt-4">
          {!isLoading && (
            <div className="bg-skin-secondary inline-block justify-center rounded-xl align-middle">
              <div className="bg-skin-secondary mt-5 inline-block justify-center rounded-xl px-2 align-middle ring ring-blue-500">
                <div className="flex">
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.days}</span>
                    <span className="text-xs text-blue-300">Days</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.hr}</span>
                    <span className="text-xs text-blue-300">Hrs</span>
                  </span>
                  <span className="md:mr1 mr-2 flex flex-col p-2">
                    <span>{timer.min}</span>
                    <span className="text-xs text-blue-300">mins</span>
                  </span>
                  <span className="mr-4 flex flex-col p-2">
                    <span>{timer.sec}</span>
                    <span className="text-xs text-blue-300">Sec</span>
                  </span>
                  <a href="https://gum.co/annotate" target="_blank">
                    <button className="m-2 rounded-lg bg-blue-800 px-4 py-2 text-xs outline-none ring-blue-900 hover:bg-blue-600 hover:ring-2 sm:text-sm">
                      Get It for
                      <span className="stroke-blue-300 px-1 font-bold text-blue-300 line-through">
                        $25
                      </span>
                      <span className="text-blue-100">$9</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-4 p-2 align-middle">
                <span className="text-blue-300">Avalilable on</span>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.861 4.55483C13.3623 3.95654 13.71 3.13997 13.71 2.31531C13.71 2.20212 13.7019 2.08893 13.6776 2C12.8772 2.03234 11.907 2.5336 11.3249 3.21273C10.8722 3.73017 10.4517 4.55483 10.4517 5.37948C10.4517 5.50884 10.4679 5.63012 10.4841 5.67054C10.5326 5.67863 10.6134 5.6948 10.6943 5.6948C11.4219 5.6948 12.3274 5.2097 12.861 4.55483ZM13.4351 5.86458C12.2223 5.86458 11.2441 6.6003 10.6134 6.6003C9.9424 6.6003 9.06923 5.91309 8.01819 5.91309C6.02122 5.91309 4 7.56241 4 10.667C4 12.6074 4.74381 14.6529 5.67357 15.9707C6.46589 17.0864 7.16119 18 8.15563 18C9.15008 18 9.58666 17.3451 10.8075 17.3451C12.0606 17.3451 12.3355 17.9838 13.4351 17.9838C14.5184 17.9838 15.238 16.9894 15.9171 16.0111C16.6852 14.8873 17.0005 13.7959 17.0167 13.7393C16.952 13.7231 14.8742 12.8742 14.8742 10.5053C14.8742 8.45174 16.5073 7.53007 16.5963 7.4573C15.5291 5.91309 13.8878 5.86458 13.4351 5.86458Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.6607 8.98214V14.7946L0.571411 13.9554V8.98214H6.6607ZM6.6607 2.34821V8.23214H0.571411V3.1875L6.6607 2.34821ZM15.4286 8.98214V16L7.33034 14.8839V8.98214H15.4286ZM15.4286 1.14286V8.23214H7.33034V2.25893L15.4286 1.14286Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="16" height="16" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
};

const Home: NextPage = () => {
  // const [time, setTime] = useState("Wed 23 Feb 19:43");
  // useEffect(() => {

  // }, []);
  return (
    <>
      <header className="bg-gradient-to-b from-blue-500 to-black h-screen">
        <div className="hidden  sticky top-0 z-50  items-center justify-between align-middle bg-black/30 p-2 backdrop-blur-md md:flex">
          <div className="flex items-center gap-2 align-middle">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4702_351)">
                  <g>
                    <path
                      d="M12.861 2.55483C13.3623 1.95654 13.71 1.13997 13.71 0.31531C13.71 0.20212 13.7019 0.08893 13.6776 0C12.8772 0.03234 11.907 0.5336 11.3249 1.21273C10.8722 1.73017 10.4517 2.55483 10.4517 3.37948C10.4517 3.50884 10.4679 3.63012 10.4841 3.67054C10.5326 3.67863 10.6134 3.6948 10.6943 3.6948C11.4219 3.6948 12.3274 3.2097 12.861 2.55483ZM13.4351 3.86458C12.2223 3.86458 11.2441 4.6003 10.6134 4.6003C9.9424 4.6003 9.06923 3.91309 8.01819 3.91309C6.02122 3.91309 4 5.56241 4 8.667C4 10.6074 4.74381 12.6529 5.67357 13.9707C6.46589 15.0864 7.16119 16 8.15563 16C9.15008 16 9.58666 15.3451 10.8075 15.3451C12.0606 15.3451 12.3355 15.9838 13.4351 15.9838C14.5184 15.9838 15.238 14.9894 15.9171 14.0111C16.6852 12.8873 17.0005 11.7959 17.0167 11.7393C16.952 11.7231 14.8742 10.8742 14.8742 8.5053C14.8742 6.45174 16.5073 5.53007 16.5963 5.4573C15.5291 3.91309 13.8878 3.86458 13.4351 3.86458Z"
                      fill="white"
                      fill-opacity="0.9"
                    ></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_4702_351"
                    x="0"
                    y="-2"
                    width="21.0167"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4702_351"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4702_351"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <clipPath id="clip0_4702_351">
                    <rect width="22" height="22" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>Annotate</span>
          </div>
          <div className="flex align-middle">
            <span>
              <svg
                width="176"
                height="25"
                viewBox="0 0 176 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5933_325)">
                  <g filter="url(#filter0_d_5933_325)">
                    <path
                      d="M52.1562 19.9766H64.6328C65.2995 19.9766 65.9089 19.9219 66.4609 19.8125C67.013 19.7031 67.487 19.4505 67.8828 19.0547C68.2839 18.6536 68.5365 18.1797 68.6406 17.6328C68.7448 17.0859 68.7969 16.4766 68.7969 15.8047V13.1641C68.7969 12.4974 68.7448 11.8906 68.6406 11.3438C68.5365 10.7969 68.2839 10.3229 67.8828 9.92188C67.4818 9.52604 67.0052 9.27344 66.4531 9.16406C65.9062 9.05469 65.2995 9 64.6328 9H52.1406C51.4844 9 50.8802 9.05469 50.3281 9.16406C49.7812 9.27344 49.3073 9.52865 48.9062 9.92969C48.5104 10.3255 48.2578 10.7969 48.1484 11.3438C48.0443 11.8906 47.9922 12.4922 47.9922 13.1484V15.8047C47.9922 16.4766 48.0443 17.0859 48.1484 17.6328C48.2526 18.1797 48.5052 18.6536 48.9062 19.0547C49.3073 19.4505 49.7812 19.7031 50.3281 19.8125C50.8802 19.9219 51.4896 19.9766 52.1562 19.9766ZM51.9453 18.7188C51.5443 18.7188 51.1484 18.6797 50.7578 18.6016C50.3724 18.5234 50.0599 18.3672 49.8203 18.1328C49.5859 17.8984 49.4323 17.5885 49.3594 17.2031C49.2865 16.8177 49.25 16.4245 49.25 16.0234V12.9766C49.25 12.5651 49.2865 12.1667 49.3594 11.7812C49.4323 11.3906 49.5859 11.0755 49.8203 10.8359C50.0547 10.6016 50.3672 10.4479 50.7578 10.375C51.1536 10.2969 51.5573 10.2578 51.9687 10.2578H64.8438C65.2448 10.2578 65.638 10.2969 66.0234 10.375C66.4141 10.4479 66.7292 10.6042 66.9688 10.8438C67.2031 11.0781 67.3568 11.388 67.4297 11.7734C67.5026 12.1589 67.5391 12.5521 67.5391 12.9531V16.0234C67.5391 16.4245 67.5026 16.8177 67.4297 17.2031C67.3568 17.5885 67.2031 17.8984 66.9688 18.1328C66.7292 18.3724 66.4141 18.5312 66.0234 18.6094C65.638 18.6823 65.2448 18.7188 64.8438 18.7188H51.9453ZM69.8594 16.5078C70.0677 16.4922 70.2839 16.401 70.5078 16.2344C70.7318 16.0625 70.9219 15.8281 71.0781 15.5312C71.2344 15.2344 71.3125 14.8854 71.3125 14.4844C71.3125 14.0885 71.2344 13.7422 71.0781 13.4453C70.9219 13.1484 70.7318 12.9141 70.5078 12.7422C70.2839 12.5703 70.0677 12.4792 69.8594 12.4688V16.5078ZM51.6328 17.7266H65.1641C65.4349 17.7266 65.6536 17.7057 65.8203 17.6641C65.987 17.6224 66.1302 17.5443 66.25 17.4297C66.3646 17.3151 66.4427 17.1745 66.4844 17.0078C66.5312 16.8359 66.5547 16.6146 66.5547 16.3438V12.6328C66.5547 12.362 66.5312 12.1432 66.4844 11.9766C66.4427 11.8047 66.3646 11.6615 66.25 11.5469C66.1302 11.4271 65.987 11.349 65.8203 11.3125C65.6536 11.2708 65.4349 11.25 65.1641 11.25H51.6328C51.3568 11.25 51.1354 11.2708 50.9687 11.3125C50.8021 11.349 50.6615 11.4271 50.5469 11.5469C50.4323 11.6615 50.3516 11.8047 50.3047 11.9766C50.263 12.1432 50.2422 12.362 50.2422 12.6328V16.3438C50.2422 16.6146 50.263 16.8359 50.3047 17.0078C50.3516 17.1745 50.4323 17.3151 50.5469 17.4297C50.6667 17.5443 50.8073 17.6224 50.9687 17.6641C51.1354 17.7057 51.3568 17.7266 51.6328 17.7266Z"
                      fill="white"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#filter1_d_5933_325)">
                    <path
                      d="M90.3359 22.75H96.0078C96.6276 22.75 97.1901 22.6145 97.6953 22.3437C98.2005 22.0781 98.6016 21.7031 98.8984 21.2187C99.2005 20.7395 99.3516 20.1796 99.3516 19.539C99.3516 18.8984 99.2005 18.3385 98.8984 17.8593C98.6016 17.375 98.2005 17 97.6953 16.7343C97.1901 16.4635 96.6276 16.3281 96.0078 16.3281H90.3359C89.7161 16.3281 89.1536 16.4635 88.6484 16.7343C88.1432 17 87.7396 17.375 87.4375 17.8593C87.1406 18.3385 86.9922 18.8984 86.9922 19.539C86.9922 20.1796 87.1406 20.7395 87.4375 21.2187C87.7396 21.7031 88.1432 22.0781 88.6484 22.3437C89.1536 22.6145 89.7161 22.75 90.3359 22.75ZM96.2109 21.5703C95.8359 21.5651 95.4948 21.4713 95.1875 21.289C94.8802 21.1067 94.6354 20.8619 94.4531 20.5546C94.276 20.2474 94.1875 19.9062 94.1875 19.5312C94.1875 19.1614 94.276 18.8229 94.4531 18.5156C94.6354 18.2083 94.8802 17.9635 95.1875 17.7812C95.4948 17.5989 95.8359 17.5078 96.2109 17.5078C96.5859 17.5078 96.9271 17.5989 97.2344 17.7812C97.5469 17.9635 97.7943 18.2083 97.9766 18.5156C98.1589 18.8177 98.2474 19.1536 98.2422 19.5234C98.2422 19.8984 98.1484 20.2422 97.9609 20.5546C97.7786 20.8672 97.5339 21.1145 97.2266 21.2968C96.9245 21.4791 96.5859 21.5703 96.2109 21.5703ZM90.6562 15.125H95.6953C96.362 15.125 96.9714 14.9765 97.5234 14.6796C98.0807 14.3828 98.5234 13.9661 98.8516 13.4297C99.1849 12.8932 99.3516 12.2708 99.3516 11.5625C99.3516 10.8542 99.1849 10.2318 98.8516 9.69532C98.5234 9.15886 98.0807 8.74219 97.5234 8.44532C96.9714 8.14844 96.362 8 95.6953 8H90.6562C89.9844 8 89.3698 8.14844 88.8125 8.44532C88.2604 8.74219 87.8177 9.15886 87.4844 9.69532C87.1562 10.2318 86.9922 10.8542 86.9922 11.5625C86.9922 12.2708 87.1562 12.8932 87.4844 13.4297C87.8177 13.9661 88.2604 14.3828 88.8125 14.6796C89.3698 14.9765 89.9844 15.125 90.6562 15.125ZM90.6562 13.9453C90.2188 13.9453 89.8099 13.8464 89.4297 13.6484C89.0547 13.4453 88.75 13.1667 88.5156 12.8125C88.2865 12.4531 88.1719 12.0365 88.1719 11.5625C88.1719 11.0885 88.2865 10.6745 88.5156 10.3203C88.75 9.96094 89.0547 9.68229 89.4297 9.48438C89.8099 9.28125 90.2188 9.17969 90.6562 9.17969H95.6953C96.1276 9.17969 96.5312 9.28125 96.9062 9.48438C97.2865 9.68229 97.5911 9.96094 97.8203 10.3203C98.0547 10.6745 98.1719 11.0885 98.1719 11.5625C98.1719 12.0365 98.0547 12.4531 97.8203 12.8125C97.5911 13.1667 97.2865 13.4453 96.9062 13.6484C96.5312 13.8464 96.1276 13.9453 95.6953 13.9453H90.6562ZM90.6562 13.4141C91 13.4193 91.3099 13.3385 91.5859 13.1719C91.8672 13 92.0911 12.7734 92.2578 12.4922C92.4297 12.2057 92.5156 11.8906 92.5156 11.5469C92.5208 11.2031 92.4401 10.8932 92.2734 10.6172C92.1068 10.3359 91.8802 10.1146 91.5938 9.95313C91.3125 9.78646 91 9.70313 90.6562 9.70313C90.3125 9.70313 90 9.78646 89.7188 9.95313C89.4375 10.1198 89.2135 10.3438 89.0469 10.625C88.8854 10.9062 88.8047 11.2161 88.8047 11.5547C88.8047 11.8984 88.8854 12.2109 89.0469 12.4922C89.2135 12.7734 89.4375 12.9974 89.7188 13.1641C90 13.3307 90.3125 13.4141 90.6562 13.4141Z"
                      fill="white"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#filter2_d_5933_325)">
                    <path
                      d="M125.805 17.7187C126.45 17.7187 127.057 17.5963 127.625 17.3515C128.193 17.1068 128.693 16.7682 129.125 16.3359C129.557 15.8984 129.896 15.3958 130.141 14.8281C130.391 14.2604 130.516 13.6536 130.516 13.0078C130.516 12.362 130.391 11.7552 130.141 11.1875C129.896 10.6198 129.557 10.1198 129.125 9.6875C128.693 9.25521 128.193 8.91666 127.625 8.67187C127.057 8.42187 126.45 8.29687 125.805 8.29687C125.159 8.29687 124.552 8.42187 123.984 8.67187C123.417 8.91666 122.914 9.25521 122.477 9.6875C122.044 10.1198 121.706 10.6198 121.461 11.1875C121.216 11.7552 121.094 12.362 121.094 13.0078C121.094 13.6536 121.216 14.2604 121.461 14.8281C121.706 15.3958 122.044 15.8984 122.477 16.3359C122.914 16.7682 123.417 17.1068 123.984 17.3515C124.552 17.5963 125.159 17.7187 125.805 17.7187ZM125.805 19.0156C124.977 19.0156 124.2 18.8594 123.477 18.5469C122.753 18.2344 122.115 17.8021 121.562 17.25C121.01 16.6979 120.578 16.0599 120.266 15.3359C119.953 14.612 119.797 13.8359 119.797 13.0078C119.797 12.1797 119.953 11.4036 120.266 10.6797C120.578 9.95052 121.01 9.3125 121.562 8.76562C122.115 8.21354 122.753 7.78125 123.477 7.46875C124.206 7.15625 124.982 7 125.805 7C126.633 7 127.409 7.15625 128.133 7.46875C128.857 7.78125 129.495 8.21354 130.047 8.76562C130.599 9.31771 131.031 9.95573 131.344 10.6797C131.656 11.4036 131.812 12.1797 131.812 13.0078C131.812 13.8359 131.656 14.612 131.344 15.3359C131.031 16.0599 130.599 16.6979 130.047 17.25C129.495 17.8021 128.857 18.2344 128.133 18.5469C127.409 18.8594 126.633 19.0156 125.805 19.0156ZM133.641 21.8515C133.521 21.8515 133.406 21.8307 133.297 21.7891C133.187 21.7474 133.088 21.6823 133 21.5937L128.852 17.4453L130.133 16.2031L134.258 20.3359C134.346 20.4193 134.409 20.5156 134.445 20.625C134.487 20.7344 134.508 20.8463 134.508 20.9609C134.508 21.1276 134.469 21.276 134.391 21.4062C134.318 21.5417 134.216 21.6484 134.086 21.7265C133.956 21.8099 133.807 21.8515 133.641 21.8515Z"
                      fill="white"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#filter3_d_5933_325)">
                    <path
                      d="M161.648 21.4922C161.732 21.4922 161.815 21.4661 161.898 21.4141C161.987 21.362 162.104 21.2656 162.25 21.125L164.078 19.3672C164.141 19.3099 164.174 19.2448 164.18 19.1719C164.19 19.0938 164.169 19.0208 164.117 18.9531C163.872 18.6354 163.531 18.3594 163.094 18.125C162.661 17.8906 162.18 17.7734 161.648 17.7734C161.107 17.7734 160.615 17.8958 160.172 18.1406C159.734 18.3854 159.393 18.6719 159.148 19C159.112 19.0573 159.099 19.1198 159.109 19.1875C159.125 19.25 159.164 19.3099 159.227 19.3672L161.055 21.125C161.195 21.2656 161.31 21.362 161.398 21.4141C161.487 21.4661 161.57 21.4922 161.648 21.4922ZM157.258 17.3906C157.336 17.4688 157.422 17.5052 157.516 17.5C157.609 17.4948 157.695 17.4505 157.773 17.3672C158.221 16.862 158.792 16.4479 159.484 16.125C160.177 15.8021 160.898 15.6432 161.648 15.6484C162.409 15.6432 163.135 15.8073 163.828 16.1406C164.521 16.4688 165.096 16.8854 165.555 17.3906C165.628 17.4688 165.708 17.5078 165.797 17.5078C165.885 17.5026 165.966 17.4609 166.039 17.3828L167.203 16.2344C167.266 16.1719 167.299 16.1042 167.305 16.0312C167.31 15.9531 167.286 15.8802 167.234 15.8125C166.854 15.349 166.378 14.9349 165.805 14.5703C165.232 14.2005 164.591 13.9115 163.883 13.7031C163.174 13.4896 162.43 13.3828 161.648 13.3828C160.867 13.3828 160.122 13.4896 159.414 13.7031C158.711 13.9115 158.073 14.2005 157.5 14.5703C156.927 14.9349 156.451 15.349 156.07 15.8125C156.013 15.8802 155.987 15.9505 155.992 16.0234C155.997 16.0964 156.031 16.1667 156.094 16.2344L157.258 17.3906ZM154.133 14.2578C154.206 14.3359 154.289 14.375 154.383 14.375C154.482 14.3698 154.565 14.3281 154.633 14.25C155.56 13.2708 156.62 12.5287 157.812 12.0234C159.005 11.513 160.284 11.2578 161.648 11.2578C163.018 11.2578 164.299 11.513 165.492 12.0234C166.69 12.5339 167.75 13.2786 168.672 14.2578C168.74 14.3255 168.82 14.3594 168.914 14.3594C169.008 14.3594 169.089 14.3203 169.156 14.2422L170.188 13.2031C170.255 13.1406 170.289 13.0703 170.289 12.9922C170.294 12.9089 170.271 12.8359 170.219 12.7734C169.63 12.0495 168.888 11.4036 167.992 10.8359C167.096 10.263 166.104 9.8151 165.016 9.49219C163.932 9.16406 162.81 9 161.648 9C160.487 9 159.362 9.16406 158.273 9.49219C157.185 9.8151 156.193 10.263 155.297 10.8359C154.406 11.4036 153.667 12.0495 153.078 12.7734C153.026 12.8359 153 12.9089 153 12.9922C153.005 13.0703 153.039 13.1406 153.102 13.2031L154.133 14.2578Z"
                      fill="white"
                      fill-opacity="0.9"
                    />
                  </g>
                  <g filter="url(#filter4_i_5933_325)">
                    <path
                      d="M7 22L16.1659 8.81628C19.2345 4.55131 29.8733 7.60226 24.516 20.046L23.1341 20.4615L16.5 17.7692"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_5933_325"
                    x="43.9922"
                    y="7"
                    width="31.3203"
                    height="18.9766"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5933_325"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5933_325"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_5933_325"
                    x="82.9922"
                    y="6"
                    width="20.3594"
                    height="22.75"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5933_325"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5933_325"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_5933_325"
                    x="115.797"
                    y="5"
                    width="22.7109"
                    height="22.8516"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5933_325"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5933_325"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_5933_325"
                    x="149"
                    y="7"
                    width="25.2891"
                    height="20.4922"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5933_325"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5933_325"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_i_5933_325"
                    x="5.5"
                    y="5.50244"
                    width="21.9961"
                    height="21.9976"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_5933_325"
                    />
                  </filter>
                  <clipPath id="clip0_5933_325">
                    <rect width="176" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="px-2">Wed 23 March 19:43</span>
          </div>
        </div>
        <div className="container mx-auto py-16 px-4 sm:px-0 space-y-10">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a
                className="text-base text-white hover:text-blue-100 font-medium "
                href="/"
              >
                Home
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/download"
                className="text-base text-blue-300 hover:text-blue-100 font-medium"
              >
                Download
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                className="text-base text-blue-300 hover:text-blue-100 font-medium"
                href="/pricing"
              >
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                className="text-base text-blue-300 hover:text-blue-100 font-medium"
                href="/newsletter"
              >
                Newsletter
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="mailto:hey@achuth.dev"
                className="text-base text-blue-300 hover:text-blue-100 font-medium"
              >
                Support
              </a>
            </div>
          </nav>
          <div className="mt-12 flex flex-col items-center">
            <a href="/" className="transform scale-150">
              <svg
                width="147"
                height="112"
                viewBox="0 0 147 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5943_265)">
                  <g clip-path="url(#clip0_5943_265)">
                    <rect
                      x="34"
                      y="15"
                      width="70"
                      height="70"
                      rx="20"
                      fill="url(#paint0_linear_5943_265)"
                    />
                    <g filter="url(#filter1_di_5943_265)">
                      <path
                        d="M50.8164 65.3125L68.2945 38.2756C74.146 29.5291 94.4327 35.7859 84.217 61.3053L83 63.5755L68.9316 56.6361"
                        stroke="url(#paint1_linear_5943_265)"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        shape-rendering="crispEdges"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_5943_265"
                    x="-71"
                    y="-80"
                    width="280"
                    height="280"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="5"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_5943_265"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="50" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5943_265"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5943_265"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_di_5943_265"
                    x="-52.6836"
                    y="-68.9434"
                    width="243.223"
                    height="237.756"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="50" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5943_265"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5943_265"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_5943_265"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_5943_265"
                    x1="69"
                    y1="15"
                    x2="69"
                    y2="85"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5DB5FF" />
                    <stop offset="1" stop-color="#2B59FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5943_265"
                    x1="68.8304"
                    y1="32.5789"
                    x2="68.8304"
                    y2="67.9746"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.78" />
                  </linearGradient>
                  <clipPath id="clip0_5943_265">
                    <rect
                      x="34"
                      y="15"
                      width="70"
                      height="70"
                      rx="20"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <h1 className="text-4xl font-bold text-center mt-2">
              <svg
                width="158"
                height="30"
                viewBox="0 0 158 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.348 3.944L5.464 28.136V28.1C5.32 28.46 5.116 28.76 4.852 29C4.612 29.216 4.312 29.324 3.952 29.324C3.76 29.324 3.568 29.3 3.376 29.252C3.208 29.228 3.028 29.192 2.836 29.144H2.872C1.504 28.712 1 27.944 1.36 26.84L9.568 1.892C9.688 1.508 9.892 1.184 10.18 0.919999C10.492 0.655999 10.852 0.499999 11.26 0.451998C11.668 0.379998 12.064 0.331998 12.448 0.307998C12.832 0.259999 13.132 0.235999 13.348 0.235999C13.564 0.235999 13.864 0.259999 14.248 0.307998C14.632 0.331998 15.028 0.367998 15.436 0.415999C15.772 0.463998 16.096 0.643998 16.408 0.955998C16.744 1.268 16.996 1.58 17.164 1.892C18.508 6.02 19.864 10.184 21.232 14.384C22.624 18.56 23.992 22.712 25.336 26.84C25.672 27.944 25.168 28.712 23.824 29.144C23.632 29.192 23.452 29.228 23.284 29.252C23.14 29.3 22.972 29.324 22.78 29.324C22.444 29.324 22.132 29.216 21.844 29C21.58 28.76 21.388 28.46 21.268 28.1V28.136L13.348 3.944ZM16.048 20.36C16.048 21.128 15.772 21.788 15.22 22.34C14.692 22.868 14.044 23.132 13.276 23.132C12.508 23.132 11.86 22.868 11.332 22.34C10.804 21.788 10.54 21.128 10.54 20.36C10.54 19.592 10.804 18.944 11.332 18.416C11.86 17.864 12.508 17.588 13.276 17.588C14.044 17.588 14.692 17.864 15.22 18.416C15.772 18.944 16.048 19.592 16.048 20.36ZM32.1957 27.488C32.1957 28.64 31.5357 29.216 30.2157 29.216C28.8957 29.216 28.2357 28.64 28.2357 27.488V13.016C28.2357 12.032 28.3917 11.18 28.7037 10.46C29.0157 9.74 29.5077 9.152 30.1797 8.696C31.4517 7.784 32.7237 7.328 33.9957 7.328H39.7917C41.0157 7.328 42.2877 7.784 43.6077 8.696C44.9037 9.608 45.5517 11.048 45.5517 13.016V27.488C45.5517 28.64 44.8917 29.216 43.5717 29.216C42.2517 29.216 41.5917 28.64 41.5917 27.488V13.34C41.5917 12.716 41.3997 12.116 41.0157 11.54L41.0517 11.576C40.7397 11 40.1037 10.712 39.1437 10.712H34.6437C33.6597 10.712 33.0117 11 32.6997 11.576C32.3637 12.08 32.1957 12.668 32.1957 13.34V27.488ZM54.1683 27.488C54.1683 28.64 53.5083 29.216 52.1883 29.216C50.8683 29.216 50.2083 28.64 50.2083 27.488V13.016C50.2083 12.032 50.3643 11.18 50.6763 10.46C50.9883 9.74 51.4803 9.152 52.1523 8.696C53.4243 7.784 54.6963 7.328 55.9683 7.328H61.7643C62.9883 7.328 64.2603 7.784 65.5803 8.696C66.8763 9.608 67.5243 11.048 67.5243 13.016V27.488C67.5243 28.64 66.8643 29.216 65.5443 29.216C64.2243 29.216 63.5643 28.64 63.5643 27.488V13.34C63.5643 12.716 63.3723 12.116 62.9883 11.54L63.0243 11.576C62.7123 11 62.0763 10.712 61.1163 10.712H56.6163C55.6323 10.712 54.9843 11 54.6723 11.576C54.3363 12.08 54.1683 12.668 54.1683 13.34V27.488ZM83.701 7.328C84.325 7.328 84.961 7.46 85.609 7.724C86.281 7.988 86.929 8.324 87.553 8.732H87.517C88.141 9.188 88.621 9.788 88.957 10.532C89.293 11.252 89.461 12.092 89.461 13.052V23.276C89.461 25.244 88.813 26.696 87.517 27.632C86.245 28.544 84.973 29 83.701 29H77.941C77.317 29 76.681 28.892 76.033 28.676C75.385 28.46 74.749 28.112 74.125 27.632C72.829 26.72 72.181 25.268 72.181 23.276V13.052C72.181 12.092 72.349 11.252 72.685 10.532C73.021 9.788 73.501 9.188 74.125 8.732H74.089C74.689 8.324 75.325 7.988 75.997 7.724C76.669 7.46 77.317 7.328 77.941 7.328H83.701ZM83.053 25.616C83.941 25.616 84.565 25.364 84.925 24.86C85.309 24.356 85.501 23.816 85.501 23.24V13.088C85.501 12.488 85.309 11.948 84.925 11.468C84.565 10.964 83.941 10.712 83.053 10.712H78.589C77.701 10.712 77.065 10.964 76.681 11.468C76.321 11.948 76.141 12.488 76.141 13.088V23.24C76.141 23.816 76.321 24.356 76.681 24.86C77.065 25.364 77.701 25.616 78.589 25.616H83.053ZM98.729 10.712V23.816C98.729 24.44 98.861 24.92 99.125 25.256C99.389 25.592 99.953 25.76 100.817 25.76H101.753C102.689 25.76 103.133 26.312 103.085 27.416C103.085 28.544 102.641 29.108 101.753 29.108H100.565C99.797 29.108 99.077 29.012 98.405 28.82C97.733 28.604 97.085 28.304 96.461 27.92V27.956C95.285 27.188 94.697 25.82 94.697 23.852V10.712H93.293C92.429 10.712 91.973 10.148 91.925 9.02C91.925 7.892 92.381 7.328 93.293 7.328H94.697V3.476C94.697 2.324 95.381 1.748 96.749 1.748C98.069 1.748 98.729 2.324 98.729 3.476V7.328H101.717C102.653 7.328 103.097 7.892 103.049 9.02C103.049 10.148 102.605 10.712 101.717 10.712H98.729ZM111.648 29C110.904 29 110.196 28.904 109.524 28.712C108.852 28.496 108.204 28.196 107.58 27.812V27.848C106.404 27.104 105.816 25.736 105.816 23.744V21.98C105.816 20.996 105.984 20.144 106.32 19.424C106.68 18.68 107.172 18.092 107.796 17.66H107.76C108.36 17.252 108.996 16.952 109.668 16.76C110.34 16.544 110.988 16.436 111.612 16.436H119.568V13.088C119.568 12.488 119.376 11.948 118.992 11.468C118.632 10.964 118.008 10.712 117.12 10.712H112.908C111.996 10.712 111.36 10.94 111 11.396C110.664 11.828 110.496 12.344 110.496 12.944V13.232C110.496 14.48 109.824 15.104 108.48 15.104C107.136 15.104 106.464 14.48 106.464 13.232V12.908C106.464 11.924 106.632 11.096 106.968 10.424C107.328 9.752 107.808 9.188 108.408 8.732H108.372C108.996 8.324 109.644 7.988 110.316 7.724C111.012 7.46 111.672 7.328 112.296 7.328H117.768C118.368 7.328 119.004 7.46 119.676 7.724C120.372 7.988 121.02 8.324 121.62 8.732H121.584C122.208 9.188 122.688 9.788 123.024 10.532C123.36 11.252 123.528 12.092 123.528 13.052V27.488C123.528 28.64 122.868 29.216 121.548 29.216C121.284 29.216 121.032 29.204 120.792 29.18C120.576 29.156 120.372 29.096 120.18 29C120.012 28.88 119.868 28.724 119.748 28.532C119.652 28.316 119.604 28.04 119.604 27.704L119.568 19.82H112.296C111.768 19.82 111.36 19.88 111.072 20C110.784 20.12 110.556 20.312 110.388 20.576C110.196 20.984 110.052 21.308 109.956 21.548C109.884 21.764 109.848 22.016 109.848 22.304V23.708C109.848 24.332 110.028 24.812 110.388 25.148C110.772 25.46 111.42 25.616 112.332 25.616H116.364C117.252 25.616 117.696 26.18 117.696 27.308C117.696 27.788 117.588 28.196 117.372 28.532C117.156 28.844 116.82 29 116.364 29H111.648ZM132.901 10.712V23.816C132.901 24.44 133.033 24.92 133.297 25.256C133.561 25.592 134.125 25.76 134.989 25.76H135.925C136.861 25.76 137.305 26.312 137.257 27.416C137.257 28.544 136.813 29.108 135.925 29.108H134.737C133.969 29.108 133.249 29.012 132.577 28.82C131.905 28.604 131.257 28.304 130.633 27.92V27.956C129.457 27.188 128.869 25.82 128.869 23.852V10.712H127.465C126.601 10.712 126.145 10.148 126.097 9.02C126.097 7.892 126.553 7.328 127.465 7.328H128.869V3.476C128.869 2.324 129.553 1.748 130.921 1.748C132.241 1.748 132.901 2.324 132.901 3.476V7.328H135.889C136.825 7.328 137.269 7.892 137.221 9.02C137.221 10.148 136.777 10.712 135.889 10.712H132.901ZM144.344 23.24C144.344 23.816 144.524 24.356 144.884 24.86C145.268 25.364 145.904 25.616 146.792 25.616H151.292C152.18 25.616 152.804 25.4 153.164 24.968C153.548 24.512 153.74 23.996 153.74 23.42V23.024C153.74 21.896 154.4 21.332 155.72 21.332C157.04 21.332 157.7 21.896 157.7 23.024V23.456C157.7 24.464 157.532 25.292 157.196 25.94C156.884 26.588 156.404 27.152 155.756 27.632C154.484 28.544 153.212 29 151.94 29H145.892C144.62 29 143.384 28.544 142.184 27.632C141.608 27.152 141.164 26.552 140.852 25.832C140.54 25.088 140.384 24.236 140.384 23.276V13.016C140.384 11.072 140.984 9.632 142.184 8.696C142.784 8.264 143.396 7.928 144.02 7.688C144.668 7.424 145.292 7.292 145.892 7.292H151.94C152.516 7.292 153.152 7.412 153.848 7.652C154.544 7.868 155.192 8.168 155.792 8.552C156.368 8.96 156.824 9.524 157.16 10.244C157.52 10.964 157.7 11.816 157.7 12.8V17.66C157.7 18.212 157.532 18.704 157.196 19.136C156.884 19.568 156.296 19.784 155.432 19.784H147.656C146.792 19.784 146.336 19.22 146.288 18.092C146.288 16.964 146.744 16.4 147.656 16.4H153.776L153.74 13.052C153.74 12.452 153.548 11.912 153.164 11.432C152.804 10.928 152.18 10.676 151.292 10.676H146.792C145.904 10.676 145.268 10.928 144.884 11.432C144.524 11.912 144.344 12.452 144.344 13.052V23.24Z"
                  fill="white"
                />
              </svg>
            </h1>
          </div>
          <h2 className="text-2xl font-medium text-center mt-1">
            Enable visual mode for your Screen.{" "}
            <span className="relative">
              without stress.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 14"
                className="absolute -bottom-4 left-0 w-full"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%"></stop>
                    <stop offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 5 C 50 2, 80 2, 100 4"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3px"
                  vector-effect="non-scaling-stroke"
                  stroke="url(#gradient)"
                ></path>
              </svg>
            </span>
          </h2>
          <div className="mt-8 flex justify-center space-x-3 mx-auto">
            {/* <div className="inline-flex">
              <a
                href="/download"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="8 12 12 16 16 12"></polyline>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                </svg>
                <span>Try for free</span>
              </a>
            </div> */}
            {/* <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                href="/pricing"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Buy now</span>
              </a>
            </div> */}
            <Timer type="horizontal" />
          </div>
        </div>
        <div className="relative mb-60 bottom-10">
          <svg
            className="relative  w-full  scale-90"
            width="774"
            height="50"
            viewBox="0 0 774 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_bi_5933_276)">
              <rect
                width="774"
                height="50"
                rx="10"
                fill="#272727"
                fill-opacity="0.6"
              />
              <circle cx="25" cy="25" r="8.5" fill="#D479FF" stroke="#575757" />
              <circle cx="67" cy="25" r="8.5" fill="#62FFA1" stroke="#575757" />
              <circle
                cx="109"
                cy="25"
                r="8.5"
                fill="#FFAE64"
                stroke="#575757"
              />
              <rect
                x="142"
                y="17"
                width="3"
                height="16"
                rx="1.5"
                fill="#575D96"
              />
              <rect
                x="580"
                y="17"
                width="3"
                height="16"
                rx="1.5"
                fill="#575D96"
              />
              <rect
                x="391"
                y="17"
                width="3"
                height="16"
                rx="1.5"
                fill="#575D96"
              />
              <path
                d="M697 20H698.778H713"
                stroke="#C7C7C7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M712 20.1211V32.2C712 32.6774 711.789 33.1352 711.414 33.4728C711.039 33.8104 710.53 34 710 34H700C699.47 34 698.961 33.8104 698.586 33.4728C698.211 33.1352 698 32.6774 698 32.2V19.9235M701 19.6V17.8C701 17.3226 701.211 16.8648 701.586 16.5272C701.961 16.1896 702.47 16 703 16H707C707.53 16 708.039 16.1896 708.414 16.5272C708.789 16.8648 709 17.3226 709 17.8V19.6"
                stroke="#C7C7C7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="418"
                y="23"
                width="98"
                height="3"
                rx="1.5"
                fill="#D9D9D9"
              />
              <circle cx="428" cy="25" r="5" fill="#D9D9D9" />
              <rect
                x="540.5"
                y="17.5"
                width="15"
                height="15"
                rx="1.5"
                stroke="white"
              />
              <path
                d="M544 25.375L547.368 28L552 22"
                stroke="white"
                stroke-linecap="round"
              />
              <g clip-path="url(#clip0_5933_276)">
                <path
                  d="M614 28L607 21.5L614 15"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M627 35V26.7273C627 25.4735 626.473 24.2711 625.536 23.3846C624.598 22.4981 623.326 22 622 22H607"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g clip-path="url(#clip1_5933_276)">
                <path
                  d="M664 28L671 21.5L664 15"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M651 35V26.7273C651 25.4735 651.527 24.2711 652.464 23.3846C653.402 22.4981 654.674 22 656 22H671"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <rect
                x="744"
                y="17.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="744"
                y="22.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="744"
                y="27.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="750.25"
                y="17.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="750.25"
                y="22.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <rect
                x="750.25"
                y="27.625"
                width="3.75"
                height="3.75"
                rx="1.875"
                fill="#6F6F6F"
              />
              <g clip-path="url(#clip2_5933_276)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M180.518 26.587L188.846 17.5489C188.897 17.495 188.938 17.4313 188.964 17.3615C188.991 17.2917 189.003 17.2173 189 17.1428C188.996 17.0682 188.978 16.9951 188.946 16.9277C188.914 16.8604 188.868 16.8002 188.812 16.7509L187.215 15.1535C187.111 15.055 186.974 15 186.832 15C186.689 15 186.552 15.055 186.449 15.1535L177.398 23.471C177.345 23.5227 177.302 23.5846 177.272 23.6532C177.243 23.7218 177.228 23.7955 177.228 23.87C177.228 23.9446 177.243 24.0183 177.272 24.0869C177.302 24.1555 177.345 24.2174 177.398 24.2691L179.719 26.587C179.771 26.6408 179.833 26.6835 179.901 26.7128C179.97 26.742 180.044 26.757 180.119 26.757C180.193 26.757 180.267 26.742 180.336 26.7128C180.404 26.6835 180.466 26.6408 180.518 26.587ZM175.755 25.3561L178.653 28.2605C178.835 28.4269 178.956 28.6494 178.998 28.8925V29.4361C179 30.0206 178.886 30.5997 178.663 31.1401C178.44 31.6805 178.112 32.1717 177.699 32.5853C176.833 33.42 175.802 34.0645 174.672 34.477C173.542 34.8896 172.337 35.0612 171.137 34.9807C170.422 34.9839 169.727 34.7499 169.161 34.3154C169.071 34.2246 169.015 34.1054 169.002 33.9781C168.99 33.8507 169.023 33.7231 169.094 33.617C169.765 32.5346 170.109 31.2815 170.083 30.0087C170.043 29.3327 170.14 28.6555 170.368 28.018C170.597 27.3805 170.953 26.7959 171.414 26.2994C172.247 25.4679 173.377 25.0013 174.556 25.0021C174.737 24.9907 174.919 24.9907 175.1 25.0021C175.35 25.0484 175.579 25.1723 175.755 25.3561Z"
                  fill="#C7C7C7"
                />
              </g>
              <g clip-path="url(#clip3_5933_276)">
                <line
                  x1="215.379"
                  y1="34.8104"
                  x2="234.318"
                  y2="15.8711"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <g clip-path="url(#clip4_5933_276)">
                <rect
                  x="261.75"
                  y="15.75"
                  width="18.5"
                  height="18.5"
                  rx="1.25"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                />
              </g>
              <g clip-path="url(#clip5_5933_276)">
                <circle
                  cx="317"
                  cy="25"
                  r="9.25"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                />
              </g>
              <g clip-path="url(#clip6_5933_276)">
                <rect
                  x="353.75"
                  y="15.75"
                  width="18.5"
                  height="18.5"
                  rx="1.25"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  strokeDasharray="2 2"
                />
                <path
                  d="M364 26L367 29"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M359 21L362.333 29L363.516 25.5162L367 24.3329L359 21Z"
                  stroke="#C7C7C7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_bi_5933_276"
                x="-20"
                y="-20"
                width="814"
                height="90"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_5933_276"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_5933_276"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_5933_276"
                />
              </filter>
              <clipPath id="clip0_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(607 15)"
                />
              </clipPath>
              <clipPath id="clip1_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(651 15)"
                />
              </clipPath>
              <clipPath id="clip2_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(169 15)"
                />
              </clipPath>
              <clipPath id="clip3_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(215 15)"
                />
              </clipPath>
              <clipPath id="clip4_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(261 15)"
                />
              </clipPath>
              <clipPath id="clip5_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(307 15)"
                />
              </clipPath>
              <clipPath id="clip6_5933_276">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(353 15)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </header>
    </>
  );
};

// 7787817287;

export default Home;
