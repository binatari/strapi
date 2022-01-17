module.exports = ({env}) => ({

    comments: {
        // my-plugin is going to be the internal name used for this plugin
        enabled: true,
        config: {
          // user plugin config goes here
          enableUsers: true,
        badWords: false,
        relatedContentTypes: {
          article: {
            uuid: 'application::article.article',
            contentManager: true,
            __contentType: '',
            key: 'title',
            value: 'id',
          }
        }
        },
      },

      upload: {
          enabled: true,
          config:{
              provider:'cloudinary',
              providerOptions:{
                  cloud_name: env('CLOUDINARY_NAME'),
                  api_key: env('CLOUDINARY_API_KEY'),
                  api_secret: env('CLOUDINARY_API_SECRET'),
              }
          }
      }
})