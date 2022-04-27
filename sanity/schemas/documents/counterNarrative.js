export default {
    //
    name: 'counterNarrative',
    title: 'Counter Narratives',
    type: 'document',
    icon: () => `🌏`,
    groups: [
        {
          name: 'gridProject',
          title: 'Grid',
        },
      ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: 'columnsGrid',
            title: 'Columns',
            type: 'columns',
            group: 'gridProject',
        },
        {
            name: 'initialColumnField',
            title: 'Initial Column',
            type: 'initialcolumn',
            group: 'gridProject',
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
}