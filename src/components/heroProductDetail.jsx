import { Flex, Image } from "@chakra-ui/react";
import Frame from "../assets/Frame.png";
export default function HeroProductDetail() {
  return (
    <>
      {" "}
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
            padding="100px 100px"
            flexDirection="column"
            // justifyContent="center"
            // alignItems="center"
            gap="27px"
          >
            <Flex
              color="var(--neutral-full-white, #FFF)"
              fontFamily="Be Vietnam Pro"
              fontSize="60px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="60px"
            >
              {" "}
              Programming Laravel
            </Flex>
            <Flex
              color="var(--neutral-full-white, #FFF)"
              fontFamily="Be Vietnam Pro"
              fontSize="42px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="60px"
            >
              Getting Started with Laravel 9
            </Flex>
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="12px"
            >
              <Flex
                color="var(--neutral-off-white, #FCFCFC)"
                fontFamily="Be Vietnam Pro"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Mentor
              </Flex>
              <Flex
                display="flex"
                width="718px"
                alignItems="flex-start"
                gap="100px"
              >
                <Flex flexDir="column">
                  <Flex
                    color="var(--neutral-off-white, #FCFCFC)"
                    fontFamily="Be Vietnam Pro"
                    fontSize="25px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="30px"
                  >
                    William Hartono
                  </Flex>
                  <Flex
                    color="var(--neutral-off-white, #FCFCFC)"
                    fontFamily="Be Vietnam Pro"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="30px"
                  >
                    Developer at Widya Edu
                  </Flex>
                </Flex>
                <Flex flexDir="column">
                  <Flex
                    color="var(--neutral-off-white, #FCFCFC)"
                    fontFamily="Be Vietnam Pro"
                    fontSize="25px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="30px"
                  >
                    Farel Prayoga
                  </Flex>
                  <Flex
                    color="var(--neutral-off-white, #FCFCFC)"
                    fontFamily="Be Vietnam Pro"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="30px"
                  >
                    Developer at Widya Edu
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Image width="636px" height="480px" flex-shrink="0" src={Frame} />
        </Flex>
      </Flex>
    </>
  );
}
