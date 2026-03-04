import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeeResponse = {
  id: number;
  name: string;
};
export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [employeeIsLoading, setEmployeeIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");
  const fetchEmployees = async () => {
    try {
      setEmployeeIsLoading(true); //toggle loading on

      const response =
        await axiosInstance.get<EmployeeResponse[]>("/employees");

      console.log(response);
      setEmployees(response.data);
    } catch (error) {
      setEmployeesError((error as TypeError).message);
    } finally {
      setEmployeeIsLoading(false); //toggle loading off
    }
  };
  return {
    fetchEmployees,
    employeeIsLoading,
    employeesError,
    employees,
  };
};
