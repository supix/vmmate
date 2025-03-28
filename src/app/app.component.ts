import { Component } from '@angular/core';
import { NgbModal, NgbDate, NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { VmComponent } from './components/vm/vm.component';
import { Schedule, Vm } from './classes/vm';

@Component({
  selector: 'app-root',
  imports: [NgbModule, VmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vmmate';
  vms!: Vm[];
  activeTab = 1;

  constructor(private modalService: NgbModal) {
    this.vms = [
      new Vm('sefalr29', 'svil', 'abaco', true, this.getShutdownDate(), undefined),
      new Vm('sefals80', 'coll', 'abaco', true, this.getShutdownDate(), undefined),
      new Vm('sefals81', 'coll', 'abaco', false, undefined, undefined),
      new Vm('sefals82', 'coll', 'abaco', false, undefined, undefined),
      new Vm('sefalt58', 'svil', 'abaco', true, this.getShutdownDate(), undefined),
      new Vm('sefalt59', 'svil', 'abaco', false, undefined, this.getSchedule()),
      new Vm('sflnx000461', 'svil', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('sflnx000462', 'coll', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('wefalf58', 'coll', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('wefalf59', 'coll', 'abaco', true, this.getShutdownDate(), undefined),
      new Vm('wefalf60', 'coll', 'siope_plus', false, undefined, this.getSchedule()),
      new Vm('wefalf61', 'coll', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('wefalf78', 'coll', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('wefalf79', 'coll', 'siope_plus', false, undefined, undefined),
      new Vm('wefalj25', 'svil', 'abaco', false, undefined, undefined),
      new Vm('wefalj36', 'svil', 'siope_plus', false, undefined, this.getSchedule()),
      new Vm('wefalj37', 'svil', 'siope_plus', false, undefined, undefined),
      new Vm('wefalj39', 'svil', 'siope_plus', false, undefined, undefined),
      new Vm('wefalj80', 'svil', 'abaco', true, this.getShutdownDate(), undefined),
      new Vm('wflnx003427', 'svil', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('wflnx004121', 'svil', 'siope_plus', true, this.getShutdownDate(), undefined),
      new Vm('wflnx004122', 'coll', 'siope_plus', true, this.getShutdownDate(), undefined),
    ]
  }

  private rnd(min: number, max: number): number {
    return Math.floor(Math.random() * max + min);
  }

  private getSchedule(): Schedule {
    var now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const sd = this.rnd(4, 15);
    const ed = sd + this.rnd(2, 4);
    const sh = this.rnd(8, 15);
    const eh = this.rnd(17, 23);
    console.log(y, m, sd, ed, sh, eh);
    return new Schedule(new Date(y, m, sd, sh, 0, 0, 0), new Date(y, m, ed, eh, 0, 0, 0))
  }

  private getShutdownDate(): Date {
    const now = new Date();
    const then = now.getTime() + 1000 * 60 * 60 * 24 * Math.trunc(Math.random() * 8);
    return new Date(then)
  }

  public filteredVms(srv: string, env: string): Vm[] {
    return this.vms
    .filter(vm => vm.service == srv)
    .filter(vm => vm.environment == env);
  }

  public getAllServices(env: string): string[] {
    return this.vms
    .filter(vm => vm.environment == env)
    .map(vm => vm.service)
    .filter(this.onlyUnique)
    .sort();
  }

  private onlyUnique(value: string, index: number, array: string[]) {
    return array.indexOf(value) === index;
  }
}
