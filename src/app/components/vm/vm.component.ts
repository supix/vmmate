import { Component, Input } from '@angular/core';
import { Vm } from '../../classes/vm';
import { DatePipe } from '@angular/common';
import { CountdownPipe } from '../../pipes/countdown.pipe';

@Component({
  selector: 'app-vm',
  imports: [ DatePipe, CountdownPipe ],
  templateUrl: './vm.component.html',
  styleUrl: './vm.component.css'
})
export class VmComponent {
  @Input() vm!: Vm;

  public removeSchedule(vm: Vm): void {
    vm.schedule = undefined;
  }

  public shutdown(vm: Vm): void {
    vm.poweredOn = false;
    vm.powerOffTime = undefined;
  }

  public start(vm: Vm): void {
    vm.poweredOn = true;
    let powerOffTime = new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * 7);
    vm.powerOffTime = powerOffTime;
  }
}
