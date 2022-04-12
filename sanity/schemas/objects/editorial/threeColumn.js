export default {
    name: 'threeColumn',
    title: 'Three Column',
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
        {
            name: 'image3',
            title: 'Image 3',
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