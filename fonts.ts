import localFont from "@next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "public/fonts/gilroy-regular/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "public/fonts/gilroy-bold/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "public/fonts/gilroy-black/Gilroy-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default gilroy;
