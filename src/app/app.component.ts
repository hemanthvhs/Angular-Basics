import { Component } from '@angular/core';
import { ServerModel } from './shared/model/server.model'
import { FormsModule } from '@angular/forms'
import { ServerService } from './services/server-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private serverService : ServerService) {}

  servers : ServerModel[] =[];

 /*  onServerCreated(serverData:{serverName : string,serverStatus :string})
  {
    //this.servers.push({serverName:serverData.serverName,serverStatus:serverData.serverStatu
    this.servers.push(serverData);
    console.log(this.servers.length);
  }
   */
  ngOnInit() {
    this.serverService.subject.subscribe( (serverData : ServerModel) => {
      this.servers.push(serverData)
    })
  }


  onStatusChange(ChangeData:{id:number,newStatus:string})
  {
    this.servers[ChangeData.id].serverStatus=ChangeData.newStatus;
  }
}
