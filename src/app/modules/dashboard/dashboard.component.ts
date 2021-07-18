import { Component, OnInit, ViewChild,ElementRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
doctorsData =[
  {
    name:"Patey Cruiser",
    specialist:"Neurosurgeon",
    image:"https://i.imgur.com/LohyFIN.jpg"
  },
  {
    name:"Mario Speedway",
    specialist:"Cardiologist",
    image:"https://i.imgur.com/o5uMfKo.jpg"
  },
  {
    name:"Mario Speedway",
    specialist:"Eye Specialist",
    image:"https://i.imgur.com/tmdHXOY.jpg"
  },
  {
    name:"Anna Sthesia",
    specialist:"Urology",
    image:"https://i.imgur.com/o5uMfKo.jpg"
  },
  {
    name:"Patey Cruiser",
    specialist:"Neurosurgeon",
    image:"https://i.imgur.com/HFpxxJz.jpg"
  },
]
  ngOnInit() {

  }

  addBookAppoinment(item) {
alert("hii")
     let dialogRef = this.dialog.open(BookAppoinmentPopup,
       {
         width: '600px',
         height:'400px',
         data:item

       });
       dialogRef.afterClosed().subscribe(result => {

       });

   }

}

@Component({
  selector: 'Book-appoinment-popup',
  templateUrl: './book-appoinment.html',
  styleUrls: ['./dashboard.component.scss'],

})

export class BookAppoinmentPopup implements OnInit {

constructor(public dialogRef: MatDialogRef<BookAppoinmentPopup>,
  dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any){

  }

  ngOnInit(): void {
console.log(this.data,"popup data checking")
  }

}

