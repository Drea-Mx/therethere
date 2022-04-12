export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    groups: [
        {
          name: 'footer',
          title: 'Footer',
        }
        
      ],
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'logoSansSerif',
            title: 'Logo Sans Serif',
            type: 'imageType'
        },
        {
            name: 'logoSerif',
            title: 'Logo Serif',
            type: 'imageType'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string'
        },
    ],
}