import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerModel } from '../shared/model/server.model';
import {FormsModule } from '@angular/forms'

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

@Input() iserver : ServerModel
@Input() id :number;

@Output() onChangeStatus = new EventEmitter<{id:number,newStatus:string}>();

onStatusChanged(nStatus :string)
 {
  this.onChangeStatus.emit({id:this.id,newStatus:nStatus});
 }

  constructor() { }

  ngOnInit() {
  }

}
