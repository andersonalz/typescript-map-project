// import L from 'leaflet'
import { map, latLng, tileLayer, MapOptions, Marker, Icon, polyline, LatLngTuple } from "leaflet";
import { User } from './User';
import { Company } from './Company';

import 'leaflet/dist/leaflet.css';

const myCompany = new Company()
const user = new User()
const options: MapOptions = {
    center: latLng(29.67941650662925, 52.46675555372155),
    zoom: 1,
};

const myMap = map('map', options);

const key = "gkLl45WACzKALkhCcKnS";

tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`, {

}).addTo(myMap);

new Marker([user.location.lat, user.location.lng],{
    icon : new Icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
        iconSize: [45, 50],
        riseOnHover : true
    }),
    title: "user location"
    
}).addTo(myMap);

new Marker([myCompany.location.lat, myCompany.location.lng],{
    icon : new Icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
        iconSize: [45, 50],
        riseOnHover : true
    }),
    title: "company location"

}).addTo(myMap);

const latLngs: LatLngTuple[] = [
    [user.location.lat, user.location.lng] as LatLngTuple,
    [myCompany.location.lat, myCompany.location.lng] as LatLngTuple
];

polyline(latLngs, { color: 'red'}).addTo(myMap);