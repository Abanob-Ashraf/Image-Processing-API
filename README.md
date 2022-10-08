# Image Processing API

## Overview

The project goal is to simulate a real-world scenario in which you would read and write to the disk using an express server. The project serves two purposes: the project is implemented to be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library (sharp) to serve properly scaled versions of our images to the frontend to reduce page load size.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 3. Build

`npm run build`

This command will build the typeScript code into JavaScript and save them in the `./build` folder.

### 4. Start the Server

`npm run start`

This command will start the server running on port `3000`.

### `/`

Method: `get`

    For example: `http://localhost:port:3000`

## Testing, prettier and Linting

Here, you can use test cases to test the project and also check that the code respects all the eslint rules and prettier to have a well formatted code.

### 1. Linting

`npm run lint`

### 2. prettiering

`npm run prettier`

### 3. Testing

`npm run test`

## Brief instructions

### `http://localhost:3000/`

## Endpoint

### `/images?name=<image_name>`

Method: `get`
Query Param: `name` - the specific image you are requesting.

    For example: `localhost:3000/images?name=fjord`

### `/resize?name=<image_name>&height=<height>&width=<width>`

Method: `get`
Query Param: `name` - the specific image you are requesting, `height` and `width` - the height or width of the image in pixels

    For example: `http://localhost:3000/resize?name=fjord&height=200&width=200`

#### Available Image options

1. `encenadaport`
2. `fjord`
3. `icelandwaterfall`
4. `palmtunnel`
5. `santamonica`

### Functionality

- User can query endpoint using various queries to retrieve an image with a specified height and width.
- All images requested will be saved to disk.
- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.
