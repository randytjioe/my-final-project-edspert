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
              Program
            </MenuButton>
            <MenuList>
              <MenuItem>Online Course</MenuItem>
              <MenuItem>Mini bootcamp</MenuItem>
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
              Bidang ilmu
            </MenuButton>
            <MenuList>
              <MenuItem>Digital marketing</MenuItem>
              <MenuItem>Product management</MenuItem>
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
              Tentang edspert
            </MenuButton>
            <MenuList>
              <MenuItem>Bantuan</MenuItem>
              <MenuItem>Kontak kami</MenuItem>
              <MenuItem>Media sosial</MenuItem>
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
