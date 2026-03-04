// import { useState } from "react";
// import { set } from "zod/v4";
import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";

import { useCreateEmployee } from "../api/useCreateEmployee";

const EmployeesPage = () => {
  const [inputText, setInputText] = useState("");
  const { employees, employeeIsLoading, employeesError, fetchEmployees } =
    useFetchEmployees();

  const { createEmployeeError, createEmployeeIsLoading, createEmployee } =
    useCreateEmployee();

  const handleCreateEmployee = async () => {
    // setelah create selesai langsung fetch ulang data employee agar data yang baru saja dibuat bisa langsung muncul di tabel
    await createEmployee(inputText);
    await fetchEmployees();
    setInputText(""); //kosongkan input setelah create employee selesai
  };
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
        <tfoot>
          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                value={inputText}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                disabled={createEmployeeIsLoading}
                onClick={handleCreateEmployee}
              >
                Create Employee
              </button>
            </td>
          </tr>
          {createEmployeeError && (
            <tr>
              <td colSpan={2} style={{ color: "red" }}>
                {createEmployeeError}
              </td>
            </tr>
          )}
        </tfoot>
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
