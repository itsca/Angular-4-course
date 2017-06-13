import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = Math.floor(Math.random() * 10) + 1;
  serverStatus: string;
  getServerStatus() {
  	if (this.serverId % 2 == 0) {
  		this.serverStatus = "online";
  	} else {
  		this.serverStatus = "offline";
  	}
  	return this.serverStatus;
  }
}
