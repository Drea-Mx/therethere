export default {
    name: 'twoColumn',
    title: 'Two Column',
    type: 'object',
    fields: [
        {
            name: 'image1',
            title: 'Image 1',
            type: 'imageType'
        },
        {
            name: 'image2',
            title: 'Image 2',
            type: 'imageType'
        },
    ],
    preview: {
        select: {
          title: 'image1.alt',
          media: 'image1'
        },
      },
}