export default {
    name: 'award',
    title: 'Award',
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
          subtitle: 'subtitle',
        }
      }
}