import React from "react";
import { Box, Heading, Text, Image, Stack, VStack, HStack, Divider, Link, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Background from "../components/Background";

const Index = () => {
  return (
    <Background>
      <Box maxWidth="800px" margin="auto" padding={8}>
        <VStack spacing={8} align="center">
          <Image borderRadius="full" boxSize="200px" src="https://i.imgur.com/4Oj74Gk.jpg" alt="Ron Efroni" />
          <VStack spacing={2} align="center">
            <Heading as="h1" size="2xl">
              Ron Efroni
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Software Engineer at Flox
            </Text>
          </VStack>
          <HStack spacing={4}>
            <Link href="https://www.linkedin.com/in/ronefroni" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" variant="ghost" />
            </Link>
            <Link href="https://twitter.com/ronefroni" isExternal>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" size="lg" variant="ghost" />
            </Link>
            <Link href="https://github.com/ronefroni" isExternal>
              <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" variant="ghost" />
            </Link>
          </HStack>
          <Divider />
          <Stack spacing={4} align="start" width="100%">
            <Heading as="h2" size="xl">
              About Me
            </Heading>
            <Text>Hi, I'm Ron Efroni, a passionate software engineer at Flox. I love building scalable and user-friendly web applications using modern technologies. With expertise in JavaScript, React, and Node.js, I enjoy tackling complex problems and delivering high-quality solutions.</Text>
            <Text>At Flox, I work on developing innovative features and optimizing the performance of our platform. I collaborate closely with cross-functional teams to create seamless user experiences and drive business growth.</Text>
            <Text>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, and sharing my knowledge through blog posts and tech talks. I'm always eager to learn and grow as a developer.</Text>
          </Stack>
          <Divider />
          <Stack spacing={4} align="start" width="100%">
            <Heading as="h2" size="xl">
              Projects
            </Heading>
            <Stack spacing={6}>
              <Box>
                <Heading as="h3" size="lg">
                  Project 1
                </Heading>
                <Text>Description of Project 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget nunc.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  Project 2
                </Heading>
                <Text>Description of Project 2 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget nunc.</Text>
              </Box>
            </Stack>
          </Stack>
        </VStack>
      </Box>
    </Background>
  );
};

export default Index;
