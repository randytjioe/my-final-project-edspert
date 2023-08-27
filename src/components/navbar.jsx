import { Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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
        <Flex
          color="#FFF"
          fontFamily="Be Vietnam Pro"
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
        >
          {" "}
          LOGO
        </Flex>
        <Flex
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Button
            color="#FFF"
            fontFamily="Be Vietnam Pro"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            bgColor="#2C3F58"
            _hover={{ bgColor: "#FFF", color: "#2C3F58" }}
            onClick={() => navigate("/")}
          >
            Product
          </Button>
          <Button
            color="#FFF"
            fontFamily="Be Vietnam Pro"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            bgColor="#2C3F58"
            _hover={{ bgColor: "#FFF", color: "#2C3F58" }}
            onClick={() => navigate("/checkout")}
          >
            CheckOut
          </Button>
          <Button
            color="#FFF"
            fontFamily="Be Vietnam Pro"
            fontSize="20px"
            bgColor="#2C3F58"
            _hover={{ bgColor: "#FFF", color: "#2C3F58" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            onClick={() => navigate("/instruksi-bayar")}
          >
            Instruksi Bayar
          </Button>
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
