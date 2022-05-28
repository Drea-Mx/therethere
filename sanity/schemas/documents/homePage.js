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
            name: 'subTitle',
            title: ' Page Subtitle',
            type: 'string',
        },
        {
            name: 'descriptionHome',
            title: 'Description Window Home',
            type: 'blockModule',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}