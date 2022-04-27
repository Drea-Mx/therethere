export default {
    //
    name: 'counterNarrativesPage',
    title: 'Counter Narratives Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'descriptionCounterNarratives',
            title: 'Description Counter Narratives ',
            type: 'text',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
}