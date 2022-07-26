import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';


export default {
    //
    name: 'counterNarrative',
    title: 'Counter Narratives',
    type: 'document',
    icon: () => `🌏`,
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'counterNarrative', hidden: true }),
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
            name: 'theTeam',
            title: 'The Team',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'vimeoId',
            title: 'Vimeo ID',
            type: 'string'
        },
        {
            title: 'Previus Project',
            name: 'prev',
            type: 'reference',
            to: [{type: 'counterNarrative'}]
        },
        {
            title: 'Next Project',
            name: 'next',
            type: 'reference',
            to: [{type: 'counterNarrative'}]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'projectDescription',
          media: 'thumbnail'
        }
      }
}