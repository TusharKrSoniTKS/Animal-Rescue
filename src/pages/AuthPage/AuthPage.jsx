import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
	return (
		<Flex minH={"100vh"} justifyContent={"flex-end"} alignItems={"center"} px={4} backgroundImage={"/elven.png"}>
			<div>
			<Container maxW={"container.md"} padding={0} >
				<Flex justifyContent={"center"} alignItems={"center"} gap={10} backgroundColor={"#000"}>
					{/* Left hand-side */}
					

					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
						<AuthForm />
						<Box textAlign={"center"}>Get the app.</Box>
						<Flex gap={5} justifyContent={"center"}>
							<Image src='/playstore.png' h={"10"} alt='Playstore logo' />
							<Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
						</Flex>
					</VStack>
				</Flex>
			</Container>
			</div>
		</Flex>
	);
};

export default AuthPage;
