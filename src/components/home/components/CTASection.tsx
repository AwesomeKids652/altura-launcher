import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineRadarChart } from "react-icons/ai";

const CTASection = () => (
  <Box textAlign="center">
    <Link
      _hover={undefined}
      href="https://github.com/sozonome/vite-react-chakra-starter"
    >
      <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
    </Link>
      <Button leftIcon={<AiOutlineRadarChart/>} marginLeft="4">
        Come Chat with Us!
      </Button>

  </Box>
);

export default CTASection;
