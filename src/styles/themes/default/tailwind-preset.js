const just = require("./src/index");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../ui-react/src/**/*.{js,jsx}"],
  theme: {
    colors: {
      // Display background / Primary button background
      coral: "#f36768",

      // Small coral text / Links / Secondary button text
      "coral-dark": "#d73c3c",

      "coral-64": "rgba(243, 103, 104, 0.64)",

      "coral-12": "rgba(243, 103, 104, 0.12)",

      // Invalid / Warning
      tangerine: "#ff9c53",

      "tangerine-20": "rgba(255, 156, 83, 0.2)",

      lemon: "#ffe063",

      "lemon-12": "rgba(255, 224, 99, 0.12)",

      // Valid / Success
      seafoam: "#2fcfa0",

      "seafoam-12": "rgba(47, 207, 160, 0.12)",

      // Focus / Active
      skyan: "#21c7eb",

      "skyan-50": "rgba(33, 199, 235, 0.5)",

      lavendar: "#c489dc",

      "black-light": "#f2f2f2",

      "black-mid": "#b5b8ba",

      // Primary text
      "just-black": "#373433",

      // Secondary text
      "just-black-64": "rgba(55,52,51,0.64)",

      // Disabled text / Placeholder text
      "just-black-32": "rgba(55,52,51,0.32)",

      // Borders
      "just-black-20": "rgba(55,52,51,0.20)",

      // Keylines / Shadows/ Tonal overlay
      "just-black-12": "rgba(55,52,51,0.12)",
      "just-black-6": "rgba(55,52,51,0.06)",

      // Surface
      white: "#fff",
      "white-64": "rgba(255,255,255,0.64)",
      "white-32": "rgba(255,255,255,0.32)",
      "white-20": "rgba(255,255,255,0.20)",
      "white-12": "rgba(255,255,255,0.12)",

      transparent: "transparent",
    },
    screens: {
      // sm is the default as we're going responsive first
      // using ems because of:
      // https://css-tricks.com/zooming-squishes/
      // and
      // https://zellwk.com/blog/media-query-units/
      // sm: "0px",
      md: "40em",
      lg: "64em",
      xl: "80em",
    },

    fontFamily: {
      "just-script": ["JustScript"],
      "just-sans": ["JustSans"],
      mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
    },

    fontSize: {
      xs: ".75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "2.5rem", // 40px
      "4xl": "3rem", // 48px
    },

    fontWeight: {
      normal: "normal",
      bold: "bold",
    },
    lineHeight: {
      none: 1,
      tight: 1.142857143,
      snug: 1.333333333,
      close: 1.4,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.714285714,
    },
    textColor: (theme) => theme("colors"),
    backgroundColor: (theme) => theme("colors"),
    borderColor: (theme) => ({
      default: theme("colors.black-light"),
      ...theme("colors"),
    }),
    spacing: {
      px: "1px",
      grid: "0.625rem",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      24: "6rem",
      30: "7.5rem",
    },
    opacity: {
      0: "0",
      12: ".12",
      20: ".20",
      32: ".32",
      64: ".64",
      100: "1",
    },
    extend: {
      maxWidth: {
        grid: "80rem",
      },
      outline: {
        default: "5px auto -webkit-focus-ring-color",
      },
      boxShadow: {
        md: `0 0 8px 0 rgba(55,52,51,0.32)`,
        "md-right": `8px 0px 4px -4px rgba(55,52,51,0.32)`,
        "md-left": `-8px 0px 4px -4px rgba(55,52,51,0.32)`,
        "md-active": `0 0 8px 0 rgba(55,52,51,0.64)`,
        "md-active-inset": `inset 0 0 8px 0 rgba(55,52,51,0.64)`,
        lg: `0 0 16px 0 rgba(55,52,51,0.32)`,
        "lg-active": `0 0 16px 0 rgba(55,52,51,0.64)`,
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [just()],
};
