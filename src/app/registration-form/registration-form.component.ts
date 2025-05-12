import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { AgChartOptions } from 'ag-charts-community';


ModuleRegistry.registerModules([ClientSideRowModelModule]);


@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],

})

export class RegistrationFormComponent {


  columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'First Name', filter: 'agTextColumnFilter', width: 110 },
    { field: 'familyName', headerName: 'Family Name', width: 120 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
    { field: 'id', headerName: 'User Id', width: 110 },
    { field: 'courseName', headerName: 'Course Name', width: 160 },
    { field: 'coursePrice', headerName: 'Course Price', width: 120 },
    { field: 'isPayed', headerName: 'Is Payed', width: 110 },
    {
      field: 'details', headerName: 'Details', width: 110,
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Details';
        button.addEventListener('click', () => {
          alert(`Details for ${params.data.firstName} ${params.data.familyName} ${params.data.phoneNumber}, isPayed? ${params.data.isPayed} ${params.data.isPayed ? '😄' : '😣'}`);
        });
        return button;
      }
    }
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData = [
    { firstName: 'Sarah', familyName: 'Cohen', phoneNumber: '052-1234567', id: '123456789', courseName: 'English Literature', coursePrice: 350, isPayed: true },
    { firstName: 'Miriam', familyName: 'Levi', phoneNumber: '054-7654321', id: '987654321', courseName: 'Physics for Beginners', coursePrice: 450, isPayed: false },
    { firstName: 'Chaya', familyName: 'Rosenfeld', phoneNumber: '050-1122334', id: '246813579', courseName: 'Computer Science', coursePrice: 400, isPayed: true },
    { firstName: 'Leah', familyName: 'Mizrachi', phoneNumber: '053-9876543', id: '111222333', courseName: 'Art History', coursePrice: 300, isPayed: true },
    { firstName: 'Esther', familyName: 'Ben-David', phoneNumber: '051-4445566', id: '444555666', courseName: 'Mathematics', coursePrice: 380, isPayed: false },
    { firstName: 'Tamar', familyName: 'Avital', phoneNumber: '058-1231231', id: '159753486', courseName: 'Graphic Design', coursePrice: 500, isPayed: true },
    { firstName: 'Naama', familyName: 'Segal', phoneNumber: '057-9998887', id: '753951456', courseName: 'Web Development', coursePrice: 600, isPayed: false },
    { firstName: 'Rachel', familyName: 'Gabay', phoneNumber: '056-3332211', id: '321654987', courseName: 'Music Theory', coursePrice: 420, isPayed: true },
    { firstName: 'Rivka', familyName: 'Shalem', phoneNumber: '055-8877665', id: '147258369', courseName: 'Biology Basics', coursePrice: 470, isPayed: false },
    { firstName: 'Devorah', familyName: 'Baruch', phoneNumber: '059-7766554', id: '963852741', courseName: 'Data Science', coursePrice: 700, isPayed: true },
    { firstName: 'Batya', familyName: 'Nahari', phoneNumber: '052-9988776', id: '852963741', courseName: 'Jewelry Design', coursePrice: 530, isPayed: true },
    { firstName: 'Yehudit', familyName: 'Kalman', phoneNumber: '054-2211334', id: '741852963', courseName: 'French for Beginners', coursePrice: 360, isPayed: false },
    { firstName: 'Malka', familyName: 'Zohar', phoneNumber: '050-3344556', id: '369258147', courseName: 'Photography', coursePrice: 490, isPayed: true },
    { firstName: 'Hadas', familyName: 'Sharabi', phoneNumber: '053-6655443', id: '258147369', courseName: 'Cooking Basics', coursePrice: 310, isPayed: false },
    { firstName: 'Odelia', familyName: 'Halperin', phoneNumber: '058-4433221', id: '654789321', courseName: 'Public Speaking', coursePrice: 410, isPayed: true },
    { firstName: 'Shira', familyName: 'Lavi', phoneNumber: '057-1122446', id: '789456123', courseName: 'Interior Design', coursePrice: 590, isPayed: true },
    { firstName: 'Eliana', familyName: 'Ashkenazi', phoneNumber: '051-6677889', id: '321789654', courseName: 'Digital Marketing', coursePrice: 620, isPayed: false },
    { firstName: 'Gila', familyName: 'Navon', phoneNumber: '059-7788990', id: '963147852', courseName: 'Hebrew Grammar', coursePrice: 280, isPayed: true },
    { firstName: 'Tzila', familyName: 'Sharvit', phoneNumber: '056-8800991', id: '159486327', courseName: 'Drama Workshop', coursePrice: 460, isPayed: true },
    { firstName: 'Bracha', familyName: 'Yosef', phoneNumber: '055-2233445', id: '753456789', courseName: 'Chemistry Basics', coursePrice: 430, isPayed: false }
  ];
}
