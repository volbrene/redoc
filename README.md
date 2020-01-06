Redoc with multi api support
===

This docker image support redoc >2.0 with multi select apis.

Demo: [Link to demo](https://demo.redoc.volbrene.de)
Dockerhub: [Link to Dockerhub](https://hub.docker.com/r/volbrene/redoc)

# How to use?

```console
docker run -d \
    -p 8080:80 \
    -e URLS="[{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'Instagram'}]" \
     volbrene/redoc
```

That's it.


## Environment variables

This image uses environment variables for configuration.

| Available variables | Default value                                                                                                                                   | Description              |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| `URLS`              | [{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop 2'}] | List of api swagger docs |
| `THEME_COLOR`       | #32329f                                                                                                                                         | Primary Color            |
| `PAGE_TITLE`        | Redoc                                                                                                                                           | Page Title of docs       |

