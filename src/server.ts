import 'zone.js/dist/zone-node';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist-server/main.bundle');

import { renderModuleFactory } from '@angular/platform-server';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { ngExpressEngine } from '@nguniversal/express-engine';

import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';

const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.resolve(__dirname, '../dist/index.html');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.use(express.static(distPath, {
  index: false
}));

const routes = [
  '/',
  '/lazy'
];

routes.forEach(route => {
  app.get(route, async (request, response) => {
    response.render(indexPath, {
      req: request,
      res: response
    });
  });
});

app.listen(4000, () => {
  console.log('Visit the page http://localhost:4000/');
});
