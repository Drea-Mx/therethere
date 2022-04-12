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
            name: 'locationLabel',
            title: 'Location Label',
            type: 'string'
        },
        {
            name: 'locationValue',
            title: 'Location Value',
            type: 'string'
        },
        {
            name: 'yearLabel',
            title: 'Year Label',
            type: 'string'
        },
        {
            name: 'yearValue',
            title: 'Year Value',
            type: 'string'
        },

    ]
}