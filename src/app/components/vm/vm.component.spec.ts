import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmComponent } from './vm.component';

describe('VmComponent', () => {
  let component: VmComponent;
  let fixture: ComponentFixture<VmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
