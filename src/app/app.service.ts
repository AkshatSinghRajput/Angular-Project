import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class AppService{

   computePecentage(x:number,y:number): number{
    let total = x+y;
    let total_marks = 200;
    let percentage = (total * 100)/total_marks;
    return percentage; 
   }


}