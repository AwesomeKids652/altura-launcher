import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { BiWinkSmile } from "react-icons/bi";

const SomeText = () => {
  return (
    <Box textAlign="center">
      <Heading>
        Altura Client
      </Heading>
      <Text>
        This is a working beta application. don't expect much!
      </Text>
    </Box>
  );
};
function startGame() {
  console.log('fuck');
}
export default SomeText;
