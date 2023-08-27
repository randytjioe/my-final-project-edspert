import { Flex, Image } from "@chakra-ui/react";
import Frame from "../assets/Frame.png";
import Product1 from "../assets/product.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Product() {
  //   const data = [
  //     {
  //       name= "Programming Laravel",
  //       jenis= "Intensive Bootcamp",
  //       keterangan= "Getting started with Laravel 9",
  //       batch= "September 2022",
  //       mentor= "William Hartono, Farel Prayoga",
  //     },
  //   ]
  return (
    <>
      <Flex w="100%" height="100%" px="110px" py="65px">
        <Flex
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          w="352px"
          h="293px"
        >
          <Flex
            display="flex"
            width="352px"
            height="129px"
            justifyContent="center"
            alignItems="center"
            gap="25px"
            flex-shrink="0"
            bgColor="#152A46"
            roundedTop="20px"
          >
            <Image src={Product1} py="10px" width="75px" height="120px" />
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="9px"
            >
              <Flex
                width="191px"
                color="#FFCD29"
                fontFamily="Mulish"
                fontSize="16px"
                font-style="normal"
                font-weight="800"
                line-height="20px"
              >
                Intensive Bootcamp
              </Flex>
              <Flex
                color="#FFF"
                fontFamily="Mulish"
                fontSize="20px"
                font-style="normal"
                font-weight="800"
                line-height="20px"
              >
                {" "}
                Programming Laravel
              </Flex>
              <Flex
                color="#FFF"
                fontFamily="Mulish"
                fontSize="12px"
                font-style="normal"
                font-weight="400"
                line-height="20px"
              >
                (Getting Started with Laravel 9)
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width="352px"
            height="164px"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            roundedBottom="20px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="4px"
              px="24px"
              py="9px"
            >
              <Flex
                color="#000"
                flexDirection="column"
                font-family="Mulish"
                fontSize="20px"
                font-style="normal"
                font-weight="800"
                line-height="25px"
              >
                Programming Laravel{" "}
                <Flex
                  color="#000"
                  font-family="Mulish"
                  fontSize="17px"
                  font-style="normal"
                  font-weight="800"
                  line-height="25px"
                >
                  {" "}
                  Getting Started with Laravel 9
                </Flex>
                <Flex display="flex" alignItems="flex-start" gap="16px">
                  <Flex
                    color="rgba(0, 0, 0, 0.50)"
                    font-family="Mulish"
                    fontSize="12px"
                    font-style="normal"
                    font-weight="600"
                    line-height="20px"
                  >
                    Batch{" "}
                  </Flex>{" "}
                  <Flex
                    color="#000"
                    font-family="Mulish"
                    fontSize="12px"
                    font-style="normal"
                    font-weight="600"
                    line-height="20px"
                  >
                    September 2023
                  </Flex>
                </Flex>
                <Flex display="flex" alignItems="flex-start" gap="9px">
                  <Flex
                    color="rgba(0, 0, 0, 0.50)"
                    font-family="Mulish"
                    fontSize="12px"
                    font-style="normal"
                    font-weight="600"
                    line-height="20px"
                  >
                    Mentor
                  </Flex>
                  <Flex
                    color="#000"
                    font-family="Mulish"
                    fontSize="12px"
                    font-style="normal"
                    font-weight="600"
                    line-height="20px"
                  >
                    William Hartono, Farel Prayoga
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                py="13px"
                width="314px"
                justifyContent="flex-end"
                alignItems="center"
                alignContent="center"
                gap="1px 6px"
                flex-wrap="wrap"
              >
                <Flex
                  color="rgba(0, 0, 0, 0.50)"
                  fontFamily="Mulish"
                  fontSize="15px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="20px"
                  textDecorationLine="line-through"
                >
                  Rp 2060.000
                </Flex>
                <Flex
                  color="#0ACF83"
                  fontFamily="Mulish"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="20px"
                >
                  Rp 560.000
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        display="inline-flex"
        alignItems="flex-end"
        gap="4px"
        w="100%"
        px="110px"
        py="65px"
      >
        <Flex
          display="flex"
          height="32px"
          padding=" 0px 10px"
          alignItems="center"
          gap="8px"
        >
          <IoIosArrowBack />
          Sebelumnya
        </Flex>
        <Flex
          display="flex"
          width="32px"
          height="32px"
          padding="10px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          border-radius="4px"
          background="var(--primary-primary, #197BFF)"
          box-shadow="0px 1px 2px 0px rgba(0, 0, 0, 0.15)"
        >
          1
        </Flex>
        <Flex
          display="flex"
          height="32px"
          padding="0px 10px"
          justifyContent="center"
          alignItems="center"
          gap="8px"
        >
          Selanjutnya
          <IoIosArrowForward />
        </Flex>
      </Flex>
    </>
  );
}
