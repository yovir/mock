{
  "Post": {
    "_": {
      "items": 10
    },
    "cover": {
      "regexp": "https://picsum\\.photos/seed/[0-9]{5}/1920/270"
    },
    "title": {
      "loremWords": {
        "minLength": 5,
        "maxLength": 20
      }
    },
    "body": {
      "loremParagraphs": {
        "minLength": 10,
        "maxLength": 100
      }
    },
    "category": {
      "string": ["one", "two", "three"]
    },
    "isDraft": {
      "boolean": {}
    },
    "views": {
      "int": {
        "min": 0,
        "max": 1000
      }
    },
    "createdAt": {
      "dateTime": {
        "min": "2010-01-01T00:00:00Z",
        "max": "2020-12-31T23:59:59Z"
      }
    },
    "comments": {
      "hasMany": "Comment"
    }
  },
  "Comment": {
    "_": {
      "items": 25
    },
    "email": {
      "regexp": "[a-z]{5,10}@[a-z]{5}\\.[a-z]{2,3}"
    },
    "body": {
      "loremParagraphs": {
        "minLength": 10,
        "maxLength": 100
      }
    },
    "createdAt": {
      "dateTime": {
        "min": "2010-01-01T00:00:00Z",
        "max": "2020-12-31T23:59:59Z"
      }
    },
    "post": {
      "belongsTo": "Post"
    }
  }
}
