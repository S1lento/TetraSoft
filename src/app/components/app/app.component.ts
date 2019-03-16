import {Component, OnInit, ViewChild} from '@angular/core';
import { PeriodicElement } from './app.interfaces';
import { of } from 'rxjs';
import {take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private store: Store<AppState>) {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public dataSource;
  public displayedColumns: string[] = ['one', 'two', 'three', 'four'];

  response(): any {
    this.http.get('https://reqres.in/api/users').
    subscribe(response => {
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.response();
  } 
}

