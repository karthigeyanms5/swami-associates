import localFont from "next/font/local";

export const minionSerif = localFont({
  src: [
    {
      path: "./MinionPro-Regular.otf",
      style: "normal",
    },
    {
      path: "./MinionPro-MediumIt.otf",
      style: "italic",
    },
  ],
  variable: "--font-minion",
});

export const bahnschrift = localFont({
  src: "./bahnschrift.ttf",
  variable: "--font-bahnschrift",
});
