import localFont from "next/font/local";

export const neueHaasGrotesk = localFont({
  src: [
    {
      path: "/ttf/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/ttf/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/ttf/NeueHaasDisplayRomanItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
