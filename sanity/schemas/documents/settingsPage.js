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
            name: 'headerTitle1',
            title: 'Header Title 1',
            type: 'string',
        },
        {
            name: 'headerTitle2',
            title: 'Header Title 2',
            type: 'string',
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'imageType'
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