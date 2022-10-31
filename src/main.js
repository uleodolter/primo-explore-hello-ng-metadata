import {bundle,enableProdMode} from 'ng-metadata/core';
import {HelloNg1Module} from './hello/hello.module';

if (ENV === 'production') {
  enableProdMode();
}

angular.module('viewCustom', [HelloNg1Module]);
