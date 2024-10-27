export const Left = () => {
  return (
    <div className="main w-[50%] h-[100%] bg-[#2D29D7] bgLeft">
      <nav className="w-[100%] h-[15%] py-[1.5rem] px-[50px]">
        <img
          src="../public/logo.svg"
          alt=""
          className="w-[80px] cursor-pointer"
        />
      </nav>

      <div className="px-[50px] flex flex-col items-start gap-3">
        <h1 className="text-start text-[28px] font-extrabold leading-[1.8rem] text-white">
          Lorem ipsum dol amet. <br />{" "}
          <span className="text-[#C698F6]">Lorem, ipsum dolor.. </span>
        </h1>

        <p className="text-[12.5px] leading-[18px] text-white font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          aliquid ad quas vitae mollitia veniam possimus quibusdam sapiente nisi
          ipsam.
        </p>

        <div className="w-[90%] gap-[1rem] flex items-start justify-start flex-wrap ">
          <img src="/public/brex.svg" alt="" />
          <img src="/public/airbase.svg" alt="" />
          <img src="/public/ramp.svg" alt="" />
          <img src="/public/raise.svg" alt="" className="w-[80px]" />
          <img src="/public/blackhawk.svg" alt="" className="w-[80px]" />
          <img src="/public/buildertrend.svg" alt="" className="w-[80px]" />
        </div>

        <div>
          <img src="/public/sign.svg" alt="" className="w-[30px]" />

          <p className="text-[12.5px] leading-[18px] text-white font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
            obcaecati hic. Autem nisi sunt dolorum quae voluptates pariatur a,
            magnam necessitatibus nobis.
          </p>

          <span className="flex flex-col gap-[-20px] mt-[1rem]">
            <small className="text-[#C698F6] font-bold">Howler Hota</small>
            <p className="text-white text-[12px]">
              Manager, Tavdl
            </p>
          </span>

          <img src="/public/airbase.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
