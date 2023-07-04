import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading as="h2" size="xl">
          Opps
        </Heading>
        <Text fontSize="xl">
          {isRouteErrorResponse(error)
            ? "This Page Does Not Exist."
            : "Something Went Wrong!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
