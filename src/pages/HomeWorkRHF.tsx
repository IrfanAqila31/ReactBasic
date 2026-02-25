import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";

// ================
// 1. Membuat schema validasi dengan zod
// ================
const registerSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Must contain at least 1 uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain at least 1 number" }),
  age: z.coerce.number().min(18, { message: "Age must be at least 18" }),
});

type RegisterSchema = z.infer<typeof registerSchema>;
const HomeWworkRHF = () => {

 // ======================
  // Local state untuk list user (Bonus Feature)
  // ======================


  
  // ===============
  // 2. membuat react hook form dengan menggunakan schema validasi yang sudah dibuat dengan zod
  // ===============
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  // ===============
  // 3. membuat handle submit untuk form yang sudah dibuat dengan react hook form, dan menampilkan error jika ada error pada form
  // ===============
  const handleRegister = (values: RegisterSchema) => {
    alert("Form submitted");
    console.log(values);
    form.setValue("name", ""); // untuk mengosongkan input name setelah submit
  };

  return (
    <div>
      <h1>Home Work RHF</h1>

      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={form.handleSubmit(handleRegister)}
      >
        <label>
          Name:
          <input type="text" {...form.register("name")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.name?.message}
        </span>
        <label>
          Email:
          <input type="email" {...form.register("email")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.email?.message}
        </span>
        <label>
          Password:
          <input type="password" {...form.register("password")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.password?.message}
        </span>
        <label>
          Age:
          <input type="number" {...form.register("age")} />
        </label>
        <span style={{ color: "red" }}>
          {form.formState.errors.age?.message}
        </span>
        <button>Register User</button>
      </form>
    </div>
  );
};
export default HomeWworkRHF;
