# Dragon-Scaling

> Backend for review module in reserving places to stay.

## Related Projects

  - https://github.com/Dragon-Scaling/Reservation_service
  - https://github.com/Dragon-Scaling/photo_gallery_service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> CRUD

- app.post('/rooms/:id', controller.create)
- app.get('/rooms/:id', controller.getAll)
- app.get('/reviews/:id', controller.getOne)
- app.put('/reviews/:id', controller.update)
- app.delete('/reviews/:id', controller.remove)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

