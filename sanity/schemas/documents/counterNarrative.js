export default {
    //
    name: 'counterNarrative',
    title: 'Counter Narratives',
    type: 'document',
    icon: () => `🌏`,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
          },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'imageType',
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'blockModule',
        },
        {
            name: 'metaInfo',
            title: 'Meta Info',
            type: 'string'
        },
        {
            name: 'video',
            title: 'Video Code',
            type: 'text'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'projectDescription',
          media: 'thumbnail'
        }
      }
}