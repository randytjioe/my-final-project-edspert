import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import atas from "../assets/atas.png";
import mandiri from "../assets/mandiri.png";
import bca from "../assets/bca.png";
import product from "../assets/product.png";
import {
  Flex,
  Image,
  Radio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  RadioGroup,
  Center,
  Input,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
export default function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        display="flex"
        width="100%"
        height="1173px"
        padding="50px 60px"
        flexDirection="column"
        alignItems="flex-start"
        gap="39px"
        flexShrink="0"
        background="#EFF4FA"
      >
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="28px"
        >
          <Flex display="flex" alignItems="center" gap="22px">
            <Link as={ReachLink} to={`/detail/${localStorage.getItem("id")}`}>
              <Image src={leftArrow} width="24px" height="12px" />
            </Link>
            <Flex
              color="var(--border-primary, #1097E7)"
              fontFamily="Mulish"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="22px"
            >
              Checkout
            </Flex>
            <Image src={rightArrow} width="4px" height="9px" />
            <Flex
              color="var(--text-subdued, #6D7175)"
              fontFamily="Mulish"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="22px"
            >
              Instruksi Bayar
            </Flex>
          </Flex>
          <Flex
            color="var(--text-default, #131313)"
            fontFamily="Mulish"
            fontSize="28px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="32px"
          >
            Checkout
          </Flex>
        </Flex>
        <Flex display="flex" alignItems="flex-start" gap="31px">
          <Flex
            display="flex"
            width="587px"
            height="847px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="22px"
            borderRadius="20px"
            background="#FFF"
          >
            <Flex
              color="var(--text-default, #131313)"
              fontFamily="Mulish"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="28px"
            >
              Pilih Metode Pembayaran
            </Flex>

            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="10px"
            ></Flex>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left">
                      <Flex
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        gap="2px"
                      >
                        <Flex
                          color="var(--text-default, #131313)"
                          fontFamily="Mulish"
                          fontSize="14px"
                          fontStyle="normal"
                          fontWeight="600"
                          lineHeight="20px"
                        >
                          Bank Transfer (verifikasi manual)
                        </Flex>
                        <Flex
                          color=" var(--text-subdued, #6D7175)"
                          fontFamily="Mulish"
                          fontSize="12px"
                          fontStyle="normal"
                          fontWeight="400"
                          lineHeight="20px"
                        >
                          Pembayaran melalui Bank Transfer Mandiri atau BCA.
                          Metode bayar ini memerlukan verifikasi pembayaran
                          manual melalui Whatsapp
                        </Flex>
                      </Flex>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup defaultValue="1">
                    <Flex gap="22px" flexDir={"column"}>
                      <Flex
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        px="30px"
                        borderRadius="4px"
                        border="1px solid #C9CCCF"
                      >
                        <Radio colorScheme="red" value="1">
                          <Flex
                            display="flex"
                            width="489px"
                            height="56px"
                            padding="0px 30px"
                            alignItems="center"
                            gap="15px"
                          >
                            <Image src={mandiri} />{" "}
                            <Flex
                              color="var(--text-default, #131313)"
                              fontFamily="Mulish"
                              fontSize="14px"
                              fontStyle="normal"
                              fontWeight="600"
                              lineHeight="20px"
                            >
                              Bank Transfer ke Rek Bank Mandiri
                            </Flex>
                          </Flex>
                        </Radio>
                      </Flex>
                      <Flex
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        px="30px"
                        borderRadius="4px"
                        border="1px solid #C9CCCF"
                      >
                        <Radio colorScheme="red" value="2">
                          <Flex
                            display="flex"
                            width="489px"
                            height="56px"
                            padding="0px 30px"
                            alignItems="center"
                            gap="15px"
                          >
                            <Image src={bca} />{" "}
                            <Flex
                              color="var(--text-default, #131313)"
                              fontFamily="Mulish"
                              fontSize="14px"
                              fontStyle="normal"
                              fontWeight="600"
                              lineHeight="20px"
                            >
                              Bank Transfer ke Rek Bank BCA
                            </Flex>
                          </Flex>
                        </Radio>
                      </Flex>
                    </Flex>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Flex as="span" flex="1" textAlign="left">
                      <Flex
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        gap="2px"
                      >
                        <Flex
                          color="var(--text-default, #131313)"
                          fontFamily="Mulish"
                          fontSize="14px"
                          fontStyle="normal"
                          fontWeight="600"
                          lineHeight="20px"
                        >
                          Virtual Account (verifikasi otomatis)
                        </Flex>
                        <Flex
                          color=" var(--text-subdued, #6D7175)"
                          fontFamily="Mulish"
                          fontSize="12px"
                          fontStyle="normal"
                          fontWeight="400"
                          lineHeight="20px"
                        >
                          Pembayaran melalui virtual account berbagai bank.
                          Metode bayar ini akan diverifikasi secara otomatis.
                        </Flex>
                      </Flex>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup defaultValue="1">
                    <Flex gap="22px" flexDir={"column"}>
                      <Flex
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        px="30px"
                        borderRadius="4px"
                        border="1px solid #C9CCCF"
                      >
                        <Radio colorScheme="red" value="1">
                          <Flex
                            display="flex"
                            width="489px"
                            height="56px"
                            padding="0px 30px"
                            alignItems="center"
                            gap="15px"
                          >
                            <Image src={mandiri} />{" "}
                            <Flex
                              color="var(--text-default, #131313)"
                              fontFamily="Mulish"
                              fontSize="14px"
                              fontStyle="normal"
                              fontWeight="600"
                              lineHeight="20px"
                            >
                              Virtual Account Mandiri
                            </Flex>
                          </Flex>
                        </Radio>
                      </Flex>
                      <Flex
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        px="30px"
                        borderRadius="4px"
                        border="1px solid #C9CCCF"
                      >
                        <Radio colorScheme="red" value="2">
                          <Flex
                            display="flex"
                            width="489px"
                            height="56px"
                            padding="0px 30px"
                            alignItems="center"
                            gap="15px"
                          >
                            <Image src={bca} />{" "}
                            <Flex
                              color="var(--text-default, #131313)"
                              fontFamily="Mulish"
                              fontSize="14px"
                              fontStyle="normal"
                              fontWeight="600"
                              lineHeight="20px"
                            >
                              Virtual Account BCA
                            </Flex>
                          </Flex>
                        </Radio>
                      </Flex>
                    </Flex>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Flex
            display="flex"
            width="715px"
            height="847px"
            padding="50px"
            flexDirection="column"
            alignItems="flex-start"
            gap="32px"
            borderRadius="20px"
            background="#FFF"
          >
            {" "}
            <Flex
              color="var(--text-default, #131313)"
              fontFamily="Mulish"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="28px"
            >
              Ringkasan Pesanan
            </Flex>
            <Flex display="flex" alignItems="center" gap="18px">
              <Center
                width="119px"
                height="110px"
                flexShrink="0"
                borderRadius="5px"
                background="#2B3E58"
              >
                <Image src={product} width="68.986px" height="91.408px" />
              </Center>
              <Flex
                display="flex"
                width="314px"
                alignItems="flex-end"
                alignContent="flex-end"
                gap="3px 12px"
                flexWrap="wrap"
              >
                <Flex flexDir={"column"}>
                  <Flex
                    color="#000"
                    fontFamily="Mulish"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="800"
                    lineHeight="25px"
                  >
                    Programming Laravel
                  </Flex>
                  <Flex
                    color="#000"
                    fontFamily="Mulish"
                    fontSize="17px"
                    fontStyle="normal"
                    fontWeight="800"
                    lineHeight="25px"
                  >
                    Getting Started with Laravel 9
                  </Flex>
                </Flex>
                <Flex gap="12px">
                  <Flex
                    color="rgba(0, 0, 0, 0.50)"
                    fontFamily="Mulish"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="20px"
                  >
                    Batch
                  </Flex>
                  <Flex
                    color="#000"
                    fontFamily="Mulish"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="20px"
                  >
                    September 2022
                  </Flex>
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
                </Flex>
                <Flex
                  color=" #000"
                  fontFamily="Mulish"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  William Hartono, Farel Prayoga
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              height="74px"
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="flex-start"
              gap="6px"
              flexShrink="0"
            >
              <Flex
                display="flex"
                width="445px"
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
              >
                <Flex
                  color="#131313"
                  fontFamily="Mulish"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="20px"
                >
                  Kode Promo
                </Flex>
              </Flex>
              <Flex display="flex" alignItems="flex-end" gap="6px" flex="1 0 0">
                <Input
                  display="flex"
                  width="445px"
                  height="48px"
                  padding="10px 10px 10px 12px"
                  alignItems="center"
                  gap="10px"
                  alignSelf="stretch"
                  borderRadius="4px 0px 0px 4px"
                  background="var(--surface-default, #FFF)"
                  placeholder="Masukkan kode promo"
                />{" "}
                <Button
                  display="flex"
                  width="99px"
                  height="48px"
                  padding="10px 16px"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="10px"
                  _hover={{ color: "#2A61A8", background: "white" }}
                  borderRadius="0px 4px 4px 0px"
                  border="1px solid #ABB0B5"
                  background="#2A61A8"
                  color="white"
                >
                  Terapkan
                </Button>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="17px"
            >
              <Flex
                color="#131313"
                fontFamily="Mulish"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="14px"
              >
                {" "}
                Metode Pembayaran
              </Flex>
              <Flex
                color="var(--text-default, #131313)"
                fontFamily="Mulish"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="14px"
              >
                Bank Transfer (verifikasi manual)-Mandiri
              </Flex>
            </Flex>
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="14px"
            >
              <Flex
                color="#131313"
                fontFamily="Mulish"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="14px"
              >
                {" "}
                Ringkasan Pembayaran
              </Flex>
              <Flex gap="18px" flexDir={"column"}>
                <Flex gap="8px" flexShrink="0" flexDir={"column"}>
                  <Flex
                    height="24px"
                    flexShrink="0"
                    width="555px"
                    justifyContent={"space-between"}
                  >
                    <Flex
                      color="#131313"
                      fontFamily="Mulish"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                    >
                      Harga Kelas
                    </Flex>
                    <Flex
                      color="var(--text-default, #131313)"
                      textAlign="right"
                      fontFamily="Mulish"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="22px"
                    >
                      Rp. 700.000
                    </Flex>
                  </Flex>
                  <Flex
                    height="24px"
                    flexShrink="0"
                    width="555px"
                    justifyContent={"space-between"}
                  >
                    <Flex
                      color="#131313"
                      fontFamily="Mulish"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                    >
                      Potongan
                    </Flex>
                    <Flex
                      color="var(--text-default, #131313)"
                      textAlign="right"
                      fontFamily="Mulish"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="22px"
                    >
                      Rp. 200.000
                    </Flex>
                  </Flex>
                  <Flex
                    height="24px"
                    flexShrink="0"
                    width="555px"
                    justifyContent={"space-between"}
                  >
                    <Flex
                      color="#131313"
                      fontFamily="Mulish"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                    >
                      Promo
                    </Flex>
                    <Flex
                      color="var(--text-default, #131313)"
                      textAlign="right"
                      fontFamily="Mulish"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="22px"
                    >
                      -
                    </Flex>
                  </Flex>
                  <Flex
                    height="24px"
                    flexShrink="0"
                    width="555px"
                    justifyContent={"space-between"}
                  >
                    <Flex
                      color="#131313"
                      fontFamily="Mulish"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                    >
                      Kode Unik
                    </Flex>
                    <Flex
                      color="var(--text-default, #131313)"
                      textAlign="right"
                      fontFamily="Mulish"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="22px"
                    >
                      Rp. 100.000
                    </Flex>
                  </Flex>
                </Flex>
                <Divider borderColor="black" />
                <Flex
                  height="24px"
                  flexShrink="0"
                  width="555px"
                  justifyContent={"space-between"}
                >
                  <Flex
                    color="#131313"
                    fontFamily="Mulish"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="800"
                    lineHeight="24px"
                  >
                    Total Pembayaran
                  </Flex>
                  <Flex
                    color="var(--text-default, #131313)"
                    textAlign="right"
                    fontFamily="Mulish"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="22px"
                  >
                    Rp. 400.000
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              color="var(--text-default, #131313)"
              fontFamily="Mulish"
              fontSize="14px"
              font-style="normal"
              fontWeight="400"
              lineHeight="20px"
            >
              Dengan menekan tombol Bayar kamu telah menyetujui syarat dan
              ketentuan yang berlaku, silahkan baca kembali Syarat & ketentuan
              yang berlaku.
            </Flex>
            <Flex display="flex" alignItems="center" gap="282px">
              <Flex display="flex" alignItems="center" gap="8px">
                <Image src={leftArrow} width="4px" height="9px" />
                <Flex
                  color="var(--text-default, #131313)"
                  fontFamily="Mulish"
                  fontSize="14px"
                  font-style="normal"
                  fontWeight="600"
                  lineHeight="20px"
                >
                  Batalkan
                </Flex>
              </Flex>
              <Button
                display="flex"
                width="205px"
                height="48px"
                padding="10px 16px"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                _hover={{
                  color: "#2A61A8",
                  background: "white",
                  border: "1px solid #2A61A8",
                }}
                borderRadius="50px"
                background="#2A61A8"
                color="white"
                onClick={(val) => {
                  navigate("/instruksi-bayar");
                }}
              >
                Bayar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
