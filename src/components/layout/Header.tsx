import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Link to="/">
        <Heading as="h1" size="sm">
          Altura Launcher
        </Heading>
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
