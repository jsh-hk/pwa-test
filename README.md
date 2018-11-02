# Vue PWA testing

Playing around with Vue.js PWA support.  Lifted/bootstrapped from https://www.blog.plint-sites.nl/progressive-web-app-using-vue-cli-3/

See it running here: https://jsh-hk-pwa-test.netlify.com/

## Project setup
```
npm install
```

## For basic tinkering (non-service worker stuff)

```
npm run serve
```

To test the service worker we have to build for production.  A minimalistic web server is included in the dev dependencies to make this easier

```
npm run build
./node_modules/.bin/serve -s dist
```
