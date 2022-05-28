export default {
    name: 'meta',
    title: 'Meta',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      },
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
        },

    ],
    preview: {
        select: {
          title: 'label',
          subtitle: 'value',
        }
      }
}