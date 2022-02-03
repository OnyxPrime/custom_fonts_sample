# Embedded Fonts Sample
This sample demonstrates how to utilize a custom font in your site without referencing an external source, like Google Fonts.

## Demo app
This demo app was created to use only those modules available within `Node.js`.

If you change the font file, you will need to update 2 files:
- [app.js](app.js) -- Update the `fontPath` variable to reflect the new font filename.
- [index.css](index.css) -- Update the `@font-face.src` `url` to reflect the new font filename.

## Run demo
To run this demo, you will need to 
- have `Node.js` version 10 installed.
- clone this repository.
- open a terminal and switch to the directory where the repository was cloned.
- run `node app.js`
