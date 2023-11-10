import {Box, Grid} from "@mui/material";
interface BannerProps{
    backgroundColor?: string;
    backgroundImage?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
}
const BannerSection = ({ rightContent, leftContent, backgroundColor, backgroundImage }: BannerProps) => {
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: backgroundColor || 'transparent', // Fallback to 'transparent' if no color provided
        opacity: 0.4, // Set your desired opacity here
        pointerEvents: 'none', // Allows clicks to pass through to the background
    };

    return (
        <Grid container sx={{
            position: 'relative', // Relative position for the overlay
            height: '75vh', // Optional: Adjust the height as needed
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            {/* Overlay element */}
            {backgroundColor && <Box sx={overlayStyle} />}
            <Grid container columns={16} justifyContent={'space-around'} my={'auto'} sx={{
                position: 'relative', // Needed to position children above overlay
                zIndex: 1, // Ensure content is above the overlay
                width: '100%', // Ensure the content grid takes full width
            }}>
                <Grid item xs={12} md={6}>
                    {leftContent}
                </Grid>
                <Grid item xs={12} md={6}>
                    {rightContent}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BannerSection;
