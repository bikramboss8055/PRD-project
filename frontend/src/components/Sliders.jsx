import poster1 from "../resource/poster1.jpg";
import poster2 from "../resource/poster2.jpg";
import poster4 from "../resource/poster4.jpg";
import poster5 from "../resource/poster5.jpg";
import poster7 from "../resource/poster7.jpg";
import poster8 from "../resource/poster8.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box, Image } from "@chakra-ui/react";

const Sliders = () => {
  return (
    <>
      <Box width={{ base: "95%",md:'80%' ,lg: "80%",xl:'85%' }}  margin="auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image alt="1" src={poster1} width={"100%"} h={{base:'200px',sm:'250px',md:'300px',lg:'400px',xl:'500px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="2" src={poster2} width={"100%"} h={{base:'200px',sm:'250px',md:'300px',lg:'400px',xl:'500px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="3"
              src={poster4}
              width={"100%"}
              h={{base:'200px',sm:'250px',md:'300px',lg:'400px',xl:'500px'}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="4"
              src={poster5}
              width={"100%"}
              h={{base:'200px',sm:'250px',md:'300px',lg:'400px',xl:'500px'}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="5"
              src={poster7}
              width={"100%"}
              h={{base:'200px',sm:'250px',md:'300px',lg:'400px',xl:'500px'}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="6"
              src={poster8}
              width={"100%"}
              h={{base:'200px',sm:'250px',md:'300px',lg:'400px',xl:'500px'}}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Sliders;
