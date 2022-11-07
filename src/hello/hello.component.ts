import { Component, OnInit, Input, Inject } from 'ng-metadata/core';

@Component({
  selector: 'prmTopBarBefore',
  styles: [ require( './hello.scss' ) ],
  templateUrl: require('./hello.component.html')
})
export class HelloComponent implements OnInit {

    @Input('<') parentCtrl: any;

    constructor(
      @Inject( '$log' ) private $log: ng.ILogService,
    ) {}
  
    private vid: string = 'default';

    ngOnInit() {
      const vm = this;
      vm.vid = vm.parentCtrl.configurationUtil.vid;
      vm.$log.log(`Hello ${vm.vid}`)
    }
}
