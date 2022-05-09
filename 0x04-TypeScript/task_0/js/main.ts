/** Renders table based on a list of objects */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstSudent: Student = {
  firstName: 'Laura',
  lastName: 'Callejas',
  age: 26,
  location: 'Bogota',
}

const secondSudent: Student = {
  firstName: 'Julian',
  lastName: 'Castro',
  age: 24,
  location: 'Medellin',
}

const studentList: Array<Student> = [ firstSudent, secondSudent ];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

/** <tr> table row, <td> data cell */
studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
