import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsBank2 } from "react-icons/bs";
import { BsPieChartFill } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoStatsChart } from "react-icons/io5";
export default function DashboardBox() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="dashboardbox"
    >
      <SwiperSlide>
        <div className="box bg-white rounded-md p-5 cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.3)] flex items-center gap-4 ">
          <LiaShippingFastSolid className="text-[40px] text-blue-500" />
          <div className="info  w-[70%] ">
            <h3> New Orders</h3>
            <h2 className="font-[600]"> 1430 </h2>
          </div>
          <IoStatsChart className="text-[70px]  !text-blue-500" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box bg-white rounded-md p-5 cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.3)] flex items-center gap-4 ">
          <BsPieChartFill className="text-[30px] text-green-600" />
          <div className="info w-[70%]">
            <h3> Sales</h3>
            <h2 className="font-[600]"> 1430 </h2>
          </div>
          <IoStatsChart className="text-[70px]  text-green-600" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box bg-white rounded-md p-5 cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.3)] flex items-center gap-4 ">
          <BsBank2 className="text-[30px] text-purple-500" />
          <div className="info w-[70%] ">
            <h3> Revenue</h3>
            <h2 className="font-[600]"> 1430 </h2>
          </div>
          <IoStatsChart className="text-[70px]  text-purple-500" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="box bg-white rounded-md p-5 cursor-pointer hover:bg-[#fafafa] border border-[rgba(0,0,0,0.3)] flex items-center gap-4 ">
          <AiOutlineProduct className="text-[30px] text-red-500" />
          <div className="info w-[70%] ">
            <h3>Products</h3>
            <h2 className="font-[600]"> 1450 </h2>
          </div>
          <IoStatsChart className="text-[70px]  text-red-500" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
