import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({ 
  templateUrl: './ng-mat.component.html',
  styleUrls: ['./ng-mat.component.css']
})
export class NgMatComponent implements OnInit {
  title = "Material Design for Angular";

  isIndeterminate : boolean = true;
  isChecked = true;

  isDarkTheme: boolean = false;

  lastDialogResult: string;
  showSnackbar(Msg : string, action:string){
    this.snackBar.open(Msg, action, {
      duration: 2000,
    });
  }

  animal:string;
  name:string;
  openDialog(){
    let dialogRef = this.dialogBox.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      
    });
  }  

  constructor(private snackBar : MatSnackBar, private dialogBox: MatDialog) { }

  ngOnInit() {
  }

}



@Component({

  templateUrl : './ng-mat-dialog.html'
})
export class DialogOverviewExampleDialog{
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}