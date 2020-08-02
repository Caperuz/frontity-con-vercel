const settings = {
  "name": "primera-app",
  "state": {
    "frontity": {
      "url": "https://itrblog.hugoromero.com.ar/",
      "title": "Blog",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Ciencia y tecnología",
              "/category/ciencia-y-tecnologia/"
            ],
            [
              "Regresar al sitio web",
              "https://somositr.com/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "api": "https://test.frontity.org/wp-json"
          "api": "http://somositr.com/blog/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
