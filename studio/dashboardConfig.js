export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602a5b559b021ba7b51e1aca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-syo947db',
                  apiId: '800b5472-3420-4f79-a77b-8d331a169be7'
                },
                {
                  buildHookId: '602a5b55f64991220e3a10b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9q4nbmeb',
                  apiId: 'cf6a2f08-2665-4cc3-94c9-cd5c544aea30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrgoogleknows/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9q4nbmeb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
