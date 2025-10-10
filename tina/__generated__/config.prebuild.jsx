// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "./"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "./"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "hero",
        label: "Hero Section",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "hero"
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true
          },
          {
            type: "string",
            name: "subheading",
            label: "Subheading",
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        name: "about",
        label: "About Section",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "about"
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true
          },
          {
            type: "string",
            name: "text",
            label: "About Text",
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        name: "treats",
        label: "Cookie Treats",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "treats"
        },
        fields: [
          {
            type: "object",
            name: "cookies",
            label: "Cookies",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Cookie Name",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Image"
              }
            ]
          }
        ]
      },
      {
        name: "contact",
        label: "Contact Info",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "contact"
        },
        fields: [
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Location"
          }
        ]
      },
      {
        name: "comics",
        label: "Weekly Comics",
        path: "content/comics",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Comic Title",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Comic Image",
            required: true
          },
          {
            type: "string",
            name: "alt",
            label: "Alt Text (for accessibility)"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
