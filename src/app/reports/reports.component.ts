import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Report } from './report.model';
import { ReportService } from './report.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Report[];
  subscription: Subscription;
  isLoading = false;
  fileName = 'Reports.xlsx';

  constructor(private reportService: ReportService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.reportService.reportsChanged.subscribe(
      (reports: Report[]) => {
        this.reports = reports;
      }
    )
    this.reports = this.reportService.getReports();
  }

  exportToExcel() {
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  onFetchData() {
    this.isLoading = true;
    this.dataStorageService.fetchReports().subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.reportService.setReports(resData);
    });
  }

}
