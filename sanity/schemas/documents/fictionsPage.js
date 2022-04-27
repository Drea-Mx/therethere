export default {
    //
    name: 'fictionsPage',
    title: 'Fictions Page',
    type: 'document',
    icon: () => `🎭`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'descriptionFictions',
            title: 'Description Fictions',
            type: 'text',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}