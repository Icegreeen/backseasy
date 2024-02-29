import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "0": "100px",
      "1": "50px",
      "2": "36px",
      "3": "21px",
      "strong-body": "18px",
      body: "16px",
      sub: "12.8px",
      mono: "13px",
    },
    spacing: {
      256: "256px",
      200: "200px",
      128: "128px",
      110: "110px",
      96: "96px",
      86: "86px",
      72: "72px",
      64: "64px",
      56: "56px",
      48: "48px",
      36: "36px",
      32: "32px",
      30: "30px",
      28: "28px",
      24: "24px",
      18: "18px",
      16: "16px",
      12: "12px",
      8: "8px",
      6: "6px",
      4: "4px",
      0: "0px",
    },
    borderRadius: {
      24: "24px",
      32: "32px",
      out: "16px",
      in: "9px",
      full: "9999px",
    },
    fontFamily: {
      sans: ["Outfit"],
    },
    boxShadow: {
      fg: "0px -6px 24px -2px rgba(0, 0, 0, 0.14) inset, 0px 0px 56px 0px rgba(0, 0, 0, 0.08)",
    },
    extend: {
      backgroundImage: {
        "bg-1":
          "linear-gradient(180deg, rgba(15, 15, 15, 0.75), rgba(15, 15, 15, 0.9))",
        "fg-1":
          "linear-gradient(180deg, rgba(122, 122, 122, 0.13), rgba(122, 122, 122, 0.05))",
        "fg-1-focus":
          "linear-gradient(180deg, rgba(122, 122, 122, 0.27), rgba(122, 122, 122, 0.18))",
      },
      colors: {
        // ui styles
        "stroke-1": "rgb(255,255,255,0.09)",
        "stroke-2": "rgb(255,255,255,0.04)",
        "text-1": "#DEDEDE",
        "text-1-subtle": "rgba(222, 222, 222, 0.75)",
        "text-1-disabled": "rgba(255, 255, 255, 0.3)",
        // colours
        selected: "#0db7ff",
        "brand-blue": "#0db7ff",
        "brand-blue-2": "#007bff",
        "brand-purple": "#4e00ff",
        red: "#F5254A",
        yellow: "#EACA22",
        green: "#26D958",
        blue: "#072DF6",
        purple: "#BC4DFF",
      },
      backdropBlur: {
        main: "32px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#DEDEDE",
            a: {
              color: "#0db7ff",
              "&:hover": {
                color: "#0db7ff80",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
