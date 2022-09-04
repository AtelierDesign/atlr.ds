import React from 'react';
import Link from 'next/link';
import { AppBar } from '../components/AppBar';
import { Box } from '../components/Box';
import { Space } from '../components/Space';
import { Flex } from '../components/Flex';
import { Badge } from '../components/Badge';
import { Banner } from '../components/Banner';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { InputwithLabel } from '../components/InputwithLabel';
import { Container } from '../components/Container';
import { HeadingText } from '../components/HeadingText';
import { Text } from '../components/Text';
import { IconButton } from '../components/IconButton';
import { Paragraph } from '../components/Paragraph';
import { Sup } from '../components/Sup';
import { Sub } from '../components/Sub';
import { Grid } from '../components/Grid';
import { AtelierSwitch } from '../components/Switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/Tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/Accordion';

// internals..
import { BasicAtelierToast, ColorSystem, DefaultDialog, ThemeSwitch } from '../internal';
import { ChatBubbleIcon, GitHubLogoIcon, GlobeIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

function System() {
  return (
    <>
      {/*  <!-- <!-- HIDDEN COMPONENTS --> --> */}

      {/* <!-- SIDEBAR QUICKNAV COMPONENT -->
          <QuickNav />
        // END ! SIDEBAR QUICKNAV COMPONENT --> */}
      {/*  <!-- <!-- END !  HIDDEN COMPONENTS --> --> */}

      <Box css={{ backgroundColor: '$loContrast' }}>
        {/* <!-- App Bar --> */}
        <AppBar
          size="1"
          color="transparent"
          glass="true"
          border="true"
          fixed="true"
          css={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 'auto' }}
        >
          <Link href="/" passHref>
            <Text
              size="2"
              css={{
                fontWeight: '600',
                letterSpacing: '-0.03rem',
                lineHeight: '32px',
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
            >
              home
            </Text>
          </Link>
          <Text
            size="2"
            css={{
              fontWeight: 'normal',
              textAlign: 'center',
              letterSpacing: '-0.03rem',
              lineHeight: '32px',
            }}
          >
            <strong>ATELIER</strong>® DS
          </Text>
          <ThemeSwitch />
        </AppBar>

        {/*END APPBAR*/}

        {/* <!-- EXAMPLE BANNER COMPONENT --> */}
        <Box css={{ padding: '6px', backgroundColor: '$loContrast' }}>
          <Banner id="banner" size="1" variant="suprLime" rounded="true">
            <Text size="2" css={{ fontWeight: 500 }}>
              Atelier Design Yield® – Example Banner
            </Text>
          </Banner>
        </Box>
        {/*END EXAMPLE BANNER COMPONENT*/}

        {/* <!-- HERO CONTAINER --> */}
        <Box css={{ bc: '$loContrast', height: 'auto' }}>
          <Section size="3" css={{}}>
            <Container size="4" css={{ paddingTop: '30px' }}>
              <Text
                as="h3"
                size="3"
                css={{ textAlign: 'center', marginBottom: '4px', fontSize: '36px', fontWeight: 'bold' }}
              >
                ATELIER® DS
              </Text>
              <Paragraph size="2" css={{ ta: 'center' }}>
                Environment for testing Atelier® DS.
              </Paragraph>
            </Container>
          </Section>
        </Box>
        {/*END HERO CONTAINER*/}

        {/* <!-- BEGIN SECTION DEMO --> */}
        <Box css={{ bc: '$loContrast', height: 'auto' }}>
          <Section size="3" css={{ bc: '$loContrast' }}>
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="lime">
                Section®
              </Badge>
            </Container>

            <Section size="3" css={{ bc: '$mauve4', marginBottom: '10px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '1',
                }}
              >
                Section Size 3
              </Text>
            </Section>

            <Section size="2" css={{ bc: '$mauve4', marginBottom: '10px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '1',
                }}
              >
                Section Size 2
              </Text>
            </Section>

            <Section size="1" css={{ bc: '$mauve4', marginBottom: '10px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '1',
                }}
              >
                Section Size 1
              </Text>
            </Section>
          </Section>
        </Box>
        {/*END ! SECTION DEMO*/}

        {/* <!-- BEGIN CONTAINER DEMO --> */}
        <Box css={{ bc: '$loContrast', height: 'auto' }}>
          <Section size="3" css={{ bc: '$loContrast' }}>
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="lime">
                Container®
              </Badge>
            </Container>

            <Container size="4" css={{ bc: '$mauve4', marginBottom: '10px', height: '38px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '38px',
                }}
              >
                Container Size 4 <strong>[ no maxWidth ]</strong>
              </Text>
            </Container>

            <Container size="3" css={{ bc: '$mauve4', marginBottom: '10px', height: '38px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '38px',
                }}
              >
                Container Size 3 <strong>[ maxWidth = '1145px' ]</strong>
              </Text>
            </Container>

            <Container size="2" css={{ bc: '$mauve4', marginBottom: '10px', height: '38px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '38px',
                }}
              >
                Container Size 2 <strong>[ maxWidth = '715px' ]</strong>
              </Text>
            </Container>

            <Container size="1" css={{ bc: '$mauve4', marginBottom: '10px', height: '38px' }}>
              <Text
                css={{
                  textAlign: 'center',
                  color: '$mauve9',
                  fontFamily: '$pragmatica',
                  fontSize: '9px',
                  lineHeight: '38px',
                }}
              >
                Container Size 1 <strong>[ maxWidth = '430px' ]</strong>
              </Text>
            </Container>
          </Section>
        </Box>
        {/*END ! CONTAINER DEMO*/}

        {/* <!-- BEGIN GRID DEMO --> */}
        <Box css={{ bc: '$loContrast', height: 'auto' }}>
          <Section size="3" css={{ bc: '$loContrast' }}>
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="lime">
                Responsive Grid®
              </Badge>
            </Container>
            <Container size="2">
              <Grid
                align="stretch"
                flow="row"
                columns="4"
                gap="2"
                css={{
                  '@md': {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                  },
                  '@sm': {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                  },
                }}
              >
                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 01
                  </Text>
                </Box>
                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 02
                  </Text>
                </Box>
                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 03
                  </Text>
                </Box>
                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 04
                  </Text>
                </Box>
              </Grid>
            </Container>
          </Section>
        </Box>
        {/*END ! GRID DEMO*/}

        {/* <!-- BEGIN FLEX DEMO --> */}
        <Box css={{ bc: '$loContrast', height: 'auto' }}>
          <Section size="3" css={{ bc: '$loContrast' }}>
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="lime">
                Flex®
              </Badge>
            </Container>
            <Container size="2">
              <Flex direction="row" align="stretch" justify="start" wrap="wrap" gap="4" css={{ marginBottom: '30px' }}>
                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 01
                  </Text>
                </Box>

                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 01
                  </Text>
                </Box>

                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 01
                  </Text>
                </Box>

                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 01
                  </Text>
                </Box>

                <Box
                  css={{
                    bc: '$mauve3',
                    width: 'auto',
                    height: '30px',
                    border: '1px solid $mauve5',
                    borderRadius: 6,
                    padding: 6,
                  }}
                >
                  <Text
                    css={{
                      textAlign: 'center',
                      color: '$mauve8',
                      paddingTop: '4px',
                      fontFamily: '$pragmatica',
                      fontSize: '9px',
                    }}
                  >
                    Box . 01
                  </Text>
                </Box>
              </Flex>
            </Container>
          </Section>
        </Box>
        {/*END ! FLEX DEMO*/}

        {/* <!-- BEGIN SPACE DEMO --> */}
        <Box css={{ height: 'auto' }}>
          <Section size="3" css={{ bc: '$loContrast' }}>
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="lime">
                Space®
              </Badge>
            </Container>
            <Container size="4" css={{ marginBottom: '10px' }}>
              <Space size="1" color="dev">
                <Text
                  css={{
                    textAlign: 'center',
                    color: '$mauve8',
                    paddingTop: '2px',
                    fontFamily: '$pragmatica',
                    fontSize: '9px',
                  }}
                >
                  Space / Size = 1 <strong>( 14px )</strong>
                </Text>
              </Space>
              <Space size="1" />
              <Space size="2" color="dev">
                <Text
                  css={{
                    textAlign: 'center',
                    color: '$mauve8',
                    paddingTop: '4px',
                    fontFamily: '$pragmatica',
                    fontSize: '9px',
                  }}
                >
                  Space / Size = 2 <strong>( 40px )</strong>
                </Text>
              </Space>
              <Space size="1" />
              <Space size="3" color="dev">
                <Text
                  css={{
                    textAlign: 'center',
                    color: '$mauve8',
                    paddingTop: '4px',
                    fontFamily: '$pragmatica',
                    fontSize: '9px',
                  }}
                >
                  Space / Size = 3 <strong>( 80px )</strong>
                </Text>
              </Space>
            </Container>
          </Section>
        </Box>
        {/*END ! SPACE DEMO*/}

        {/* <!-- BEGIN TYPOGRAPHY --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="blue">
                Type®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <HeadingText size="4" as="h4" font="pragmatica">
                  Heading 4
                </HeadingText>
                <HeadingText size="3" as="h3" font="pragmatica">
                  Heading 3
                </HeadingText>
                <HeadingText size="2" as="h2" font="inter">
                  Heading 2
                </HeadingText>
                <HeadingText size="1" as="h1" font="inter">
                  Heading 1
                </HeadingText>

                <Space size="1" />

                <Text size="4">Text size 4</Text>
                <Text size="3">Text size 3</Text>
                <Text size="2">Text size 2</Text>
                <Text size="1">Text size 1</Text>

                <Space size="1" />

                <Paragraph size="2">
                  This is a Paragraph size 2. Design in the target medium. Prototype with real components. Handoff
                  production code.
                </Paragraph>
                <Paragraph size="1">
                  This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose text, like for
                  example, the kind you might read in a blog post. The reason we're using prose here is because the most
                  common use case for this container size is longform text. So we're previewing some longform text here
                  so we can make sure the container width provides an optimal line length for this font size.
                </Paragraph>
                <Paragraph>
                  This is a Sup and Sub demo. The kind you might read in a blog post.<Sup>1</Sup> This is a really long
                  paragraph of text, to demonstrate prose text.<Sub>1</Sub>
                </Paragraph>
              </Flex>
            </Container>
          </Section>
        </Box>
        {/*END !  TYPOGRAPHY*/}

        {/* <!-- BEGIN BUTTONS --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="green">
                Button®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="row" align="stretch" justify="between" wrap="wrap">
                <Button as="a" href="/" size="1" variant="atelier" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="2" variant="atelier" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="3" variant="atelier" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
              </Flex>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="row" align="stretch" justify="between" wrap="wrap">
                <Button as="a" href="/" size="1" variant="blue" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="2" variant="blue" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="3" variant="blue" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
              </Flex>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="row" align="stretch" justify="between" wrap="wrap">
                <Button as="a" href="/" size="1" variant="green" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="2" variant="green" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="3" variant="green" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
              </Flex>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="row" align="stretch" justify="between" wrap="wrap">
                <Button as="a" href="/" size="1" variant="primary" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="2" variant="primary" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
                <Button as="a" href="/" size="3" variant="primary" css={{ marginRight: '10px' }}>
                  atelier button
                </Button>
              </Flex>
            </Container>
          </Section>
        </Box>
        {/*END ! BUTTON*/}

        {/* <!-- BEGIN ICON BUTTON --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="green">
                IconButton®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Text
                size={1}
                css={{
                  fontFamily: '$pragmatica',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '2px',
                  paddingBottom: '12px',
                  color: '$mauve9',
                }}
              >
                size one
              </Text>

              <Flex direction="row" align="stretch" justify="start" wrap="wrap" gap="4" css={{ marginBottom: '30px' }}>
                <IconButton as="a" href="/" size="1">
                  <GlobeIcon />
                </IconButton>

                <IconButton as="a" href="/" size="1" variant="raised">
                  <ChatBubbleIcon />
                </IconButton>

                <IconButton as="a" href="/" size="1" variant="atelier">
                  <TwitterLogoIcon />
                </IconButton>

                <IconButton as="a" href="/" size="1">
                  <GitHubLogoIcon />
                </IconButton>
              </Flex>

              <Text
                size={1}
                css={{
                  fontFamily: '$pragmatica',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '2px',
                  paddingBottom: '12px',
                  color: '$mauve9',
                }}
              >
                size two
              </Text>

              <Flex direction="row" align="stretch" justify="start" wrap="wrap" gap="4" css={{ marginBottom: '30px' }}>
                <IconButton as="a" href="/" size="2" variant="atelier">
                  <GlobeIcon />
                </IconButton>

                <IconButton as="a" href="/" size="2" variant="ghost">
                  <ChatBubbleIcon />
                </IconButton>

                <IconButton as="a" href="/" size="2" variant="raised">
                  <TwitterLogoIcon />
                </IconButton>

                <IconButton as="a" href="/" size="2">
                  <GitHubLogoIcon />
                </IconButton>
              </Flex>

              <Text
                size={1}
                css={{
                  fontFamily: '$pragmatica',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '2px',
                  paddingBottom: '12px',
                  color: '$mauve9',
                }}
              >
                size three
              </Text>

              <Flex direction="row" align="stretch" justify="start" wrap="wrap" gap="4" css={{ marginBottom: '30px' }}>
                <IconButton as="a" href="/" size="3" variant="atelier">
                  <GlobeIcon />
                </IconButton>

                <IconButton as="a" href="/" size="3" variant="ghost">
                  <ChatBubbleIcon />
                </IconButton>

                <IconButton as="a" href="/" size="3" variant="raised">
                  <TwitterLogoIcon />
                </IconButton>

                <IconButton as="a" href="/" size="3">
                  <GitHubLogoIcon />
                </IconButton>
              </Flex>

              <Text
                size={2}
                css={{
                  fontFamily: '$pragmatica',
                  fontSize: '12px',
                  fontWeight: 'normal',
                  padding: '2px',
                  paddingBottom: '12px',
                  color: '$mauve9',
                }}
              >
                atelier. ghost. raised.
              </Text>
            </Container>
          </Section>
        </Box>
        {/* <!-- END! ICON BUTTON --> */}

        {/* <!-- BANNER COMPONENTS --> */}
        <Box css={{ height: 'auto' }}>
          <Section size="3" css={{ bc: '$loContrast' }}>
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="crimson">
                Banner®
              </Badge>
            </Container>

            <Box css={{ padding: '6px', backgroundColor: '$loContrast' }}>
              <Banner id="banner" size="1" variant="suprLime" rounded="true">
                <Text size="2" css={{ fontWeight: 600 }}>
                  Atelier Design Yield® – Example Banner
                </Text>
              </Banner>

              <Banner id="banner" size="1" variant="blue" rounded="true">
                <Text size="2" css={{ fontWeight: 600 }}>
                  Atelier Design Yield® – Example Banner
                </Text>
              </Banner>

              <Banner id="banner" size="2" variant="suprLime" rounded="true">
                <Text size="2" css={{ fontWeight: 600 }}>
                  SIZE 2
                </Text>
              </Banner>
            </Box>
          </Section>
        </Box>
        {/*END EXAMPLE BANNER COMPONENT*/}

        {/* <!-- BEGIN SWITCH--> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="green">
                Switch®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="row" align="stretch" justify="between" wrap="wrap">
                <AtelierSwitch />
              </Flex>
            </Container>
          </Section>
        </Box>
        {/* <!-- END ! SWITCH --> */}

        {/* <!-- BEGIN TABS --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="green">
                Tab Component®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="row" align="stretch" justify="between" wrap="wrap">
                <Tabs defaultValue="tab1">
                  <TabsList aria-label="Manage your account">
                    <TabsTrigger value="tab1">Manage Account</TabsTrigger>
                    <TabsTrigger value="tab2">View Payment</TabsTrigger>
                    <TabsTrigger value="tab3">Update Options</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tab1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Quis eleifend
                    quam adipiscing vitae. Tempus iaculis urna id volutpat lacus. Diam sollicitudin tempor id eu nisl
                    nunc mi ipsum faucibus.
                  </TabsContent>

                  <TabsContent value="tab2">
                    Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Quis eleifend quam adipiscing vitae.
                    Tempus iaculis urna id volutpat lacus. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus.
                  </TabsContent>

                  <TabsContent value="tab3">
                    Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Quis eleifend quam adipiscing vitae.
                  </TabsContent>
                </Tabs>
              </Flex>
            </Container>
          </Section>
        </Box>
        {/* <!-- END ! TABS --> */}

        {/* <!-- BEGIN INPUT--> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="blue">
                Input®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Flex direction="column" align="stretch" justify="between" wrap="wrap">
                <Input size="1" placeholder="Size 1" />
                <Space size="1" />
                <Input size="2" placeholder="Size 2" />
                <Space size="1" />
                <Input size="3" placeholder="Size 3" />
              </Flex>
            </Container>
          </Section>
        </Box>
        {/* <!-- END ! INPUT --> */}

        {/* <!-- BEGIN INPUT with LABEL --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="blue">
                Input w/ Label®
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <InputwithLabel />
            </Container>
          </Section>
        </Box>
        {/* <!-- END ! INPUT with LABEL --> */}

        {/* <!-- BEGIN !  ACCORDION --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="orange">
                Accordion Component™
              </Badge>
            </Container>

            <Container size="2" css={{ marginBottom: '10px' }}>
              <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Pharetra pharetra massa massa?</AccordionTrigger>

                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Lectus quam id leo in vitae turpis massa?</AccordionTrigger>

                  <AccordionContent>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Magna fermentum iaculis eu non diam</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Container>
          </Section>
        </Box>
        {/*END !  ACCORDION*/}

        {/* <!-- BEGIN !  TOAST --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="orange">
                Toast®
              </Badge>
            </Container>
            <Container size="2" css={{ marginBottom: '10px' }}>
              <BasicAtelierToast />
            </Container>
          </Section>
        </Box>
        {/*END !  TOAST*/}

        {/* <!-- BEGIN !  DIALOG --> */}
        <Box css={{ bc: '$loContrast' }}>
          <Section size="3">
            <Container size="2" css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
              <Badge size="2" variant="orange">
                Dialog®
              </Badge>
            </Container>
            <Container size="2" css={{ marginBottom: '10px' }}>
              <DefaultDialog />
            </Container>
          </Section>
        </Box>
        {/*END !  DIALOG*/}

        {/* <!-- BEGIN COLOR SYSTEM --> */}
        <ColorSystem />
        {/* <!-- END !  COLOR SYSTEM --> */}

        {/* <!-- BEGIN !  FOOTER --> */}
        <Box
          css={{
            backgroundColor: '$loContrast',
            position: 'relative',
            height: '100px',
            margin: 'auto',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Text
            css={{
              textAlign: 'center',
              color: '$mauve12',
              fontFamily: '$pragmatica',
              fontSize: '10px',
              lineHeight: '1',
            }}
          >
            Copyright © 2022 Atelier. All rights reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default System;
