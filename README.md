# Drupal 8 JSON API query string builder

Create a Drupal 8 JSON API query string from a nested object.

This make it easier to request a Drupal 8 JSON-API site with [JSON API module](https://www.drupal.org/project/jsonapi)

You may be interested to use it in combination with [jsonapi-parse](https://www.npmjs.com/package/jsonapi-parse) to format json responses
in a more intuitive way

## USAGE

To create the following query string :

```
sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&fields[recipes]=title&include=tags,image&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Main%20course&page[offset]=0&page[limit]=4
```

write: 

```javascript
const buildQueryString = require('d8-jsonapi-querystring').buildQueryString

buildQueryString({
  sort: {
    sortCreated: {
      path: 'created',
      direction: 'DESC'
    }
  },
  fields: {
    recipes: ['title']
  },
  include: ['tags', 'image'],
  filter: {
    categoryName: {
      condition: {
        path: 'category.name',
        value: "Main course"
      }
    },
  },
  page: {
    offset: 0,
    limit: 4
  }
})
```
