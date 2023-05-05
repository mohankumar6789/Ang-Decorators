import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss']
})

export class CustomerdetailComponent implements OnInit {
  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>(); 
    
  constructor() { }
 
  ngOnInit() {
  }
 
  update() {
    this.customerChange.emit(this.customer);
  }
}
