import { Box, Flex, Image, Link, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import {AddIcon, CloseIcon} from "@chakra-ui/icons"
const SomeImage = () => {
  return (
    <>
      <Box textAlign="center" marginX="auto" maxWidth={[280, 400]}>
      <ButtonGroup size='md' isAttached variant='outline'>
      <Button mr='-px'>Launch</Button>
      <IconButton aria-label='Add to friends' icon={<CloseIcon/>} />
      </ButtonGroup>
      </Box>

      <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
        <Image
          src="/assets/vite-logo.svg"
          label="vite"
          height={33}
          width={33}
        />
        <Image
          src="/assets/react-icon.svg"
          label="react"
          height={33}
          width={33}
        />
        <Image
          src="/assets/chakra-ui-logomark-colored.svg"
          label="Chakra UI"
          height={33}
          width={33}
        />
        <Image
          src="/assets/ts-logo-512.svg"
          label="TypeScript"
          height={33}
          width={33}
        />
      </Flex>
    </>
  );
};

export default SomeImage;
