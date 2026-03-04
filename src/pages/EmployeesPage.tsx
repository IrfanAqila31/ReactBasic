// import { useState } from "react";
// import { set } from "zod/v4";
import { useFetchEmployees } from "../api/useFetchEmployees";

const EmployeesPage = () => {
  const { employees, employeeIsLoading, employeesError, fetchEmployees } =
    useFetchEmployees();
  return (
    <div>
      <h1>Employees Page</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button disabled={employeeIsLoading} onClick={fetchEmployees}>
        Refresh Employees
      </button>
      {employeeIsLoading && <p>Loading...</p>}
      {employeesError && <p style={{ color: "red" }}>{employeesError}</p>}
      {/* {employeeIsLoading ? <p>Loading...</p> : null} */}
    </div>
  );
};
export default EmployeesPage;
