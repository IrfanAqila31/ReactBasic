import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployee = () => {
  const [createEmployeeIsLoading, setCreateEmployeeIsLoading] = useState(false);
  const [createEmployeeError, setCreateEmployeeError] = useState("");

  const createEmployee = async (payload: string) => {
    try {
      setCreateEmployeeIsLoading(true);
      await axiosInstance.post("/employees", {
        //name: inputText, //inputText diganti dengan payload yang dikirim dari parameter fungsi handleCreateEmployee agar bisa tetap dikirim ke post request
        name: payload, //inputText diganti dengan payload yang dikirim dari parameter fungsi handleCreateEmployee agar bisa tetap dikirim ke post request
      });
    } catch (error) {
      setCreateEmployeeError((error as TypeError).message);
    } finally {
      setCreateEmployeeIsLoading(false);
    }
  };
  return {
    createEmployeeError,
    createEmployeeIsLoading,
    createEmployee,
  };
};
