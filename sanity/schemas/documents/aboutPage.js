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
            name: 'awardsText',
            title: 'Awards Text',
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
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        },
        {
            name: 'newsText',
            title: 'News Text',
            type: 'string'
        },
        {
            name: 'news',
            title: 'News',
            type: 'array',
            of: [
                {
                    type: 'newObject'
                }
            ]
        },
    ],
}