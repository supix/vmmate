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
      new Vm(
        "sflnx002844",
        "svil",
        true,
        new Date(2025, 2, 30, 1, 15, 34, 323),
        undefined
      ),
      new Vm(
        "sflnx003100",
        "svil",
        true,
        new Date(2025, 3, 2, 8, 15, 34, 323),
        undefined
      ),
      new Vm(
        "sflnx003101",
        "svil",
        true,
        new Date(2025, 3, 2, 8, 15, 34, 323),
        undefined
      ),
      new Vm(
        "sflnx003102",
        "svil",
        true,
        new Date(2025, 2, 30, 4, 0, 0, 323),
        undefined
      ),
      new Vm(
        "sflnx002343",
        "svil",
        false,
        undefined,
        new Schedule(new Date(2025, 4, 1, 9, 0, 0, 0), new Date(2025, 4, 1, 18, 45, 0, 0))
      ),
      new Vm(
        "sflnx002344",
        "svil",
        false,
        undefined,
        undefined
      ),
      new Vm(
        "sflnx002345",
        "svil",
        false,
        undefined,
        undefined
      ),
      new Vm(
        "sflnx001872",
        "coll",
        true,
        new Date(2025, 4, 10, 8, 15, 34, 323),
        undefined
      ),
      new Vm(
        "sflnx003984",
        "coll",
        false,
        undefined,
        undefined
      ),
    ]
  }

  public filteredVms(env: string): Vm[] {
    return this.vms.filter(vm => vm.environment == env);
  }
}
