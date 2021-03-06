import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Flex,
  Button,
} from "@chakra-ui/react";
const AlertMessageFail = (props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="20px"
    >
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Something went wrong!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Please try again. To close this window please click the button below
        </AlertDescription>
      </Alert>
      <Button
        onClick={() => props.setResultOfPost("")}
        m="10px"
        rightIcon={"X"}
        colorScheme="gray"
        variant="outline"
      >
        Close
      </Button>
    </Flex>
  );
};

export default AlertMessageFail;
