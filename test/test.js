const buildQueryString = require('../index.js').buildQueryString
var expect = require('chai').expect

/**
 * An example unit test
 */
describe('buildQueryString', () => {
  it('should return expected query string from queryParams Object', () => {
    const queryParams = {
      include: ['tags', 'image'],
      sort: {
        sortByTitleDesc: {
          path: 'title',
          direction: 'DESC'
        }
      },
      fields: {
        recipes: ['title', 'createdAt', 'tags', 'image'],
        tags:['name', 'weight']
      },
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: "Main course"
          },
        },
        notAnonymous: {
          condition: {
            path: 'uid',
            value: 0,
            operator: '<>'
          }
        },
        // "shorthand" notation
        'isPublished': {value: 1},
      },
      page: {
        offset: 0,
        limit: 4
      }
    }
    console.log(buildQueryString(queryParams))
    expect(buildQueryString(queryParams)).equal("include=tags,image&sort[sortByTitleDesc][path]=title&sort[sortByTitleDesc][direction]=DESC&fields[recipes]=title,createdAt,tags,image&fields[tags]=name,weight&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Main%20course&filter[notAnonymous][condition][path]=uid&filter[notAnonymous][condition][value]=0&filter[notAnonymous][condition][operator]=%3C%3E&filter[isPublished][value]=1&page[offset]=0&page[limit]=4")
  })
})
