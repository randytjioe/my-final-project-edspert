import {
  Flex,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { Link as ReachLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        bgColor="#2C3F58"
        width="100%"
        height="106px"
        px="110px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link as={ReachLink} to="/">
          <Flex
            color="#FFF"
            fontFamily="Be Vietnam Pro"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            LOGO
          </Flex>
        </Link>
        <Flex
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Menu fontFamily="Be Vietnam Pro">
            <MenuButton
              as={Button}
              rightIcon={<IoIosArrowDown />}
              color="#FFF"
              fontFamily="Be Vietnam Pro"
              fontSize="20px"
              bgColor="#2C3F58"
              _hover={{ bgColor: "#FFF", color: "#2C3F58" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
            >
              Program
            </MenuButton>
            <MenuList fontFamily="Be Vietnam Pro">
              <MenuItem>Online Course</MenuItem>
              <MenuItem>Mini Bootcamp</MenuItem>
              <MenuItem>Bootcamp</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoIosArrowDown />}
              color="#FFF"
              fontFamily="Be Vietnam Pro"
              fontSize="20px"
              bgColor="#2C3F58"
              _hover={{ bgColor: "#FFF", color: "#2C3F58" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
            >
              Bidang Ilmu
            </MenuButton>
            <MenuList fontFamily="Be Vietnam Pro">
              <MenuItem>Digital Marketing</MenuItem>
              <MenuItem>Product Management</MenuItem>
              <MenuItem>English</MenuItem>
              <MenuItem>Programming</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoIosArrowDown />}
              color="#FFF"
              fontFamily="Be Vietnam Pro"
              fontSize="20px"
              bgColor="#2C3F58"
              _hover={{ bgColor: "#FFF", color: "#2C3F58" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
            >
              Tentang Edspert
            </MenuButton>
            <MenuList fontFamily="Be Vietnam Pro">
              <MenuItem>Bantuan</MenuItem>
              <MenuItem>Kontak Kami</MenuItem>
              <MenuItem>Media Sosial</MenuItem>
            </MenuList>
          </Menu>
          <Button
            display="flex"
            width="148px"
            height="48px"
            fontFamily="Be Vietnam Pro"
            padding="10px 24px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            color="white"
            borderRadius="50px"
            background="var(--utility-failed, #FF6161)"
            _hover={{
              bgColor: "#FFF",
              color: "var(--utility-failed, #FF6161)",
            }}
          >
            Masuk/Daftar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
