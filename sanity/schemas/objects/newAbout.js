export default {
    name: 'newAbout',
    title: 'New',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url'
        }
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'url',
        }
      }
}