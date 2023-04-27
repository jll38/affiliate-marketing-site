const blog = {
    name: 'blog',
    title: 'blog posts',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().max(50).warning('Shorter titles are usually better'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
            validation: Rule => Rule.required()
            
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'content',
            title: "Content",
            type: "array",
            of: [{ type: "block"}],
            validation: Rule => Rule.required(),
        }
    ]
};

export default blog

export const products = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: Rule => Rule.required().max(50).warning('Shorter titles are usually better'),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" },
        validation: Rule => Rule.required(),
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        validation: Rule => Rule.required(),
      },
      {
        name: "url",
        title: "URL",
        type: "url",
        validation: Rule => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
        validation: Rule => Rule.required(),
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
        validation: Rule => Rule.required()
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        validation: Rule => Rule.required()
      }
    ],
  };