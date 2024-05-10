/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Icon, Text } from '@gluestack-ui/themed';
import documentImage from '@assets/document-data.svg';
import gradientImage from '@assets/gradient.svg';
import lightbulbImage from '@assets/lightbulb-person.svg';
import logo from '@assets/logo.svg';
import rocketImage from '@assets/rocket.svg';

const FeatureCard = ({ iconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Icon as={iconSvg} width={22} height={22} />
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  return (
    <Box flex={1} bg="$black" h="100%">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box
          position="absolute"
          $base-h={500}
          $base-w={500}
          $lg-h={700}
          $lg-w={700}
        >
          <Icon as={gradientImage} h="100%" w="100%" />
        </Box>
        <Box
          flex={1}
          $base-my="$16"
          $base-mx="$5"
          $base-h="80%"
          $lg-my="$24"
          $lg-mx="$32"
          alignItems="center"
        >
          <Box
            bg="#64748B33"
            py="$2"
            px="$6"
            rounded="$full"
            alignItems="center"
            $base-flexDirection="column"
            $sm-flexDirection="row"
            $md-alignSelf="flex-start"
          >
            <Text color="$white" fontWeight="$normal">
              Get started by editing
            </Text>
            <Text color="$white" fontWeight="$medium" ml="$2">
              App.tsx
            </Text>
          </Box>
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            $base-h={60}
            $base-w={300}
            $lg-h={160}
            $lg-w={400}
          >
            <Icon as={logo} />
          </Box>
          <Box $base-flexDirection="column" $md-flexDirection="row">
            <FeatureCard
              iconSvg={documentImage}
              name="Docs"
              desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
              iconSvg={lightbulbImage}
              name="Learn"
              desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
              iconSvg={rocketImage}
              name="Deploy"
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

function App() {
  const backgroundStyle = {
    backgroundColor: '#000000',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GluestackUIProvider config={config}>
        <Box height="100%">
          <Container />
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
