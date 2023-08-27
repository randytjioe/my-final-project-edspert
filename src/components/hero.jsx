import { Flex, Image } from "@chakra-ui/react";
import Frame from "../assets/Frame.png";
export default function Hero() {
  return (
    <>
      <Flex w="100%" height="476px" bgColor={"#2C3F58"}>
        <Flex
          display=" inline-flex"
          height="476px"
          alignItems="flex-start"
          flexShrink="0"
        >
          <Flex
            display="flex"
            height="476px"
            padding="0px 100px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="27px"
          >
            <Flex
              color="var(--neutral-full-white, #FFF)"
              fontFamily="Be Vietnam Pro"
              fontSize="42px"
              fontStyle="normal"
              font-weight="600"
              line-height="50px"
              width="603px"
            >
              {" "}
              Jadi expert bersama edspert.id
            </Flex>
            <Flex
              color="var(--neutral-off-white, #FCFCFC)"
              fontFamily="Be Vietnam Pro"
              width="603px"
              fontSize="16px"
              fontStyle="normal"
              font-weight="400"
              line-height="24px"
            >
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
              bidangnya, untuk siapkan karir impian anda.
            </Flex>
          </Flex>
          <Image width="636px" height="480px" flex-shrink="0" src={Frame} />
        </Flex>
      </Flex>
    </>
  );
}
