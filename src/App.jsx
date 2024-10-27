import { Left } from "./component/Left";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      // default email alrady in the input field
      // email: "nurain@gmail.com"
    }
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", {
        // message: "This email is already taken",
      });
    }
  };

  return (
    <header className="flex items-center justify-center m-[4%]">
      <div className="w-[70%] h-[80vh] bg-black flex items-center justify-center">
        <Left />

        <div className="form w-[50%] h-[100%] bg-white px-[3rem] py-[3.5rem] shadow-lg flex items-start justify-center flex-col">
          <span className="flex items-start flex-col">
            <h1 className="text-start text-[20px] font-bold leading-[1.5rem] text-black">
              Create an Account
            </h1>
            <p className="text-[#7E8DAA] text-[12px] mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-3"
          >
            <span className="flex items-start justify-between gap-3">
              <span className="flex flex-col items-start w-[100%]">
                <input
                  type="text"
                  {...register("firstname", { required: true })}
                  placeholder="First name*"
                  className="outline-none border-[1px] border-[#E1E5EF] rounded-[6px] p-[12px] w-[100%]"
                />
                {errors.firstname && (
                  <span className="errorText">First name is required</span>
                )}
              </span>

              <span className="flex flex-col items-start w-[100%]">
                <input
                  type="text"
                  {...register("lastname", { required: true })}
                  placeholder="Last name*"
                  className="outline-none border-[1px] border-[#E1E5EF] rounded-[6px] p-[12px] w-[100%]"
                />
                {errors.lastname && (
                  <span className="errorText">Last name is required</span>
                )}
              </span>
            </span>
            <span>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                placeholder="Email*"
                className="outline-none border-[1px] w-[100%] border-[#E1E5EF] rounded-[6px] p-[12px]"
              />
              {errors.email && (
                <span className="errorText">Valid email is required</span>
              )}
            </span>

            <input
              type="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
              placeholder="Password*"
              className="outline-none border-[1px] w-[100%] border-[#E1E5EF] rounded-[6px] p-[12px]"
            />
            {errors.password && (
              <span className="errorText">
                Invalid Password, password must has at least one lowercase
                letter, one uppercase letter, one digit, one spacial character
                and at least 8 charcter long
              </span>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2D29D7] rounded-[6px] py-[10px] px-[15px] text-white font-medium"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>

            {/* error on the whole field */}
            {/* {errors.root && (
              <span className="errorText">First name is required</span>
            )} */}
          </form>
        </div>
      </div>
    </header>
  );
}
