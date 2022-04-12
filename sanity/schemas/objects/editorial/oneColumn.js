export default {
    name: 'oneColumn',
    title: 'One Column',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
        {
            name: 'fullWidth',
            title: 'Full Width',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
          title: 'image.alt',
          media: 'image'
        },
      },
}