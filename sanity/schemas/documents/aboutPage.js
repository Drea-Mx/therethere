export default {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'descriptionAbout',
            title: 'Description About',
            type: 'blockModule',
        },
        {
            name: 'titleFounding',
            title: 'Founding Title',
            type: 'string',
        },
        {
            name: 'descriptionFounding',
            title: 'Description Founding',
            type: 'blockModule',
        },
        {
            name: 'titleAllies',
            title: 'Allies Title',
            type: 'string',
        },
        {
            name: 'descriptionAllies',
            title: 'Description Allies',
            type: 'blockModule',
        },
        {
            name: 'awardsTitle',
            title: 'Awards Title',
            type: 'string',
        },
        {
            name: 'awards',
            title: 'Awards',
            type: 'array',
            of: [
                {
                    type: 'award'
                }
            ]
        },
        {
            name: 'newsTitle',
            title: 'News Title',
            type: 'string',
        },
        {
            name: 'new',
            title: 'News',
            type: 'array',
            of: [
                {
                    type: 'newAbout'
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        },
    ],
}