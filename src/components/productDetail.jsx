import { Flex, Image, Divider, Button } from "@chakra-ui/react";
import Frame from "../assets/Frame.png";
import Product1 from "../assets/product.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Check from "../assets/check.png";
import { useNavigate } from "react-router-dom";
export default function ProductDetail() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        width="100%"
        display="inline-flex"
        height="1543px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="25px"
        flexShrink="0"
        background="#2C3F58"
      >
        <Flex
          display="flex"
          width="1439px"
          height="1080px"
          padding="50px"
          alignItems="flex-start"
          gap="65px"
          flexShrink="0"
        >
          <Flex
            display="flex"
            width="308px"
            height="256px"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            gap="16px 52px"
            flexWrap="wrap"
            borderRadius="25px"
            background="#FFF"
            flexDirection="column"
          >
            <Flex
              display="flex"
              width="308px"
              flexDirection="column"
              alignItems="flex-start"
              flexShrink="0"
              borderRadius="20px"
            >
              <Flex
                display="flex"
                width="303px"
                height="55px"
                padding="10px 72px"
                alignItems="center"
                gap="10px"
                borderRight="4px solid var(--primary-primary, #197BFF)"
                background="var(--surface-selected-default, #F1F7FF)"
              >
                <Flex
                  color="var(--primary-primary, #197BFF)"
                  fontFamily="Be Vietnam Pro"
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="28px"
                >
                  Materi
                </Flex>
              </Flex>
              <Flex
                display="flex"
                width="308px"
                height="55px"
                padding="25px 72px"
                alignItems="center"
                gap="10px"
              >
                <Flex
                  color="var(--text-default, #131313)"
                  fontFamily="Be Vietnam Pro"
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="28px"
                >
                  Fasilitas
                </Flex>
              </Flex>
              <Divider
                borderWidth="1px"
                borderStyle="solid"
                borderRadius="10"
                borderColor="#DDD"
                width="293px"
                justifyContent="center"
              />
            </Flex>
            <Flex
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="50px"
            >
              <Flex
                color="var(--text-subdued, #6D7175)"
                fontFamily="Be Vietnam Pro"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="22px"
                textDecorationLine="line-through"
              >
                Rp. 125.000
              </Flex>
              <Flex
                color="var(--secondary-three, #FF6A28)"
                fontFamily="Be Vietnam Pro"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="28px"
              >
                Rp. 99.000
              </Flex>
            </Flex>
            <Button
              display="flex"
              width="250px"
              height="50px"
              padding="10px 24px"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              flexShrink="0"
              borderRadius="50px"
              background="#FFCD29"
              _hover={{
                color: "var(--secondary-yellow, #FCBC30)",
                background: "white",
                border: "1px solid var(--secondary-yellow, #FCBC30)",
              }}
              onClick={(val) => {
                navigate("/checkout");
              }}
            >
              <Flex
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="20px"
              >
                Daftar Kelas
              </Flex>
            </Button>
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="26px"
          >
            <Flex
              display="flex"
              width="929px"
              height="674px"
              padding="0px 75px"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              gap="20px"
              borderRadius="25px"
              background="#FFF"
            >
              <Flex display="flex" alignItems="flex-start" gap="10px">
                <Image src={Check} width="20px" height="20px" />
                <Flex
                  color="#000"
                  fontFamily="Be Vietnam Pro"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Pengenalan Programming Laravel
                </Flex>
              </Flex>
              <Flex
                color="#868686"
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden.
              </Flex>
              <Flex display="flex" alignItems="flex-start" gap="10px">
                <Image src={Check} width="20px" height="20px" />
                <Flex
                  color="#000"
                  fontFamily="Be Vietnam Pro"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Materi Bootcamp Laravel 2
                </Flex>
              </Flex>
              <Flex
                color="#868686"
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden.
              </Flex>
              <Flex display="flex" alignItems="flex-start" gap="10px">
                <Image src={Check} width="20px" height="20px" />
                <Flex
                  color="#000"
                  fontFamily="Be Vietnam Pro"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Materi Bootcamp Laravel 3
                </Flex>
              </Flex>
              <Flex
                color="#868686"
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden.
              </Flex>
              <Flex display="flex" alignItems="flex-start" gap="10px">
                <Image src={Check} width="20px" height="20px" />
                <Flex
                  color="#000"
                  fontFamily="Be Vietnam Pro"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Materi Bootcamp Laravel 4
                </Flex>
              </Flex>
              <Flex
                color="#868686"
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden.
              </Flex>
              <Flex display="flex" alignItems="flex-start" gap="10px">
                <Image src={Check} width="20px" height="20px" />
                <Flex
                  color="#000"
                  fontFamily="Be Vietnam Pro"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Materi Bootcamp Laravel 5
                </Flex>
              </Flex>
              <Flex
                color="#868686"
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden.
              </Flex>
              <Flex display="flex" alignItems="flex-start" gap="10px">
                <Image src={Check} width="20px" height="20px" />
                <Flex
                  color="#000"
                  fontFamily="Be Vietnam Pro"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Materi Bootcamp Laravel 6
                </Flex>
              </Flex>
              <Flex
                color="#868686"
                fontFamily="Be Vietnam Pro"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden.
              </Flex>
            </Flex>

            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="32px"
            >
              <Flex
                display="flex"
                width="929px"
                height="299px"
                padding="50px 75px"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="25px"
                borderRadius="25px"
                background="#FFF"
              >
                <Flex height="20px" flexShrink="0">
                  <Image src={Check} w="20px" h="20px" />{" "}
                  <Flex
                    color="#000"
                    fontFamily="Be Vietnam Pro"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="20px"
                    px="20px"
                  >
                    E-Sertifikat
                  </Flex>
                </Flex>
                <Flex height="20px" flexShrink="0">
                  <Image src={Check} w="20px" h="20px" />{" "}
                  <Flex
                    color="#000"
                    fontFamily="Be Vietnam Pro"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="20px"
                    px="20px"
                  >
                    Portfolio
                  </Flex>
                </Flex>
                <Flex height="20px" flexShrink="0">
                  <Image src={Check} w="20px" h="20px" />{" "}
                  <Flex
                    color="#000"
                    fontFamily="Be Vietnam Pro"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="20px"
                    px="20px"
                  >
                    Job Connector
                  </Flex>
                </Flex>
                <Flex height="20px" flexShrink="0">
                  <Image src={Check} w="20px" h="20px" />{" "}
                  <Flex
                    color="#000"
                    fontFamily="Be Vietnam Pro"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="20px"
                    px="20px"
                  >
                    Career Development
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          display="flex"
          width="1437px"
          height="386px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="64px"
          flexShrink="0"
        >
          <Flex
            color="#FFF"
            fontFamily="Be Vietnam Pro"
            fontSize="42px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="44px"
          >
            Sudah siap bergabung?
          </Flex>
          <Button
            display="flex"
            width="262px"
            height="53px"
            padding="10px 24px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            _hover={{
              color: "var(--secondary-yellow, #FCBC30)",
              background: "white",
              border: "1px solid var(--secondary-yellow, #FCBC30)",
            }}
            flexShrink="0"
            borderRadius="50px"
            onClick={(val) => {
              navigate("/checkout");
            }}
            background="var(--secondary-yellow, #FCBC30)"
          >
            <Flex
              fontFamily="Be Vietnam Pro"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="20px"
            >
              Daftar kelas
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
