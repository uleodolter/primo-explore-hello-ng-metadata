import {bundle,enableProdMode} from 'ng-metadata/core';
import {HelloModule} from './hello/hello.module';

if (ENV === 'production') {
  enableProdMode();
}

// create ng1 module using a fixed name
const Ng1HelloModule: string = bundle(HelloModule, [], global.angular.module('helloModule', [])).name;

// create primo customView
global.angular.module('viewCustom', [Ng1HelloModule]);
