import { useState } from "react";

type Employee = {
  id: number;
  name: string;
};

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const[employeeIsLoading, setEmployeeIsLoading] = useState(false);
  const fetchEmployees = async () => {
    try {
      setEmployeeIsLoading(true); //toggle loading on
      const response = await fetch("http://localhost:2000/employees", {
        method: "GET",
      });
      const responeJson = (await response.json()) as Employee[];
      setEmployees(responeJson);
        
    } catch (error) {
      alert("error fetching employees");
    } finally {
      setEmployeeIsLoading(false); //toggle loading off
    }
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
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button disabled={employeeIsLoading} onClick={fetchEmployees}>Refresh Employees</button>
      {employeeIsLoading && <p>Loading...</p>}
      {/* {employeeIsLoading ? <p>Loading...</p> : null} */}

    </div>
  );
};
export default EmployeesPage;
