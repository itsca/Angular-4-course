import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  	.pair {
  		color: blue;
  	}
  `]
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created';
	newServerName = '';
	serverCreated = false;
	servers = ['Server1', 'Server2'];

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = 'Server Created, name is ' + this.newServerName;
  	this.servers.push(this.newServerName);
  	this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
  	this.newServerName = event.target.value;
  }

}
