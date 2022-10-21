# ReDoc with multi API support
[![Docker Pulls](https://img.shields.io/docker/pulls/volbrene/redoc.svg)](https://hub.docker.com/r/volbrene/redoc/) [![Docker Stars](https://img.shields.io/docker/stars/volbrene/redoc.svg)](https://hub.docker.com/r/volbrene/redoc/) [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/volbrene/redoc/blob/master/LICENSE)

This Docker image supports ReDoc >2.0 with multi select APIs.

Dockerhub: [Link to Dockerhub](https://hub.docker.com/r/volbrene/redoc)

# Demo

![](demo.gif)

# How to use with external urls?

```console
docker run -d \
    -p 8080:80 \
    -e URLS="[{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'Instagram'}]" \
     volbrene/redoc
```

That's it.

# How to use with local files?

```console
docker run -d \
    -p 8080:80 \
    -v $(pwd)/swagger-files:/var/www/html/static/swagger-files \
    -e URLS="[{url: '/static/swagger-files/petstore.json', name: 'Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'Instagram'}]" \
     volbrene/redoc
```

That's it.

# Decouple the api's name from the url path

The url pointing to a specific api uses the ```name``` value by default. In case you want to decouple the url path from the display name use the ```displayName``` attribute.

```console
docker run -d \
    -p 8080:80 \
    -e URLS="[{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'petshop', displayName: '(public) Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'instagram', displayName: '(internal) Instagram'}]" \
     volbrene/redoc
```

That's it.

## Environment variables

This image uses environment variables for configuration.

| Available variables | Default value                                                                                                                                   | Description                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `URLS`              | [{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop 2'}] | List of api swagger docs                                                                         |
| `THEME_COLOR`       | #32329f                                                                                                                                         | Primary Color                                                                                    |
| `PAGE_TITLE`        | Redoc                                                                                                                                           | Page Title of docs                                                                               |
| `BASE_NAME`         | '' -> (no prefix)                                                                                                                               | `basename` prop for the top-level [BrowserRouter](https://reactrouter.com/web/api/BrowserRouter) |

## You prefer Swagger UI?

No Problem. Hier is the project for all, who loves swagger ui:

[Link to Docker Hub](https://hub.docker.com/r/volbrene/swagger-ui)

[Link to GitHub](https://github.com/volbrene/swagger-ui)
