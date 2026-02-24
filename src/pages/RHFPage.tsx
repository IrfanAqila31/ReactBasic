import { useForm } from "react-hook-form";
import { z } from "zod"; // zod digunakan untuk membuat validasi
import { zodResolver } from "@hookform/resolvers/zod"; // zodResolver digunakan untuk menghubungkan zod dengan react hook form, sehingga kita bisa menggunakan validasi yang sudah kita buat di zod untuk form yang kita buat dengan react hook form

// type registerFormSchema ={
//   username: string;
//   password: string;
// }

const registerFormSchema = z.object({
  // setiap properti yang ada didalam zod ini hanya memiliki satu inputan.
  username: z
    .string()
    .min(3, { message: "Username harus lebih dari 3 karakter" })
    .max(10, { message: "Username tidak boleh lebih dari 10 karakter" }), //disini  kita kasi bentuk validasi atau syarat  untuk input username, misalnya harus string, minimal 3 karakter, dll
  password: z
    .string()
    .min(8, { message: "Password harus lebih dari 8 karakter" }), // disini kita kasi bentuk validasi atau syarat untuk input password, misalnya harus string, minimal 8 karakter, dll
  age: z.coerce.number().min(18, { message: "Umur harus lebih dari 18 tahun" }), //.coerce digunakan untuk mengubah tipe data yang diinputkan menjadi number, karena inputan dari form selalu string, jadi kita perlu mengubahnya menjadi number agar bisa di validasi dengan min(18)
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>; // untuk mengambil tipe data dari zod yang sudah kita buat, jadi kita tidak perlu menulis ulang tipe data yang sama dengan yang ada di zod, cukup menggunakan z.infer untuk mengambil tipe data dari zod yang sudah kita buat

const RHFPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema), // untuk menghubungkan zod dengan react hook form, sehingga kita bisa menggunakan validasi yang sudah kita buat di zod untuk form yang kita buat dengan react hook form
  });

  //   values data dari handleSubmit, yang diambil dari input yang sudah di register
  const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("form submited");
    console.log(values);
    form.setValue("username", ""); // untuk mengosongkan input username setelah submit
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
        {/* untuk menulis errornya */}
        <span style={{ color: "red" }}>
          {form.formState.errors.username?.message}
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
        {/* button mentrigger karena berada di dalam tag form yang ada onSubmit */}
        <button>Register User</button>
      </form>
    </div>
  );
};
export default RHFPage;
