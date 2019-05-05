# mmd_on_chrome

## Description

Make MMD model stand on the browser as a Chrome extension.

## Usage

### Server side

1. Prepare MMD model and locate at `server/model/`

1. Edit model's filename (`var modelFile` in `server/index.html`) 

1. Donwload Three.js and locate it as `server/three.js-master`

1. Deploy as Docker container
    ```bash
    $ cd server
    $ docker build .
    $ docker run -d -p 80:80 {CONTAINER ID}
    ```

### Client(Chrome Browser) side

## Licence
