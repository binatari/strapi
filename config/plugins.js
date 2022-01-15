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
})