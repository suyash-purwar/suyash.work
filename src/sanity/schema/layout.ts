import { defineField, defineType } from "sanity";

const URL_REGEX_STRING = new RegExp(
  "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
);

export const Layout = defineType({
  name: "layout",
  title: "Layout",
  type: "document",
  fields: [
    defineField({ name: "layoutFor", type: "string", required: true }),
    defineField({ name: "portfolioLogo", type: "image", required: true }),
    defineField({
      name: "portfolioNavigationLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text", type: "string", required: true }),
            defineField({
              name: "url",
              type: "string",
              required: true,
              validation: (rule) =>
                rule.custom(
                  (url) => URL_REGEX_STRING.test(url) || url.startsWith("#")
                ),
            }),
            defineField({ name: "isPrimary", type: "boolean", default: false }),
            defineField({
              name: "openInNewTab",
              type: "boolean",
              default: false,
              readOnly: (rule) => rule.parent?.url?.startsWith("#"),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "footerText",
      type: "array",
      of: [{ type: "block" }],
      required: true,
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text", type: "string" }),
            defineField({
              name: "url",
              type: "url",
              required: true,
              validation: (rule) =>
                rule.uri({ scheme: ["http", "https", "mailto"] }),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "easterEggText",
      type: "string",
    }),
  ],
});
