import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { Router } from '@angular/router';
import { BoardComponentComponent } from '../board-component/board-component.component';

@Component({
    selector: 'app-board-form',
    templateUrl: './board-form.component.html',
    styleUrls: ['./board-form.component.css']
})

export class BoardFormComponent implements OnInit {


    onSubmit() { 
        if(this.model.getWidth() < 5 || this.model.getHeight() < 5
        || this.model.getWidth() >30 || this.model.getHeight() > 30) {
            
        } else {
            this.router.navigate(['routedPage', this.model]);
        }
    }

    model = new Board(null , null);

    constructor(private router: Router) { }

    ngOnInit() {

    }

}
