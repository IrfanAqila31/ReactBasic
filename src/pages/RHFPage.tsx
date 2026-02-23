import { useForm } from "react-hook-form";

const RHFPage = () => {
  const form = useForm<{ password: string; username: string }>();

  //   values data dari handleSubmit, yang diambil dari input yang sudah di register
  const handleRegisterUser = (values: {
    password: string;
    username: string;
  }) => {
    alert("form submited");
    console.log(values);
  };
  return (
    // ... spread untuk membuka bungkus form dan mengambil semua properti yang ada di dalamnya
    <div>
      <h1>ract hook form</h1>

      <form
        onSubmit={form.handleSubmit(handleRegisterUser)}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label>
          UserName:
          <input type="text" {...form.register("username")} />
        </label>
        <label>
          Password:
          <input type="password" {...form.register("password")} />
        </label>
        {/* button mentrigger karena berada di dalam tag form yang ada onSubmit */}
        <button>Register User</button>
      </form>
    </div>
  );
};
export default RHFPage;
