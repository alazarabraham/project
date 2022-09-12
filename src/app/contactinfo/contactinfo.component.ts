import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {
  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ResumeComponent, {
      width: '90vw',
      maxWidth: '100vw',

      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
  }

}
