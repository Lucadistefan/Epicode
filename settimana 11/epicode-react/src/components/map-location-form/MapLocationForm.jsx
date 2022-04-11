import { useState } from "react";

export default function MapLocationForm(props) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    return (
        <form
            className="row g-3"
            id="map-location-form"
            onSubmit={e => props.handleSubmit(e, latitude, longitude)}
        >
            <div className="col-auto">
                <label forHtml="latitude" className="visually-hidden">Latitude</label>
                <input
                    className="form-control"
                    id="latitude"
                    onChange={e => setLatitude(e.target.value)}
                    placeholder="Latitude"
                    type="text"
                />
            </div>
            <div className="col-auto">
                <label forHtml="longitude" className="visually-hidden">Longitude</label>
                <input
                    className="form-control"
                    id="longitude"
                    onChange={e => setLongitude(e.target.value)}
                    placeholder="Longitude"
                    type="text"
                />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add pin</button>
            </div>
        </form>
    );
}