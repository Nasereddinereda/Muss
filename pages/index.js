import React, { useState, useEffect } from "react"
import Head from 'next/head'
import SubMenu from '../src/components/layout/SubMenu'
import Link from 'next/link';


import Svg1 from "../src/components/svg/Thumb"
import Svg2 from "../src/components/svg/Messenger"
import Svg3 from "../src/components/svg/Time"
import Svg4 from "../src/components/svg/News"

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box
} from "@chakra-ui/react"


import { IoLogIn } from 'react-icons/io5';
import { DiDatabase } from 'react-icons/di';




const submenus = [
    {
        category: "Generally",
        items: [
            {
                title: "Gender Equality",
                icon: "Messenger",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
            {
                title: "Gender Equality",
                icon: "Messenger",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
            {
                title: "Gay Rights",
                icon: "News",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
            {
                title: "Political Interests",
                icon: "Thumb",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    }
                ]
            },
        ]
    },
    {
        category: "Extra",
        items: [
            {
                title: "Gender Equality",
                icon: "Time",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
            {
                title: "Gay Rights",
                icon: "Thumb",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
        ]
    },
    {
        category: "New",
        items: [
            {
                title: "Gender Equality",
                icon: "Time",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
            {
                title: "Gay Rights",
                icon: "Thumb",
                sub: [
                    {
                        title: "People Try To Be Fair",
                        target: "/"
                    },
                    {
                        title: "For Any Reaon",
                        target: "/"
                    },
                    {
                        title: "In Cases of Rape",
                        target: "/"
                    }
                ]
            },
        ]
    },
];




const Home = () => {


    const [scrollPos, setScrollPos] = useState(0);
    const [animPlayed, SetanimPlayed] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [auth, setAuth] = useState(false);



    // On Scroll
    const onScroll = () => {
        if (!animPlayed && window.pageYOffset > 50) {
            SetanimPlayed(true);
        }
        setScrollPos(window.pageYOffset);
    };


    const onLogout = () => {
        console.log("logout");
    }



    // Add and remove the window listener
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <div >
            <Head>
                <title>Home Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            {/* Navbar  */}

            <navbar>

                {/* Nav-head */}

                <div className={scrollPos > 50 ? "css-nav-head css-nav-head-sm flex justify-between" : "css-nav-head flex justify-between"} >


                    {/* Hamburg */}
                    <div className={isOpen ? "opc-0" : "col"} onClick={onOpen}>
                        <div className="con">
                            <div className={scrollPos > 50 ? "bar arrow-top" : "bar bar-lg arrow-top-lg"}></div>
                            <div className={scrollPos > 50 ? "bar arrow-middle" : "bar bar-lg arrow-middle-lg"}></div>
                            <div className={scrollPos > 50 ? "bar arrow-bottom" : "bar bar-lg arrow-bottom-lg"}></div>
                        </div>
                    </div>

                    {/* Midlle */}
                    <h1 className={scrollPos > 50 ? "title-nav-sm" : "title-nav"}>
                        <span className="css-cl-grey"> Personal Well Being: </span>
                        <span className={isOpen ? "css-cl-gray" : ""}> Are you happy? </span>
                    </h1>

                    <h1>  </h1>



                </div>

                {/* Nav-body */}

                {/* <div className={scrollPos > 50 ? "css-nav-body flex justify-center" : "css-nav-body-left"}> */}
                <div className={!animPlayed ? "d-none" : scrollPos > 50 ? "css-nav-body flex justify-center" : "css-nav-body-left"}>
                    <div className="css-nav-body-childs flex justify-between">

                        {/* 
                        
                        current && isOpen : display border current red && color font grey
                        current && !isOpen : display border current blue && color font white
                        !current && isOpen : color font grey
                        !current && !isOpen : default
                        
                        */}

                        <Link href="#">
                            <div className={false ? `css-one-child ${!isOpen ? "css-one-child-current" : "css-one-child-current-red"}` : isOpen ? "css-one-child css-fill-grey" : "css-one-child"}    >
                                <Svg1 />
                                <p className={isOpen ? "css-cl-gray" : ""} > Overview </p>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className={false ? `css-one-child  ${!isOpen ? "css-one-child-current" : "css-one-child-current-red"}` : isOpen ? "css-one-child css-fill-grey" : "css-one-child"} >
                                <Svg2 />
                                <p className={isOpen ? "css-cl-gray" : ""} > Timetrend</p>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className={true ? `css-one-child ${!isOpen ? "css-one-child-current" : "css-one-child-current-red"}` : isOpen ? "css-one-child css-fill-grey" : "css-one-child"} >
                                <Svg3 />
                                <p className={isOpen ? "css-cl-gray" : ""} > Regression </p>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className={false ? `css-one-child  ${!isOpen ? "css-one-child-current" : "css-one-child-current-red"}` : isOpen ? "css-one-child css-fill-grey" : "css-one-child"} >
                                <Svg4 />
                                <p className={isOpen ? "css-cl-gray" : ""} > Interaction </p>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className={false ? `css-one-child  ${!isOpen ? "css-one-child-current" : "css-one-child-current-red"}` : isOpen ? "css-one-child css-fill-grey" : "css-one-child"} >
                                <Svg1 />
                                <p className={isOpen ? "css-cl-gray" : ""} > Key Predictors</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </navbar >



            {/* Content  */}

            <div className="flex justify-end m-5" >
                <Button ref={btnRef} colorScheme="teal" onClick={() => setAuth(!auth)}>
                    {auth ? "logout" : "signin"}
                </Button>
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen} className="ml-4">
                    Open
                </Button>
            </div >

            <div style={{ width: "100%", height: "200vh" }}> </div>



            {/* Footer */}


            <Box
                w="100%"
                h="auto"
                // bgGradient="linear(rgb(42,45,53) 25%, rgb(40,38,38) 100%, rgb(35,35,35) 50%)"

                bgGradient={[
                    "linear(to-tr, rgb(42,45,53) , rgb(40,38,38))",
                    "linear(to-t, rgb(40,38,38), rgb(42,45,53) )",
                    "linear(to-b, rgb(30,30,30), rgb(50,50,50)",
                ]}
            >
                <div>
                    <div className="css-foot-head flex justify-between">
                        <Link href="#">  Overview  </Link>
                        <Link href="#">  Timetrend </Link>
                        <Link href="#">  Regression  </Link>
                        <Link href="#">  Interaction  </Link>
                        <Link href="#">  Key Predictors  </Link>
                    </div>
                    <div className="css-foot-body">
                        <p> <span className="css-cl-blue" > &copy; Copyright 2021  </span> | All Rights Reserved </p>
                    </div>
                </div>
            </Box>



            {/* Menu  */}


            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay >
                    <DrawerContent >
                        <DrawerCloseButton />

                        <DrawerHeader className="css-cl-white br-bottom css-none-line" > PRO SIDEBAR </DrawerHeader>

                        {
                            auth ?
                                <div className="flex ml-7p mt-5">
                                    <img className="user-img" alt="complex" src="photos/user.png" />
                                    <div className="ml-4 css-cl-white">
                                        <p className="ft-wg-300 sp-lt-2"> <span className="css-cl-white255"> Muss </span> <span className="ft-wg-700"> lounici </span>  </p>
                                        <p className="css-cl-grey"> Administrator </p>
                                        <div className="flex css-none-line mt-2 "> <div className="online"> </div> Online </div>
                                    </div>
                                </div> : ""
                        }

                        <Link href="/#">
                            <Button rightIcon={<DiDatabase />} colorScheme="blue" variant="outline" className="outile-none flex justify-between w-86 ml-7p mt-5 ">
                                General Socia Survey
              </Button>
                        </Link>

                        {
                            !auth ?
                                <Link href="/#">
                                    <Button rightIcon={<IoLogIn />} colorScheme="blue" variant="solid" className="outile-none flex justify-between w-86 ml-7p mt-5 css-bg-success" >
                                        Login
                  </Button>
                                </Link> :
                                <Button rightIcon={<IoLogIn />} colorScheme="blue" variant="solid" className="outile-none flex justify-between w-86 ml-7p mt-5 css-bg-danger" onClick={() => onLogout()} >
                                    Logout
                </Button>
                        }


                        <div className="separation" > </div>

                        <DrawerBody className="w-100">
                            {
                                submenus.map(elm => <SubMenu key={elm.category} data={elm} />)
                            }
                        </DrawerBody>


                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </div >
    )
}


export default Home;
