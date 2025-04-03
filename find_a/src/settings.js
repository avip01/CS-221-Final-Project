import React from 'react';
import {
    Box,
    Container,
    Heading,
    VStack,
    HStack,
    Text,
    Switch,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    useColorMode,
    Divider,
    Icon,
    Flex
} from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';

const SettingsPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Container maxW="container.xl" py={8} px={4} bg="gray.100" minH="100vh">
            <VStack spacing={8} align="center" w="full">
                {/* Header */}
                <HStack spacing={2} justifyContent="center">
                    <Heading size="xl">Settings</Heading>
                    <Icon as={FiSettings} boxSize={8} />
                </HStack>

                {/* Main Content Container */}
                <Flex
                    w="full"
                    direction={{ base: 'column', md: 'row' }}
                    gap={6}
                    justify="space-between"
                >
                    {/* Left Column */}
                    <VStack
                        spacing={6}
                        align="stretch"
                        flex="1"
                        maxW={{ md: '450px' }}
                    >
                        {/* Appearance Section */}
                        <Box
                            bg="green.700"
                            py={3}
                            px={5}
                            borderRadius="md"
                            color="white"
                        >
                            <Text fontSize="lg" fontWeight="medium">Appearance:</Text>
                        </Box>

                        {/* Dark Mode Toggle */}
                        <Box>
                            <HStack spacing={4} mb={3}>
                                <Box
                                    bg="green.700"
                                    py={2}
                                    px={4}
                                    borderRadius="full"
                                    color="white"
                                    w="180px"
                                >
                                    <Text textAlign="center">
                                        Dark Mode Toggle {isDark ? 'on' : 'off'}
                                    </Text>
                                </Box>
                                <Switch
                                    isChecked={isDark}
                                    onChange={toggleColorMode}
                                    colorScheme="green"
                                />
                            </HStack>

                            {/* Font Size */}
                            <HStack spacing={4}>
                                <Box
                                    bg="green.700"
                                    py={2}
                                    px={4}
                                    borderRadius="full"
                                    color="white"
                                    w="180px"
                                >
                                    <Text textAlign="center">Font Size</Text>
                                </Box>
                                <Slider
                                    defaultValue={50}
                                    colorScheme="green"
                                    w="120px"
                                >
                                    <SliderTrack bg="gray.300">
                                        <SliderFilledTrack bg="green.500" />
                                    </SliderTrack>
                                    <SliderThumb boxSize={4} bg="white" />
                                </Slider>
                            </HStack>
                        </Box>

                        {/* Notifications Section */}
                        <Box
                            bg="green.700"
                            py={3}
                            px={5}
                            borderRadius="md"
                            color="white"
                            mt={6}
                        >
                            <Text fontSize="lg" fontWeight="medium">Notifications:</Text>
                        </Box>

                        {/* Email Notifications */}
                        <HStack spacing={4}>
                            <Box
                                bg="green.700"
                                py={2}
                                px={4}
                                borderRadius="full"
                                color="white"
                                w="180px"
                            >
                                <Text textAlign="center">Toggle Email Notifications</Text>
                            </Box>
                            <Switch colorScheme="green" />
                        </HStack>

                        {/* Phone Notifications */}
                        <HStack spacing={4}>
                            <Box
                                bg="green.700"
                                py={2}
                                px={4}
                                borderRadius="full"
                                color="white"
                                w="180px"
                            >
                                <Text textAlign="center">Toggle Phone Notifications</Text>
                            </Box>
                            <Switch colorScheme="green" />
                        </HStack>
                    </VStack>

                    {/* Right Column */}
                    <VStack
                        spacing={6}
                        align="stretch"
                        flex="1"
                        maxW={{ md: '450px' }}
                    >
                        {/* Account Settings Section */}
                        <Box
                            bg="green.700"
                            py={3}
                            px={5}
                            borderRadius="md"
                            color="white"
                        >
                            <Text fontSize="lg" fontWeight="medium">Account Settings:</Text>
                        </Box>

                        {/* Email Button */}
                        <Button
                            bg="green.700"
                            color="white"
                            _hover={{ bg: 'green.600' }}
                            size="md"
                            borderRadius="md"
                            w="130px"
                        >
                            Email:
                        </Button>

                        {/* Password Button */}
                        <Button
                            bg="green.700"
                            color="white"
                            _hover={{ bg: 'green.600' }}
                            size="md"
                            borderRadius="md"
                            w="130px"
                        >
                            Password:
                        </Button>

                        {/* Delete Account Button */}
                        <Button
                            bg="green.700"
                            color="white"
                            _hover={{ bg: 'green.600' }}
                            size="md"
                            borderRadius="md"
                            w="160px"
                        >
                            Delete Account
                        </Button>

                        {/* Reset 2FA Button */}
                        <Button
                            bg="green.700"
                            color="white"
                            _hover={{ bg: 'green.600' }}
                            size="md"
                            borderRadius="md"
                            w="130px"
                        >
                            Reset 2FA
                        </Button>

                        {/* Privacy Section */}
                        <Box
                            bg="green.700"
                            py={3}
                            px={5}
                            borderRadius="md"
                            color="white"
                            mt={4}
                        >
                            <Text fontSize="lg" fontWeight="medium">Privacy</Text>
                        </Box>

                        {/* Profile Visibility */}
                        <HStack spacing={4} align="center">
                            <Box
                                bg="green.700"
                                py={2}
                                px={4}
                                borderRadius="full"
                                color="white"
                                w="160px"
                            >
                                <Text textAlign="center">Profile Visibility</Text>
                            </Box>
                            <Text fontSize="sm" color="gray.700">Private</Text>
                            <Switch colorScheme="green" />
                            <Text fontSize="sm" color="gray.700">Public</Text>
                        </HStack>
                    </VStack>
                </Flex>
            </VStack>
        </Container>
    );
};

export default SettingsPage;