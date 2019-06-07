export default {
  items: [
    {
      name: "Accueil",
      url: "/dashboard",
      icon: "fa fa-home fa-lg mt-2" // icon: 'icon-speedometer'
    },

// ** ################ espace ecole ################## **

      // Debut** SCOLARITE **

     {
       title: true,
       name: "Espace Scolarité",
       wrapper: {
         element: "",
         attributes: {}
       },
       class: ""
     },
    {
       name: "Gestion Etudiant",
       url: "/etudiant",
       icon: "fa fa-address-book fa-lg mt-2",
       children: [{
           name: "Inscription",
           url: "/etudiant/inscription",
           icon: "fa fa-pencil-square-o fa-lg mt-2"
         },
         {
           name: "Réinscription",
           url: "/etudiant/reinscription",
           icon: "fa fa-pencil-square-o fa-lg mt-2"
         },
         /* Debut
         
         #### CONDITION D ACTIVATION D ELEMENT APRES APPUI SUR L UN DES DEUX BOUTTON "note" ou "abscence" ###

          Si 
            User connecté : scolarité || admin
            toutes les filières s'affiche et toutes actions sont activées
          Si
            User connecté : enseignant
            toutes les filières dont il enseigne s'affiche et tous les actions sont activées
          Sinon
            toutes les filières s'affiche et toutes actions sont déactivées

            Fin
         */
         {
           name: "Notes",
           url: "/etudiant/notes",
           icon: "fa fa-flag-o fa-lg mt-2"
         },
         {
           name: "Abscence",
           url: "/etudiant/abscence",
           icon: "fa fa-check-square-o fa-lg mt-2"
         }
       ]
     },

     {
      name: "Niveaux Scolaires",
      url: "/niveau",
      icon: "fa fa-external-link-square fa-lg mt-2",
      children: [{
          name: "1ère Année",
          url: "/niveau/premiere",
          icon: "fa fa-paper-plane-o fa-lg mt-2"
        },
        {
          name: "2ème Année",
          url: "/niveau/deuxieme",
          icon: "fa fa-paper-plane-o fa-lg mt-2"
        },
        {
          name: "3ème Année",
          url: "/niveau/troixieme",
          icon: "fa fa-paper-plane-o fa-lg mt-2"
        },
        {
          name: "4ème Année",
          url: "/niveau/quatrieme",
          icon: "fa fa-paper-plane-o fa-lg mt-2"
        },
        {
          name: "5ème Année",
          url: "/niveau/cinquieme",
          icon: "fa fa-paper-plane-o fa-lg mt-2"
        }
      ]
    },

     {
       name: "Export Documents",
       url: "/document",
       icon: "fa fa-archive fa-lg mt-2"
     },


      // Fin** SCOLARITE **


      // Debut** DIRECTION **

    {
      title: true,
      name: "Espace Direction",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Gestion d'etude",
      url: "/etude",
      icon: "fa fa-graduation-cap fa-lg mt-2",
      children: [{
          name: "Filière",
          url: "/etude/filiere",
          icon: "fa fa-pencil-square-o fa-lg mt-2"
        },
        {
          name: "Module",
          url: "/etude/module",
          icon: "fa fa-clone fa-lg mt-2"
        },
        {
          name: "Matière",
          url: "/etude/matiere",
          icon: "fa fa-clone fa-lg mt-2"
        },
        {
          name: "Emploi du Temps",
          url: "/etude/emploi",
          icon: "fa fa-clock-o fa-lg mt-2"
        },
         {
           name: "Salle",
           url: "/etude/salle",
           icon: "fa fa-ravelry fa-lg mt-2"
         },
        {
          name: "Examen",
          url: "/etude/examen",
          icon: "fa fa-bolt fa-lg mt-2"
        }
      ]
    },
    
    {
      name: "Ressource Humaine",
      url: "/rh",
      icon: "fa fa-group fa-lg mt-2",
      children: [{
          name: "Enseignants",
          url: "/rh/enseignants",
          icon: "fa fa-user-o fa-lg mt-2"
        },
        {
          name: "Personnels",
          url: "/rh/personnel",
          icon: "fa fa-address-book-o fa-lg mt-2"
        },
        {
          name: "Utilisateurs",
          url: "/rh/utilisateurs",
          icon: "fa fa-user-circle fa-lg mt-42"
        }
      ]
    },

    {
      name: "Messageries",
      url: "/messagerie",
      icon: "fa fa-envelope fa-lg mt-2"
    },

    {
      name: "Logigramme",
      url: "/logigramme",
      icon: "fa fa-area-chart fa-lg mt-2"
    },

    {
      name: "Gestion d'archive",
      url: "/archive",
      icon: "fa fa-archive fa-lg mt-2"
    },


      // Fin** DIRECTION **

          // Debut** BIBLIOTHEQUE **
    {
      title: true,
      name: "Espace Bibliothèque",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Livres",
      url: "/livres",
      icon: "fa fa-briefcase fa-lg mt-2",
      children: [{
          name: "Prêter",
          url: "/livre/preter",
          icon: "fa fa-pencil-square-o fa-lg mt-2"
        },
        {
          name: "Listes",
          url: "/livres/listes",
          icon: "fa fa-ravelry fa-lg mt-2"
        },
        {
          name: "Categories",
          url: "/livres/categories",
          icon: "fa fa-ravelry fa-lg mt-2"
        }
      ]
    },

    {
      name: "Listes Prêteurs",
      url: "/preteurs",
      icon: "fa fa-id-card fa-lg mt-2"
    },

    {
      name: "Configurations",
      url: "/configurations",
      icon: "fa fa-cog fa-lg mt-2"
    },

          // Fin** BIBLIOTHEQUE **
    ,
          // Debut** ADMIN SYSTEME **
    {
      title: true,
      name: "Espace Admin System",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    /* a propos du : 
      logo
      couleur them
      données statique de l'école (nom, année scolaire actuelle, debut du session, address, contact, ... )
    */
    {
      name: "Parametres Général",
      url: "/parametre",
      icon: "fa fa-gears fa-lg mt-2" // pour la rotation "fa-spin"
    },
    /*
    Action: activé ou bloqué
    Supprimer, editer
    ##### création SUPER ADMIN
    */
    {
      name: "Utilisateurs",
      url: "/utilisateur",
      icon: "fa fa-group fa-lg mt-2"
    },
    {
      name: "Année Scolaire",
      url: "/annee",
      icon: "fa fa-building-o fa-lg mt-2"
    },
    
    {
      name: "Templates",
      url: "/templates",
      icon: "fa fa-briefcase fa-lg mt-2",
      children: [{
          name: "Page", // entête et pied de page des docs de l'ecole
          url: "/templates/page",
          icon: "fa fa-pencil-square-o fa-lg mt-2"
        },
        {
          name: "Email\/SMS",
          url: "/templates/email",
          icon: "fa fa-envelope-o fa-lg mt-2"
        }
      ]
    },

    {
      name: "Roles & Permission",
      url: "/roles",  // roles/permission/{id} => assigné des permissions a un role
      icon: "fa fa-tags fa-lg mt-2"
    },


          // Fin** ADMIN SYSTEME **


  

          // Debut** PERSONNEL **

    {
      title: true,
      name: "Espace Perssonnel",
      wrapper: {
        element: "",
        attributes: {}
      },
      class: ""
    },
    {
      name: "Profil",
      url: "/profil",
      icon: "fa fa-user fa-lg mt-2"
    },
    {
      name: "Aides",
      url: "/aides",
      icon: "fa fa-question-circle fa-lg mt-2"
    },
    {
      name: "Deconnexion",
      url: "/deconnexion",
      icon: "fa fa-sign-out fa-lg mt-2"
    },

          // Fin** PERSONNEL **


  // ###############################################################################  
  ]
};
