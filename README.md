# Redoc with multi api support

This docker image support redoc >2.0 with multi select apis.

Dockerhub: [Link to Dockerhub](https://hub.docker.com/r/volbrene/redoc)

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

## Environment variables

This image uses environment variables for configuration.

| Available variables | Default value                                                                                                                                   | Description                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `URLS`              | [{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop 2'}] | List of api swagger docs                                                                         |
| `THEME_COLOR`       | #32329f                                                                                                                                         | Primary Color                                                                                    |
| `PAGE_TITLE`        | Redoc                                                                                                                                           | Page Title of docs                                                                               |
| `BASE_NAME`         | '' -> (no prefix)                                                                                                                               | `basename` prop for the top-level [BrowserRouter](https://reactrouter.com/web/api/BrowserRouter) |

## You prefer swagger ui?

No Problem. Hier is the project for all, who loves swagger ui:

[Link to Dockerhub](https://hub.docker.com/r/volbrene/swagger-ui)

[Link to Github](https://hub.docker.com/r/volbrene/swagger-ui)
