export default {
    name: 'infoModule',
    title: 'Info Module',
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'value',
            title: 'Value',
            type: 'string'
        }
    ],
    preview: {
        select: {
          title: 'label',
          subtitle: 'value'
        },
      },
}