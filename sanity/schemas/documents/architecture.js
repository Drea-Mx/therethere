import {
    orderRankField,
    orderRankOrdering,
  } from '@sanity/orderable-document-list';

  
export default {
    //
    name: 'architecture',
    title: 'Architectures',
    type: 'document',
    icon: () => `🌇`,
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: 'architecture', hidden: true }),
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
            name: 'thumbnailMetadescription',
            title: 'Thumbnail Metadescription',
            type: 'string',
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'blockModule',
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
            name: 'sliderImages',
            title: 'Slider Images Movil',
            type: 'array',
            options: {
                layout: 'grid',
              },
            of: [
                {
                    type: 'imageType'
                }
            ]
        },
        {
            name: 'locationMovil',
            title: 'Location Movil',
            type: 'string'
        },
        {
            name: 'yearMovil',
            title: 'Year Movil',
            type: 'string'
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