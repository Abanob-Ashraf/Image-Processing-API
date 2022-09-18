# Image Processing API

is a project i made mainly for my personal practice and for FWD Udacity Advanced Full-Stack Web Development

# Introduction to the project

It is an API that process on stored photos to rescale them.

# How to use

use the command 'npm install' to install the dependencies

### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- prettier: ```npm run prettier```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```
- Start as developer: ```npm run dev``` (run .ts files)

### Usage
The server will listen on port 3000:

#### Brief instructions
http://localhost:3000/

#### Endpoint to review image
http://localhost:3000/api/images

#### Endpoint to resize images
http://localhost:3000/api/resize

Expected query arguments are:
- _filename_: Available filenames are:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
- _width_: numerical pixel value > 0
- _height_: numerical pixel value > 0

#### Example 1
http://localhost:3000/api/images
Bad request, Please enter a valid URL containg the imagename

#### Example 2
http://localhost:3000/api/images?name
Enter the image name correct or this image doesn't exist

#### Example 3
http://localhost:3000/api/images?name=fjord
Will display the original fjord image.

#### Example 4
http://localhost:3000/api/resize
Bad request, Please enter a valid URL containg the imagename

#### Example 5
http://localhost:3000/api/resize?name=fjord&height=200&width=200
Will scale the fjord image to 200 by 200 pixels and store the resulting image.
On subsequent calls will serve the resized image instead of resizing the
original again.

#### Example 6
http://localhost:3000/api/resize?name=fjord&height=200
Please enter a valid URL containg the imagename, height and the width parameters.

#### Example 7
http://localhost:3000/api/resize?filename=fjord&width=200
Please enter a valid URL containg the imagename, height and the width parameters.

