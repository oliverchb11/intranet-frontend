import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'hidden';
  public voto1 = 0;
  public voto2 = 0;
  public voto3 = 0;
  public radio1:string ;
  public radio2:string ;
  public radio3:string ;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  constructor(private calendar: NgbCalendar) {

    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

  ngOnInit(): void {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }



  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || this.isHovered(date);
  }


  radios1(r1){
    console.log(r1.value)
    this.radio1 = r1.value
    if( this.radio1 === "1"){
      this.voto1 += 1 ;
    }
  }
  radios2(r2){
    console.log(r2.value)
    this.radio2 = r2.value
    if( this.radio2 === "2"){
      this.voto2 += 1 ;
    }
  }
  radios3(r3){
    console.log(r3.value)
    this.radio3 = r3.value
    
    if( this.radio3 === "3"){
      this.voto3 += 1 ;
    }
  }

}
