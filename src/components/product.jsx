import { Flex, Image, Link } from "@chakra-ui/react";
import Frame from "../assets/Frame.png";
import Product1 from "../assets/product.png";

import { Link as ReachLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Product(props) {
  const data = props.data;
  const navigate = useNavigate();
  return (
    <>
      <Flex
        width="1440px"
        height="100%"
        px="110px"
        py="65px"
        gap="50px"
        flexWrap="wrap"
        display="inline-flex"
        alignItems="flex-start"
      >
        {data.map((val) => {
          return (
            <>
              <Link
                to={`/detail/${val.id}`}
                as={ReachLink}
                onClick={() => {
                  localStorage.setItem("id", val.id);
                }}
              >
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
                    flexShrink="0"
                    bgColor="#152A46"
                    roundedTop="20px"
                  >
                    <Image
                      src={Product1}
                      py="10px"
                      width="75px"
                      height="120px"
                    />
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
                        fontStyle="normal"
                        fontWeight="800"
                        lineHeight="20px"
                      >
                        {val.jenis}
                      </Flex>
                      <Flex
                        color="#FFF"
                        fontFamily="Mulish"
                        fontSize="20px"
                        fontStyle="normal"
                        fontWeight="800"
                        lineHeight="20px"
                      >
                        {" "}
                        Programming Laravel
                      </Flex>
                      <Flex
                        color="#FFF"
                        fontFamily="Mulish"
                        fontSize="12px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="20px"
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
                        fontFamily="Mulish"
                        fontSize="20px"
                        fontStyle="normal"
                        fontWeight="800"
                        lineHeight="25px"
                      >
                        {val.nama_program}
                        <Flex
                          color="#000"
                          fontFamily="Mulish"
                          fontSize="17px"
                          fontStyle="normal"
                          fontWeight="800"
                          lineHeight="25px"
                        >
                          {" "}
                          {val.ket_program}
                        </Flex>
                        <Flex display="flex" alignItems="flex-start" gap="16px">
                          <Flex
                            color="rgba(0, 0, 0, 0.50)"
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="600"
                            lineHeight="20px"
                          >
                            Batch{" "}
                          </Flex>{" "}
                          <Flex
                            color="#000"
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="600"
                            lineHeight="20px"
                          >
                            {val.batch}
                          </Flex>
                        </Flex>
                        <Flex display="flex" alignItems="flex-start" gap="9px">
                          <Flex
                            color="rgba(0, 0, 0, 0.50)"
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="600"
                            lineHeight="20px"
                          >
                            Mentor
                          </Flex>
                          <Flex
                            color="#000"
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="600"
                            lineHeight="20px"
                          >
                            {val.mentor}
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
                          {val.harga_awal}
                        </Flex>
                        <Flex
                          color="#0ACF83"
                          fontFamily="Mulish"
                          fontSize="20px"
                          fontStyle="normal"
                          fontWeight="800"
                          lineHeight="20px"
                        >
                          {val.harga_promo}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Link>
            </>
          );
        })}
      </Flex>
      <Flex
        display="inline-flex"
        alignItems="center"
        justifyContent={"center"}
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
          color={"white"}
          borderRadius="4px"
          background="var(--primary-primary, #197BFF)"
          boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.15)"
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
