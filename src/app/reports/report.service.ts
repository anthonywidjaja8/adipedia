import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Report } from "./report.model";

@Injectable()
export class ReportService {
    reportsChanged = new Subject<Report[]>();
    
    private reports: Report[] = [];
    
    setReports(reports: Report[]) {
        this.reports = reports;
        this.reportsChanged.next(this.reports.slice());
    }

    getReports() {
        return this.reports.slice();
    }
    
}