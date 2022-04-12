export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'descriptionHome',
            title: 'Description Home',
            type: 'text',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}