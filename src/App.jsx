import { Left } from "./component/Left";

export default function App() {
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
              Schedule a 30-minute product demo with our experts.
            </p>
          </span>

          <form action="" className="flex flex-col items-start gap-3 ">
            <span className="flex items-start justify-between gap-3">
              <input
                type="text"
                placeholder="First name*"
                className="outline-none border-[1px] border-[#E1E5EF] rounded-[6px] p-[12px] w-[50%]"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="outline-none border-[1px] border-[#E1E5EF] rounded-[6px] p-[12px] w-[50%]"
              />
            </span>
            <input
              type="email"
              name=""
              placeholder="Email*"
              id=""
              className="outline-none border-[1px] w-[100%] border-[#E1E5EF] rounded-[6px] p-[12px]"
            />
            <input
              type="password"
              name=""
              placeholder="Password*"
              id=""
              className="outline-none border-[1px] w-[100%] border-[#E1E5EF] rounded-[6px] p-[12px] "
            />

            <button
              type="submit"
              className="bg-[#2D29D7] rounded-[6px] py-[10px] px-[15px] text-white font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
