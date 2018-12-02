import React, { Component } from "react";
import "./App.css";
import {
  ReactiveBase,
  CategorySearch,
  ResultCard,
  SingleRange
} from "@appbaseio/reactivesearch";

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <div className="Filters">
            <SingleRange
              componentId="ratingsfilter"
              title="Filter by ratings"
              dataField="rating"
              data={[
                { start: "4", end: "5", label: "4 stars and up" },
                { start: "3", end: "5", label: "3 stars and up" },
                { start: "2", end: "5", label: "2 stars and up" },
                { start: "1", end: "5", label: "see all ratings" }
              ]}
              defaultSelected="4 stars and up"
              style={{
                padding: "5px",
                marginTop: "10px"
              }}
            />
          </div>

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
              width: "60%",
              textAlign: "center"
            }}

          />
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
