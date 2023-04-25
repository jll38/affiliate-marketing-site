import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
export const config = defineConfig({
    projectId: "o7n4curl",
    dataset: "production",
    title: "Home Sync Hub",
    apiVersion: "203-04-25",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})