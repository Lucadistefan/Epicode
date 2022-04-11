import BingMapsReact from "bingmaps-react";
import { useState } from "react";
import MapLocationForm from "../map-location-form/MapLocationForm";

export default function Map() {
    const [pins, setPins] = useState([]);

    const handleSubmit = (e, latitude, longitude) => {
        e.preventDefault();
        
        setPins([...pins, {
            center: {
                latitude,
                longitude
            }
        }]);
    };

    return (
        <section>
            <BingMapsReact
                bingMapsKey="AoYgabIfe-u7cY1rA0m4IJG3x6L6TMtaisd0SligvveJXdchSU5fqUtbu5ggvsPp"
                height="100vh"
                pushPins={pins}
                width="100vw"
            />
            <MapLocationForm handleSubmit={handleSubmit} />
        </section>
    );
}