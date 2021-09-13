# webflow-webpack

This is a basic setup with Webpack and Typescript that you can use for your Webflow website.

`jQuery` is already installed and declared as an external dependencie.

By default, Webpack bundle multiple files for better performances (one file by page to avoid heavy JS load on page that doesn't need it), but you can change this in the `webpack.config.js`.

I'm using `Netlify` to build and host my code because it's easy to use, free and have serverless functions out of the box. Feel free to use your favorite CDN.

## How to use with Webflow

If you are developing the site and coding at the same time, you can just add a script tag on pages that need your code

```html
<script src="http://localhost:9000/index.js"></script>
```

But if you only code and don't have access to the project you can use this code to check if there is a local dev server running on your machine and switch between production code hosted on `Netlify` or not. This code is not due to be used in production.

```html
<script>
  const LOCALHOST_URL = 'http://localhost:9000/index.js'
  const PROD_URL = 'https://YOUR_DOMAIN.netlify.app/index.js'

  const s = document.createElement('script')

  fetch(LOCALHOST_URL, {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(() => {
      s.src = LOCALHOST_URL
    })
    .catch((e) => {
      s.src = PROD_URL
      console.error(e)
    })
    .finally(() => {
      document.body.appendChild(s)
    })
</script>
```

For a production ready code, add a script tag with your produciton URL.

```html
<script src="https://YOUR_DOMAIN.netlify.app/index.js"></script>
```

## Building and running on localhost

This project is using `yarn`.

First install dependencies:

```sh
yarn
```

To launch a local dev server:

```sh
yarn dev
```

To create a production build:

```sh
yarn build
```
