import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';


export default {
    //
    name: 'fiction',
    title: 'Fictions',
    type: 'document',
    icon: () => `🎭`,
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'fiction', hidden: true }),
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
            name: 'credits',
            title: 'Credits',
            type: 'text'
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'blockModule',
        },
        {
            title: 'Previus Project',
            name: 'prev',
            type: 'reference',
            to: [{type: 'fiction'}]
        },
        {
            title: 'Next Project',
            name: 'next',
            type: 'reference',
            to: [{type: 'fiction'}]
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