import { Component,OnInit,Input,OnChanges,SimpleChanges, AfterContentInit, AfterContentChecked} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit,OnChanges,AfterContentInit,AfterContentChecked{

  isChild = false; //initialy it is false when button click it will become true and child disply
 
  @Input() data:any;
  public childCounter : number =0;
 
  constructor(){
    console.log("parent constructor is called");
    
  }
  increaseCounter():void{
    this.childCounter++;
  }

  ngAfterContentInit(): void {
    console.log("after content init");
    
  }

  ngAfterContentChecked(): void {
    console.log("after content checked");
    
  }

  ngOnInit(): void {
    console.log("parent oninit called");
    
  }

  buttonClick(){
    this.isChild = !this.isChild;
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    

  }

}
