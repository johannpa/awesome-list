import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'al-workday-form-notes',
  templateUrl: './workday-form-notes.component.html',
  styles: [
  ]
})
export class WorkdayFormNotesComponent implements OnInit {

  @Input() notes: FormControl;
  


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


}
