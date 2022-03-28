export default {
  projections: {
    BlogPostE: {
      text: {
        __caption__: 'Text'
      },
      date: {
        __caption__: 'Date'
      },
      postStatus: {
        __caption__: 'Post status'
      },
      postAuthor: {
        __caption__: 'Post author',
        name: {
          __caption__: 'Name'
        }
      },
      postTag: {
        __caption__: 'Post tag',
        order: {
          __caption__: 'Order'
        },
        tagType: {
          __caption__: 'Tag type',
          name: {
            __caption__: 'Name'
          }
        }
      }
    },
    BlogPostL: {
      text: {
        __caption__: 'Text'
      },
      date: {
        __caption__: 'Date'
      },
      postStatus: {
        __caption__: 'Post status'
      },
      postAuthor: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      }
    }
  },
  validations: {
    text: {
      __caption__: 'Text'
    },
    date: {
      __caption__: 'Date'
    },
    postStatus: {
      __caption__: 'Post status'
    },
    postAuthor: {
      __caption__: 'Post author'
    },
    postTag: {
      __caption__: 'Post tag'
    }
  }
};
