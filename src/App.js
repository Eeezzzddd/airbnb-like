import React, { Component } from "react";
import "./App.css";
import {
  ReactiveBase,
  CategorySearch,
  ResultCard
} from "@appbaseio/reactivesearch";

import { ReactiveMap } from "@appbaseio/reactivemaps";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Base for reactive search */}
        <ReactiveBase
          app="Chocos2"
          credentials="f9zaMBDZ0:9cacf8eb-98fb-40ff-a10b-e82c2574bc08"
        >
          <CategorySearch
            componentId="searchbox"
            dataField="name"
            categoryField="property_type.raw"
            placeholder="Search for a room"

          />
          <div className="MainView">
            {/* Cards of all accomodations */}
            <ResultCard
              componentId="results"
              dataField="name"
              size={50}
              pagination={true}
              react={{
                and: ["searchbox"]
              }}
              onData={res => {
                return {
                  image: res.image,
                  title: res.room_type,
                  description: res.name
                };
              }}
              style={{
                width: "50%",
                textAlign: "center"
              }}
            />

            {/* Map displaying the accomodations */}
            <ReactiveMap
              componentId="map"
              dataField="location"
              react={{
                and: "places"
              }}
              onData={result => ({
                label: result.price+"$"
              })}
              style={{
                position:"sticky",
                left:0,
                top:0,
                height:"90vh"
              }}
            />
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
