import { useState, useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308];

export default function useGetLocation() {
    const [coords, setCoords] = useState<number[] | null>(null);

    useEffect(() => {
        function onSucess(position: GeolocationPosition) {
            setCoords([position.coords.latitude, position.coords.longitude]);
        }
        function onError() {
            console.error("Error on get location");
            setCoords(defaultCoords);
        }
        try {
            navigator.geolocation.getCurrentPosition(onSucess, onError);
        } catch (error) {
            setCoords(defaultCoords);
        }
    }, []);

    return { coords };
}
