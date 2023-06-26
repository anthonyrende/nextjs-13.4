"use client";

import { useChat } from "ai/react";

import {
  Container,
  Stack,
  Input,
  FormControl,
  FormLabel,
  Button,
  Box,
} from "@chakra-ui/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <Container width="100%" rounded={"md"} shadow={"xl"}>
      <Stack>
        {messages.map((m) => (
          <Box key={m.id}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </Box>
        ))}
        <form onSubmit={handleSubmitForm}>
          <FormControl>
            <FormLabel>
              Say something...
              <Input
                shadow={"xl"}
                value={input}
                my={3}
                p="5"
                onChange={handleInputChange}
              />
            </FormLabel>
            <Button
              colorScheme="blue"
              variant="outline"
              color={"blue.100"}
              type="submit"
              p="4"
            >
              Send
            </Button>
          </FormControl>
        </form>
      </Stack>
    </Container>
  );
}
