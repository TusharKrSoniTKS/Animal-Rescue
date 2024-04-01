import { Button} from '@chakra-ui/react';
import  { useState, useEffect } from 'react';


function PostLocation() {
    const [coords, setCoords] = useState(null);
    const [isGeolocationAvailable, setIsGeolocationAvailable] = useState(false);
    const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setCoords(position.coords);
                setIsGeolocationAvailable(true);
                setIsGeolocationEnabled(true);
            },
            error => {
                console.error(error);
                setIsGeolocationAvailable(true);
                setIsGeolocationEnabled(false);
            }
        );
    }, []);

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        // console.log(`http://maps.google.com/maps?f=q&q=${(coords.latitude)},${coords.longitude}`)
        <a href={`http://maps.google.com/maps?f=q&q=${(coords.latitude)},${coords.longitude}`} target='_blank' rel="noreferrer">
            <Button
            bg={"#83f28f"}
            color={"black"}
            _hover={{ bg: "#CE7457", textColor: "white" }}
            size={{ base: "xs", md: "sm" }}
            variant={"ghost"}
            >
                Animal Location
            </Button>
        </a>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

// function getLocationData(coords) {
//     const { latitude, longitude, altitude, heading, speed } = coords;
//     const mess = "longitude is "+{longitude}+"latitude is"+{latitude};
//     // You can do further processing here if needed
//     return (
//         <div>
//             <p>Latitude: {latitude}</p>
//             <p>Longitude: {longitude}</p>
//             <p>Altitude: {altitude}</p>
//             <p>Heading: {heading}</p>
//             <p>Speed: {speed}</p>

            
 
//             {/* <ReactWhatsapp number='9040315471' message= {mess}>
//                 <Button>
//                         Send WhatsApp Location
//                 </Button>
//             </ReactWhatsapp> */}
//         </div>
//     );
// }

export default PostLocation;
