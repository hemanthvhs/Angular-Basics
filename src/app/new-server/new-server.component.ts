import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { ServerModel } from '../shared/model/server.model';

import { Subject} from 'rxjs'
import { ServerService } from '../services/server-service';


@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {

constructor(private serverService : ServerService) {}

@ViewChild('refserverName') InputServerName : ElementRef
@ViewChild('refserverStatus') InputServerStatus : ElementRef


//@Output() serverDetails =  new EventEmitter<ServerModel>();

 onAddServer()
 {
  // console.log(this.InputServerName);
  //this.serverDetails.emit({serverName:this.InputServerName.nativeElement.value,serverStatus:this.InputServerStatus.nativeElement.value});

  this.serverService.subject.next({serverName:this.InputServerName.nativeElement.value,serverStatus:this.InputServerStatus.nativeElement.value})
 }

 

  ngOnInit() {
  }

}
