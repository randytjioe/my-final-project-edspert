import { Flex, Image, Center } from "@chakra-ui/react";
import Elipse from "../assets/Ellipse1.png";

export default function Footer() {
  return (
    <>
      <Center
        width="100%"
        height="567px"
        flex-shrink="0"
        px="100px"
        py="65px"
        bgImage={Elipse}
      >
        <Flex
          display="flex"
          width="100%"
          height="567px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="126px"
          flex-shrink="0"
        >
          <Flex display="flex" alignItems="flex-start" gap="85px">
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Flex
                color="#A3A3A3"
                fontFamily="Be Vietnam Pro"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
              >
                TAGLINE edspert disini
              </Flex>
              <Flex
                color=" #A3A3A3"
                w="411px"
                fontFamily="Be Vietnam Pro"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
              >
                Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
                Sleman, Daerah Istimewa Yogyakarta 55581
              </Flex>
            </Flex>

            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="18px"
            >
              <Flex
                color="#000"
                fontFamily="Be Vietnam Pro"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
              >
                Program
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="12px"
              >
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Online Course
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily=" Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Mini Bootcamp
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Bootcamp
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="18px"
            >
              <Flex
                color="#000"
                fontFamily="Be Vietnam Pro"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
              >
                Bidang Ilmu
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="12px"
              >
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Digital Marketing
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily=" Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Product Management
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  English
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Programming
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="18px"
            >
              <Flex
                color="#000"
                fontFamily="Be Vietnam Pro"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
              >
                Tentang edspert
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="12px"
              >
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Bantuan
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily=" Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Kontak Kami
                </Flex>
                <Flex
                  color="#A3A3A3"
                  fontFamily="Be Vietnam Pro"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                >
                  Media Sosial
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            color="#A3A3A3"
            fontFamily="Be Vietnam Pro"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
          </Flex>
        </Flex>
      </Center>
    </>
  );
}
