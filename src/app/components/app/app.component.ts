import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/redux/app.state';
import {GetUsers} from '../../redux/app.actions';

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
  public displayedColumns: string[] = ['id', 'avatar', 'firstName', 'lastName'];

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
    this.store.select('userReducer').subscribe((response) => {
      this.dataSource = new MatTableDataSource(response.users);
      this.dataSource.paginator = this.paginator;
    });
  }
}

