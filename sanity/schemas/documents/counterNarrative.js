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
            name: 'theTeam',
            title: 'The Team',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'vimeoId',
            title: 'Vimeo ID',
            type: 'string'
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