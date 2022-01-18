module.exports = ({env}) => ({

    comments: {
        config: {
          // user plugin config goes here
        badWords: false,
        moderatorRoles: ["Public"],
        entryLabel: {
            '*':['Title', 'title', 'Name', 'name', 'Subject', 'subject'],
            'api::article.article': ['MyField'],
        },
        /*relatedContentTypes: {
          article: {
            uuid: 'application::article.article',
            contentManager: true,
            __contentType: '',
            key: 'title',
            value: 'id',
          }
        }*/
        },
      },

      upload: {
          config:{
              provider:'cloudinary',
              providerOptions:{
                  cloud_name: env('CLOUDINARY_NAME'),
                  api_key: env('CLOUDINARY_API_KEY'),
                  api_secret: env('CLOUDINARY_API_SECRET'),
              }
          },
      },
})