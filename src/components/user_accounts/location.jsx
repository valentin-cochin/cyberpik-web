import React, { useEffect, useRef, useState } from 'react';
import { GOOGLE_PLACE_API_TOKEN } from './../../../config/api-tokens'

const Location = ({setLocation}) => {
    let autoComplete;

    const loadScript = (url, callback) => {
        let script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = () => callback();
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    const handleScriptLoad = (updateQuery, autoCompleteRef) => {
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            { types: ["(cities)"] }
        );
        autoComplete.setFields(["address_components", "formatted_address"]);
        autoComplete.addListener("place_changed", () =>
            handlePlaceSelect(updateQuery)
        );
    }

    async function handlePlaceSelect(updateQuery) {
        const addressObject = autoComplete.getPlace();
        const query = addressObject.formatted_address;
        updateQuery(query);
        setLocation(query)
    }

    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_PLACE_API_TOKEN}&language=en&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div className="search-location-input form-group">
            <input type="text" name="location" className="form-control" placeholder="city" ref={autoCompleteRef}
                onChange={event => setQuery(event.target.value)} value={query} />
        </div>
    );
}

export default Location;