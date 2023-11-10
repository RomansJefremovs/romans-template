import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import BannerSection from "../Components/Organisms/BannerSection";

import BG1 from "../Assets/keith-misner-h0Vxgz5tyXA-unsplash.jpg";
import BlogPost from "../Components/Molecules/BlogPost";
import Feature from "../Components/Molecules/Feature";
import MainContent from "../Components/Organs/MainContent";
import BlogSection from "../Components/Organs/BlogSection";
import AdbIcon from "@mui/icons-material/Adb";
import CallToAction from "../Components/Organs/Call-to-action";
import {t} from "i18next";
import GallerySection from "../Components/Organs/GallarySection";
import HeroSection from "../Components/Organs/HeroSection";
import ReservationForm from "../Components/Molecules/ReservationForm";
import BookingSection from "../Components/Organs/BookingSection";
import InfoPanel from "../Components/Molecules/InfoPanel";
import {Image} from "@mui/icons-material";

const HomePage = () => {
    const theme = useTheme();
    const galleryItems = [
        <img src={BG1} alt="Gallery Item 1" width={'10rem'} height={'400px'}/>,


        // <img src={BG1} alt="Gallery Item 1" />,
        // More images...
    ];
    const openingHours = [
        "Mon - Fri: 7.00am - 6.00pm",
        "Sat: 7.00am - 6.00pm",
        "Sun: 8.00am - 6.00pm"
    ];

    const contactInfo = [
        "5 Rue Dalou, 75015 Paris",
        "Call - +33 156 78 89 56",
        "benoit@mail.com"
    ];
    // Assume we have an array of features and blog posts to be passed as children
    const blogPosts = [
        <BlogPost
            key="post1"
            title="Blog Post 1"
            excerpt="This is a short summary of the first blog post."
            imageUrl="url_to_image"
            onClick={() => console.log('Blog post 1 clicked')}
        />,  <BlogPost
            key="post1"
            title="Blog Post 1"
            excerpt="This is a short summary of the first blog post."
            imageUrl="url_to_image"
            onClick={() => console.log('Blog post 1 clicked')}
        />,  <BlogPost
            key="post1"
            title="Blog Post 1"
            excerpt="This is a short summary of the first blog post."
            imageUrl="url_to_image"
            onClick={() => console.log('Blog post 1 clicked')}
        />, <BlogPost
            key="post1"
            title="Blog Post 1"
            excerpt="This is a short summary of the first blog post."
            imageUrl="url_to_image"
            onClick={() => console.log('Blog post 1 clicked')}
        />,
        // ...other blog posts
    ];

    const features = [
        <Feature
            key="feature1"
            icon={<AdbIcon/>} // Replace with actual MUI icon
            title="Feature 1"
            description="Description of feature 1"
        />, <Feature
            key="feature1"
            icon={<AdbIcon/>} // Replace with actual MUI icon
            title="Feature 1"
            description="Description of feature 1"
        />, <Feature
            key="feature1"
            icon={<AdbIcon/>} // Replace with actual MUI icon
            title="Feature 1"
            description="Description of feature 1"
        />, <Feature
            key="feature1"
            icon={<AdbIcon/>} // Replace with actual MUI icon
            title="Feature 1"
            description="Description of feature 1"
        />,
        // ...other features
    ];
    return (
        <>
            <HeroSection
                backgroundImage={BG1}
                title="Welcome to Our Website"
                subtitle="Explore our world of innovation"
            />
          <MainContent>
            {features.map((feature, index) => (
                feature
            ))}
        </MainContent>


            <BlogSection>
                {blogPosts.map((feature, index) => (
                   feature
                ))}
            </BlogSection>
            <BannerSection
                backgroundImage={BG1}
                backgroundColor={theme.palette.primary.main}
                leftContent={
                    <Typography variant={'h1'} color={theme.palette.secondary.main}>
                        Hello Left Section b
                    </Typography>
                }
                rightContent={
                    <Typography variant={'h1'} color={theme.palette.secondary.main}>
                        Hello Right Section b
                    </Typography>
                }
            />
            <GallerySection backgroundColor={theme.palette.background.paper}>
                {/*{galleryItems.map((item, index) => (<Grid item xs={12} sm={6} md={3}><Image>{item}</Image></Grid>))}*/}
            </GallerySection>
            <CallToAction buttonAction={()=>{}} buttonText={t('test_label')} ctaText={'some texxt'}/>
            <BookingSection backgroundImage={BG1}>
                <ReservationForm backgroundColor={theme.palette.primary.main}/>
            </BookingSection>
            <InfoPanel
                title="Book your table now"
                openingHours={openingHours}
                contactInfo={contactInfo}
            />

        </>
    );
};

export default HomePage;
