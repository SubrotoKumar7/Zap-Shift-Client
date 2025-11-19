import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';


const Coverage = () => {
    const mapRef = useRef(null);

    const warehouses = useLoaderData();
    const location = [23.7266, 90.4017];

    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = warehouses.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coor = [district.latitude, district.longitude];
            mapRef.current.flyTo(coor, 10);
        }
    }

    return (
        <div className='w-11/12 mx-auto p-20'>
            <h1 className='font-extrabold text-4xl text-secondary'>We are available in 64 districts</h1>
            <div className='my-13'>
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required name='location' placeholder="Search location" />
                    </label>
                </form>
            </div>
            <div className='w-full h-[700px]'>
                <MapContainer ref={mapRef} className='h-full' center={location} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        warehouses.map((warehouse, index) => 
                            <Marker key={index} position={[warehouse.latitude, warehouse.longitude]}>
                                <Popup>
                                    <strong>{warehouse.district}</strong> <br /> 
                                    {
                                        warehouse.covered_area.join(", ")
                                    }
                                </Popup>
                            </Marker>
                        )
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;