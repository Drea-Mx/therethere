export default {
    //
    name: 'fiction',
    title: 'Fictions',
    type: 'document',
    icon: () => `🎭`,
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
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}