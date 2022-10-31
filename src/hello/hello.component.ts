import { Component, OnInit, Input, Inject } from 'ng-metadata/core';

@Component({
  selector: 'prmTopBarBefore',
  styles: [ require( './hello.scss' ) ],
  templateUrl: require('./hello.component.html')
})
export class HelloComponent implements OnInit {

    @Input('<') parentCtrl: any;

    constructor(
      @Inject( '$log' )
      private _$log: ng.ILogService,
      private vid: string
    ) {}
  
    ngOnInit() {
      const vm = this;
      vm.vid = vm.parentCtrl.configurationUtil.vid;
      vm._$log.log(`Hello ${vm.vid}`)
    }
}
