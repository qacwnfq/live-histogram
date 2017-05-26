/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 */
import { create } from 'laxar';
import artifacts from 'laxar-loader/artifacts?flow=main&theme=default';
var vueAdapter = require( 'laxar-vue-adapter' );

const config = {
   name: 'webfitter',
   router: {
      query: {
         enabled: true
      },
      navigo: {
         useHash: true
      }
   },
   logging: {
      threshold: 'TRACE'
   },
   theme: 'default',
   tooling: {
      enabled: true
   }
};

create( [ vueAdapter ], artifacts, config )
// Uncomment to use the LaxarJS developer tools (https://chrome.google.com/webstore/search/LaxarJS):
   .tooling( require( 'laxar-loader/debug-info?flow=main&theme=default' ) )
   .flow( 'main', document.querySelector( '[data-ax-page]' ) )
   .bootstrap();
