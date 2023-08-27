import {
  Button,
  Flex,
  Image,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  Link,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import atas from "../assets/atas.png";
import mandiri from "../assets/mandiri.png";
import bca from "../assets/bca.png";
import product from "../assets/product.png";
import Frame from "../assets/Frame.png";
export default function IntruksiBayar() {
  return (
    <>
      <Flex
        display="flex"
        width="100%"
        height="971px"
        padding="50px 60px"
        flexDirection="column"
        justifyContent="center"
        gap="20px"
        flex-shrink="0"
        background="#EFF4FA"
      >
        <Flex
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="28px"
        >
          <Flex display="flex" alignItems="center" gap="22px">
            <Link as={ReachLink} to={`/checkout`}>
              <Image src={leftArrow} width="24px" height="12px" />
            </Link>
            <Link as={ReachLink} to={`/checkout`}>
              <Flex
                color="var(--text-subdued, #6D7175)"
                fontFamily="Mulish"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="22px"
              >
                Checkout
              </Flex>
            </Link>
            <Image src={rightArrow} width="4px" height="9px" />
            <Link as={ReachLink} to={`/instruksi-bayar`}>
              <Flex
                color="var(--border-primary, #1097E7)"
                fontFamily="Mulish"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="22px"
              >
                Instruksi Bayar
              </Flex>
            </Link>
          </Flex>
          <Flex
            color="var(--text-default, #131313)"
            fontFamily="Mulish"
            fontSize="28px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="32px"
          >
            Instruksi Bayar
          </Flex>
        </Flex>
        <Flex
          display="flex"
          flexDirection="column"
          //   justifyContent="center"
          //   alignItems="center"
        >
          <Flex
            display="flex"
            height="461px"
            justifyContent="center"
            alignItems="center"
            gap="100px"
            borderRadius="20px 20px 0px 0px"
            background="#FFF"
          >
            <Flex width="573px" height="464px" flex-shrink="0">
              <Flex
                display="flex"
                width="570px"
                height="464px"
                padding="0px 75px"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gap="17px"
                flex-shrink="0"
              >
                <Flex display="flex" alignItems="center" gap="18px">
                  <Center
                    width="119px"
                    height="110px"
                    flex-shrink="0"
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
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="13px"
                >
                  <Flex
                    color="var(--text-default, #131313)"
                    fontFamily="Mulish"
                    fontSize="20px"
                    font-style="normal"
                    fontWeight="700"
                    lineHeight="28px"
                  >
                    Metode Pembayaran
                  </Flex>
                  <Flex
                    color="var(--text-subdued, #6D7175)"
                    fontFamily="Mulish"
                    fontSize="16px"
                    font-style="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Bank Transfer (verifikasi manual)-Mandiri
                  </Flex>
                </Flex>
                <Flex display="flex" alignItems="center" gap="30px">
                  <Image src={mandiri} width="72px" height="21.176px" />
                  <Flex
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    gap="5px"
                  >
                    <Flex
                      color="var(--text-default, #131313)"
                      fontFamily="Mulish"
                      fontSize="16px"
                      font-style="normal"
                      fontWeight="600"
                      lineHeight="20px"
                    >
                      No Rek. 137000299089
                    </Flex>
                    <Flex
                      color="#6D7175"
                      fontFamily="Mulish"
                      fontSize="16px"
                      font-style="normal"
                      fontWeight="500"
                      lineHeight="20px"
                    >
                      a.n. PT Widya Kreasi Bangsa
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  color="var(--text-subdued, #6D7175)"
                  fontFamily="Mulish"
                  fontSize="16px"
                  font-style="normal"
                  fontWeight="400"
                  lineHeight="24px"
                >
                  Nominal yang harus dibayar senilai:
                </Flex>
                <Flex
                  color="var(--text-default, #131313)"
                  fontFamily="Mulish"
                  fontSize="24px"
                  font-style="normal"
                  fontWeight="600"
                  lineHeight="28px"
                >
                  Rp. 860.000
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              width="591px"
              height="460px"
              padding="0px 75px"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              gap="19px"
              flex-shrink="0"
            >
              <Flex
                color="var(--text-default, #131313)"
                fontFamily="Mulish"
                fontSize="20px"
                font-style="normal"
                fontWeight="700"
                lineHeight="28px"
              >
                Instruksi Pembayaran
              </Flex>
              <Tabs>
                <TabList>
                  <Tab>
                    <Flex
                      color="var(--text-default, #131313)"
                      fontFamily="Mulish"
                      fontSize="20px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="28px"
                    >
                      ATM
                    </Flex>
                  </Tab>
                  <Tab>
                    <Flex
                      color="var(--text-default, #131313)"
                      fontFamily="Mulish"
                      fontSize="20px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="28px"
                    >
                      Internet Banking
                    </Flex>
                  </Tab>
                  <Tab>
                    <Flex
                      color="var(--text-default, #131313)"
                      fontFamily="Mulish"
                      fontSize="20px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="28px"
                    >
                      M-Banking
                    </Flex>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Flex
                      color="var(--text-default, #131313)"
                      fontFamily="Mulish"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                    >
                      <OrderedList>
                        <ListItem>
                          Masukkan kartu ke mesing ATM Mandiri.
                        </ListItem>
                        <ListItem>Pilih Bahasa.</ListItem>
                        <ListItem>Masukkan PIN ATM.</ListItem>
                        <ListItem> Pilih menu transaksi lainnya.</ListItem>
                        <ListItem>
                          {" "}
                          Pilih menu “Transfer”, lalu pilih ke relk Mandiri.
                        </ListItem>
                        <ListItem>Masukkan no rekening yang dituju.</ListItem>
                        <ListItem>
                          Masukkan nominal jumlah uang yang akan di transfer.
                        </ListItem>
                        <ListItem>
                          {" "}
                          Layar ATM akan menampilkan data transaksi anda, jika
                          data sudah benar pilih “YA”.
                        </ListItem>
                        <ListItem>
                          {" "}
                          Selesai, struk akan keluar dari mesin ATM.
                        </ListItem>
                      </OrderedList>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <OrderedList>
                      <ListItem>Masukkan kartu ke mesing ATM Mandiri.</ListItem>
                      <ListItem>Pilih Bahasa.</ListItem>
                      <ListItem>Masukkan PIN ATM.</ListItem>
                      <ListItem> Pilih menu transaksi lainnya.</ListItem>
                      <ListItem>
                        {" "}
                        Pilih menu “Transfer”, lalu pilih ke relk Mandiri.
                      </ListItem>
                      <ListItem>Masukkan no rekening yang dituju.</ListItem>
                      <ListItem>
                        Masukkan nominal jumlah uang yang akan di transfer.
                      </ListItem>
                      <ListItem>
                        {" "}
                        Layar ATM akan menampilkan data transaksi anda, jika
                        data sudah benar pilih “YA”.
                      </ListItem>
                      <ListItem>
                        {" "}
                        Selesai, struk akan keluar dari mesin ATM.
                      </ListItem>
                    </OrderedList>
                  </TabPanel>
                  <TabPanel>
                    <OrderedList>
                      <ListItem>Masukkan kartu ke mesing ATM Mandiri.</ListItem>
                      <ListItem>Pilih Bahasa.</ListItem>
                      <ListItem>Masukkan PIN ATM.</ListItem>
                      <ListItem> Pilih menu transaksi lainnya.</ListItem>
                      <ListItem>
                        {" "}
                        Pilih menu “Transfer”, lalu pilih ke relk Mandiri.
                      </ListItem>
                      <ListItem>Masukkan no rekening yang dituju.</ListItem>
                      <ListItem>
                        Masukkan nominal jumlah uang yang akan di transfer.
                      </ListItem>
                      <ListItem>
                        {" "}
                        Layar ATM akan menampilkan data transaksi anda, jika
                        data sudah benar pilih “YA”.
                      </ListItem>
                      <ListItem>
                        {" "}
                        Selesai, struk akan keluar dari mesin ATM.
                      </ListItem>
                    </OrderedList>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            height="236px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="34px"
            borderRadius="0px 0px 20px 20px"
            background="#2B3E58"
          >
            <Flex
              color="#FFF"
              fontFamily="Be Vietnam Pro"
              fontSize="14px"
              font-style="normal"
              fontWeight="700"
              lineHeight="20px"
            >
              Sudah Transfer? Lakukan verifikasi pembayaran segera!
            </Flex>
            <Button
              display="flex"
              width="231px"
              height="52.613px"
              padding="10px 24px"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              flex-shrink="0"
              borderRadius="50px"
              background="var(--secondary-yellow, #FCBC30)"
            >
              {" "}
              Verifikasi Pembayaran
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
