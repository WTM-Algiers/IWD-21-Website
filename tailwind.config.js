module.exports = {
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
      large: "12px",
    },
    fontFamily: {
      sans: ["Cairo", '"Open Sans"', "Roboto", "sans-serif"],
    },
    textIndent: {
      // defaults to {}
      1: "0.25rem",
      2: "0.5rem",
    },
    textShadow: {
      // defaults to {}
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    textDecorationStyle: {
      // defaults to these values
      solid: "solid",
      double: "double",
      dotted: "dotted",
      dashed: "dashed",
      wavy: "wavy",
    },
    textDecorationColor: {
      // defaults to theme => theme('colors')
      red: "#f00",
      green: "#0f0",
      blue: "#00f",
    },
    fontVariantCaps: {
      // defaults to these values
      normal: "normal",
      small: "small-caps",
      "all-small": "all-small-caps",
      petite: "petite-caps",
      unicase: "unicase",
      titling: "titling-caps",
    },
    fontVariantNumeric: {
      // defaults to these values
      normal: "normal",
      ordinal: "ordinal",
      "slashed-zero": "slashed-zero",
      lining: "lining-nums",
      oldstyle: "oldstyle-nums",
      proportional: "proportional-nums",
      tabular: "tabular-nums",
      "diagonal-fractions": "diagonal-fractions",
      "stacked-fractions": "stacked-fractions",
    },
    fontVariantLigatures: {
      // defaults to these values
      normal: "normal",
      none: "none",
      common: "common-ligatures",
      "no-common": "no-common-ligatures",
      discretionary: "discretionary-ligatures",
      "no-discretionary": "no-discretionary-ligatures",
      historical: "historical-ligatures",
      "no-historical": "no-historical-ligatures",
      contextual: "contextual",
      "no-contextual": "no-contextual",
    },
    textRendering: {
      // defaults to these values
      "rendering-auto": "auto",
      "optimize-legibility": "optimizeLegibility",
      "optimize-speed": "optimizeSpeed",
      "geometric-precision": "geometricPrecision",
    },
    textStyles: (theme) => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.tight"),
      },
      h1: {
        extends: "heading", // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme("fontSize.5xl"),
        "@screen sm": {
          fontSize: theme("fontSize.6xl"),
        },
      },
      h2: {
        extends: "heading",
        fontSize: theme("fontSize.4xl"),
        "@screen sm": {
          fontSize: theme("fontSize.5xl"),
        },
      },
      h3: {
        extends: "heading",
        fontSize: theme("fontSize.4xl"),
      },
      h4: {
        extends: "heading",
        fontSize: theme("fontSize.3xl"),
      },
      h5: {
        extends: "heading",
        fontSize: theme("fontSize.2xl"),
      },
      h6: {
        extends: "heading",
        fontSize: theme("fontSize.xl"),
      },
      link: {
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.blue.400"),
        "&:hover": {
          color: theme("colors.blue.600"),
          textDecoration: "underline",
        },
      },
      richText: {
        fontWeight: theme("fontWeight.normal"),
        fontSize: theme("fontSize.base"),
        lineHeight: theme("lineHeight.relaxed"),
        "> * + *": {
          marginTop: "1em",
        },
        h1: {
          extends: "h1",
        },
        h2: {
          extends: "h2",
        },
        h3: {
          extends: "h3",
        },
        h4: {
          extends: "h4",
        },
        h5: {
          extends: "h5",
        },
        h6: {
          extends: "h6",
        },
        ul: {
          listStyleType: "disc",
        },
        ol: {
          listStyleType: "decimal",
        },
        a: {
          extends: "link",
        },
        "b, strong": {
          fontWeight: theme("fontWeight.bold"),
        },
        "i, em": {
          fontStyle: "italic",
        },
      },
    }),
    // extend: {
    //   colors : {
    //     "dark-blue": "#191C48"
    //   }
    // }
  },
  variants: {
    // all the following default to ['responsive']
    textIndent: ["responsive"],
    textShadow: ["responsive"],
    textDecorationStyle: ["responsive"],
    textDecorationColor: ["responsive"],
    ellipsis: ["responsive"],
    hyphens: ["responsive"],
    kerning: ["responsive"],
    textUnset: ["responsive"],
    fontVariantCaps: ["responsive"],
    fontVariantNumeric: ["responsive"],
    fontVariantLigatures: ["responsive"],
    textRendering: ["responsive"],
  },
  plugins: [
    require("tailwindcss-typography")({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: "c-", // the prefix to use for text style classes
    }),
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: false,
}
