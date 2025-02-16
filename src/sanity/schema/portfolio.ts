import { defineField, defineType } from "sanity";

const heroSection = [
  defineField({
    name: "heroHeadline",
    type: "string",
    group: "hero",
  }),
  defineField({
    name: "heroAbout",
    type: "array",
    of: [{ type: "block" }],
    group: "hero",
  }),
  defineField({
    name: "heroImage",
    type: "image",
    group: "hero",
  }),
];

const projectsSection = [
  defineField({
    name: "projectsSectionId",
    type: "string",
    group: "projects",
    enum: ["projects", "experience"],
  }),
  defineField({
    title: "Projects Section Title",
    name: "projectsSectionTitle",
    type: "string",
    group: "projects",
  }),
  defineField({
    name: "projects",
    type: "array",
    group: "projects",
    of: [
      {
        type: "object",
        fields: [
          defineField({
            name: "projectName",
            type: "string",
            required: true,
          }),
          defineField({
            name: "projectImage",
            type: "image",
            required: true,
          }),
          defineField({
            name: "shortDescription",
            type: "string",
            required: true,
          }),
          defineField({
            name: "description",
            type: "array",
            of: [{ type: "block" }],
            required: true,
          }),
          defineField({
            name: "callOutText",
            type: "string",
          }),
          defineField({
            name: "primaryButton",
            type: "object",
            fields: [
              defineField({ name: "text", type: "string" }),
              defineField({ name: "url", type: "url" }),
            ],
            required: true,
          }),
          defineField({
            name: "secondaryButton",
            type: "object",
            fields: [
              defineField({ name: "text", type: "string" }),
              defineField({ name: "url", type: "url" }),
            ],
          }),
        ],
      },
    ],
  }),
];

const experienceSection = [
  defineField({
    name: "experienceSectionId",
    type: "string",
    group: "experience",
    enum: ["projects", "experience"],
  }),
  defineField({
    title: "Experience Section Title",
    name: "experienceSectionTitle",
    type: "string",
    group: "experience",
  }),
  defineField({
    name: "experience",
    type: "array",
    group: "experience",
    of: [
      {
        type: "object",
        fields: [
          defineField({
            name: "companyName",
            type: "string",
            required: true,
          }),
          defineField({
            name: "companyLogo",
            type: "image",
            required: true,
          }),
          defineField({
            name: "jobNature",
            type: "string",
            required: true,
            enum: ["Full-time", "Part-time", "Internship"],
          }),
          defineField({
            name: "positions",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  defineField({
                    name: "position",
                    type: "string",
                    required: true,
                  }),
                  defineField({
                    name: "startDate",
                    type: "date",
                    required: true,
                  }),
                  defineField({
                    name: "isOngoing",
                    type: "boolean",
                    default: false,
                  }),
                  defineField({
                    name: "endDate",
                    type: "date",
                    hidden: (field) => field.parent?.isOngoing,
                  }),
                  defineField({
                    name: "description",
                    type: "array",
                    of: [{ type: "block" }],
                    required: true,
                  }),
                ],
              },
            ],
          }),
        ],
      },
    ],
  }),
];

export const Portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  groups: [
    {
      name: "hero",
      title: "Hero",
    },
    {
      name: "projects",
      title: "Projects",
    },
    {
      name: "experience",
      title: "Experience",
    },
  ],
  fields: [
    defineField({ name: "portolioOwner", type: "string", required: true }),
    defineField({
      name: "layout",
      type: "reference",
      to: [{ type: "layout" }],
    }),
    ...heroSection,
    ...projectsSection,
    ...experienceSection,
  ],
});
