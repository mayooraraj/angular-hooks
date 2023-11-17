import { Component,OnInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit,OnDestroy{

  // counter =0;
  // interval:any;

  constructor(){
    console.log("child constructor is called");
    
  }

  ngOnInit(): void {
    console.log("child oninit called");

    // this.interval=setInterval(() => {  
    //   this.counter = this.counter+1
    //   console.log(this.counter);
      
    // },1000);
    
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval); //will stop the counting
    console.log("child ondestroy is called"); //called once when component is removed from the DOM
    
  }

  
}
