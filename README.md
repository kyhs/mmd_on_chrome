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

1. Prepare `jquery-x.x.x.min.js` and locate it at `chrome/js`/

1. Write `var server_ip` in `chrome/js/script.js` as the IP address of the server which runs the Docker container your deployed as the above

1. Import `chrome/` directory to the Chrome as an Extension

## Licence