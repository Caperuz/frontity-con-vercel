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
          // "api": "http://somositr.com/blog/wp-json" Esto genera el siguiente error: primera-app.module.21c76c0115299f639194.js:51 Mixed Content: The page at 'https://itrblog.hugoromero.com.ar/category/ciencia-y-tecnologia/' was loaded over HTTPS, but requested an insecure resource 'http://somositr.com/blog/wp-json/wp/v2/posts?_embed=true&categories=2&page=1'. This request has been blocked; the content must be served over HTTPS.
          "api": "https://somositr.com/blog/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
