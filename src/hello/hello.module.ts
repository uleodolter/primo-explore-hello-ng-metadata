import {bundle,NgModule} from 'ng-metadata/core';
import {HelloComponent} from './hello.component';

@NgModule({
  declarations: [HelloComponent]
})
class HelloModule {}

export const HelloNg1Module: string = bundle(HelloModule, []).name;
