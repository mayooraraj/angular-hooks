import { Component, ElementRef, ViewChild,OnInit,AfterViewInit ,AfterViewChecked} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ParentComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {
  title = 'angular-hooks';
public count:number = 0;
  public counter():void{
    this.count++;
  }
  @ViewChild('btnCounter') btnCounter!: ElementRef;
  @ViewChild(ParentComponent) authComponent!:ParentComponent;

  ngAfterViewChecked(): void {
    console.log(this.authComponent.childCounter);
    
  }

 ngOnInit(): void {
   console.log(this.btnCounter);
   
 }
 ngAfterViewInit(): void {
  console.log(this.btnCounter);
  this.btnCounter.nativeElement.innerHTML =' Button text updated';
 }
}
