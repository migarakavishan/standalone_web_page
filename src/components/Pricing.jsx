import { AiFillCheckCircle } from "react-icons/ai";
import Img from "../assets/image.svg";

export const Pricing = () => {
  return (
    <div className="px-4  mx-auto  ">
      <div className="md:px-14 p-4 max-w-s mx-auto py-36  bg-white">
        <div className="text-center ">
          <h2 className="md:text-5xl text-3xl font-extrabold text-secondary mb-2">
            Save 50% for 12 months
          </h2>
          <h3 className="md:text-5xl text-3xl text-secondary mb-2">
            Simple, transparent pricing
          </h3>
          <p className="text-tartiary md:w-1/3 mx-auto px-4">
            No hidden or surprise fees
          </p>
        </div>

        <div className="-space-y-96">
        <div className=" py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 md:w-8/12 mx-auto">
          <div className="group hover:bg-black border outline outline-offset-0 py-10 md:px-14 px-6 rounded-lg shadow-xl  bg-white">
            <h3 className="text-3xl text-left text-black group-hover:text-white">
              Lite
            </h3>
            <p className="mt-5 text-left text-black text-4xl font-bold group-hover:text-white">
              19$
              <span className="mr-8 text-2xl font-medium group-hover:text-white">
                {" "}
                / month
              </span>
            </p>
            <p className="text-left my-5 group-hover:text-white">
              For small and medium scale businesses
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 items-center group-hover:text-white">
                <AiFillCheckCircle className="size-7" />
                20 users
              </li>
              <li className="flex gap-3 items-center group-hover:text-white">
                <AiFillCheckCircle className="size-7" />
                200 transactions
              </li>
              <li className="flex gap-3 items-center group-hover:text-white">
                <AiFillCheckCircle className="size-7" />
                100MB Stroage
              </li>
              <li className="flex gap-3 items-center group-hover:text-white">
                <AiFillCheckCircle className="size-7" />
                API Access
              </li>
              <li className="flex gap-3 items-center group-hover:text-white">
                <AiFillCheckCircle className="size-7" />
                Email Support
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="text-white bg-black py-2 px-10 rounded-lg group-hover:bg-white group-hover:text-black">
                Buy Now
              </button>
            </div>
          </div>

          <div className="group hover:bg-black border outline outline-offset-0 py-10 md:px-14 px-6 rounded-lg shadow-xl  bg-white">
            <h3 className="text-3xl text-left text-black group-hover:text-white">
              Premium
            </h3>
            <p className="mt-5 text-left text-black text-4xl font-bold group-hover:text-white">
              199$
              <span className="mr-8 text-2xl font-medium group-hover:text-white">
                {" "}
                / month
              </span>
            </p>
            <p className="text-left my-5 group-hover:text-white ">
              For large scale enterprisses and businesses
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 items-center group-hover:text-white ">
                <AiFillCheckCircle className="size-7" />
                100 users
              </li>
              <li className="flex gap-3 items-center group-hover:text-white ">
                <AiFillCheckCircle className="size-7" />
                1000 transactions
              </li>
              <li className="flex gap-3 items-center group-hover:text-white ">
                <AiFillCheckCircle className="size-7" />
                500MB Stroage
              </li>
              <li className="flex gap-3 items-center group-hover:text-white ">
                <AiFillCheckCircle className="size-7" />
                API Access
              </li>
              <li className="flex gap-3 items-center group-hover:text-white ">
                <AiFillCheckCircle className="size-7" />
                Email Support
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="text-white bg-black py-2 px-10 rounded-lg  group-hover:text-black group-hover:bg-white">
                Buy Now
              </button>
            </div>
          </div>
          <div className="py-14 md:px-14 px-6">
            <img src={Img} />
            <p className="text-left my-14 text-white">
              Need a custom pricing package, unique for your business?
            </p>

            <div className="w-full mx-auto mt-8 flex">
              <button className="text-black bg-white py-2 px-10 rounded-lg ">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        <div className="py-52  bg-primary "></div>
      </div>
      </div>
    </div>
  );
};
