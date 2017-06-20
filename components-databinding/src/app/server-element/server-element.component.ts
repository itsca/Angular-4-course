import { Component, OnInit, AfterContentInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
	@ContentChild('contentParagraph') paragraph: ElementRef;

	@Input() element: {type: string, name: string, content: string};

	constructor() { }

	ngOnInit() {
		console.log('Text of content paragraph on Init ' + this.paragraph.nativeElement.textContent)
	}

	ngAfterContentInit() {
		console.log('Text of content paragraph on ContentInit ' + this.paragraph.nativeElement.textContent)
	}

}
