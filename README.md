# Project Name

> Project description

## Related Projects

  - https://github.com/Big-Tunas/Bluefin-Proxy
  - https://github.com/Big-Tunas/Bluefin-Service


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

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

Note to self:
- currently, routes from proxy server to component servers require the following to properly render elements:
  - make sure DBs (both mongo and MySQL) are seeded
  - routes from component files to component server must use absolute paths (i.e., http://localhost:(component_port)/(route))
  - component REST API must have relative routes and allow CORS (use res.set('access-control-allow-origin', '*'))