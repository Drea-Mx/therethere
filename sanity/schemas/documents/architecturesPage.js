export default {
    //
    name: 'architecturesPage',
    title: 'Architectures Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'descriptionArchitectures',
            title: 'Description Architectures',
            type: 'text',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}