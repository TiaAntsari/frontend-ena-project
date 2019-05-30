export default {
  items: [
        {
          title: true,
          name: 'Bienvenu',
          wrapper: {
            element: '',
            attributes: {}
          },
          class: ''
        }, {
          name: 'Acceuil',
          url: '/dashboard',
          icon: 'fa fa-home fa-lg mt-4', // icon: 'icon-speedometer'
        },

        // ** espace ecole **
        // ** utilisateur **
        {
          title: true,
          name: 'Espace Ecole',
          wrapper: {
            element: '',
            attributes: {}
          },
          class: ''
        }, {
          name: 'Utilisateur',
          url: '/users',
          icon: 'icon-user'
        },

            // ** tableau de bord **
            {
              name: 'tableau de bord',
              url: '/buttons',
              icon: 'icon-speedometer',
              children: [{
                  name: 'CP1',
                  url: '/buttons/buttons',
                  icon: 'fa fa-ravelry fa-lg mt-4',
                },
                {
                  name: 'CP2',
                  url: '/buttons/brand-buttons',
                  icon: 'fa fa-ravelry fa-lg mt-4',
                },
                {
                  name: 'Spécialité A',
                  url: '/buttons/button-groups',
                  icon: 'fa fa-ravelry fa-lg mt-4',
                },
                {
                  name: 'Spécialité B',
                  url: '/buttons/button-dropdowns',
                  icon: 'fa fa-ravelry fa-lg mt-4',
                },
                {
                  name: 'Spécialité C',
                  url: '/buttons/loading-buttons',
                  icon: 'fa fa-ravelry fa-lg mt-4',
                  badge: {
                    variant: 'danger',
                    text: 'PRO',
                  },
                },
              ],
            }
  ]
};
