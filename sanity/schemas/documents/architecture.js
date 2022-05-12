export default {
    //
    name: 'architecture',
    title: 'Architectures',
    type: 'document',
    icon: () => `🌇`,
    groups: [
        {
          name: 'gridProject',
          title: 'Grid',
        },
      ],
    fields: [
        {
            name: 'title',
            title: 'Architecture Title',
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
            name: 'gridMarginTop',
            title: 'Grid Margin Top',
            type: 'boolean',
            group: 'gridProject',
        },
        {
            name: 'meta',
            title: 'Meta',
            type: 'meta'
        },
        {
            name: 'info',
            title: 'Info',
            type: 'array',
            of: [
                {
                    type: 'infoModule'
                }
            ]
        },
        {
            name: 'editorialModule',
            title: 'Modules',
            type: 'editorial',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}