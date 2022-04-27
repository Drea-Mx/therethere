export default {
    name: 'newObject',
    title: 'New',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },

        {
            name: 'url',
            title: 'Url',
            type: 'url'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'imageType'
        }
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'url',
          media: 'thumbnail',
        }
      }
}