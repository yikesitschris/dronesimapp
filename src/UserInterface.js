import React, { useState, useEffect } from "react";
import axios from "axios";
import Histogram from "./Histogram";
import BandC from "./BandC";
import DetectionTable from "./DetectionTable";

const UserInterface = () => {
  const [message, setMessage] = useState([]);
  const [numMessages, setNumMessages] = useState(0);
  const [detectionsHistory, setdetectionsHistory] = useState([]);
  const [topBandC, setTopBandC] = useState({
    classification: { OcuSync: 0, Lightbridge: 0 },
    bands: { "2.4GHz": 0, "5.8GHz": 0 },
  });
  const [duration, setDuration] = useState(Math.floor(Date.now() / 1000));
  const url = "http://127.0.0.1:5001";

  // Fetch data from the server
  const fetchAndUpdateState = () => {
    axios
      .get(url)
      .then((result) => {
        const resData = result.data;
        setMessage(resData);
        setNumMessages((prev) => prev + 1);

        const currentTime = Math.floor(Date.now() / 1000); // Get current time
        const timeThreshold = 5 * 60; // Convert to seconds

        // Initialize newTopBandC with existing state values
        let newTopBandC = { ...topBandC };

        // Update detectionsHistory state
        setdetectionsHistory((prevdetectionsHistory) => {
          // Filter detectionsHistory to include only data from the last 5 minutes
          const updateddetectionsHistory = prevdetectionsHistory.filter(
            (detection) => currentTime - detection.start_time < timeThreshold
          );

          // Process incoming data
          for (let item of resData.detections) {
            let tempdroneid = item.drone_id;

            // Find if there's a duplicate in the newdetectionsHistory
            let duplicate = updateddetectionsHistory.find(
              (prev) => prev.drone_id === tempdroneid
            );

            if (duplicate) {
              // Update the RSSI of the existing detection with the new one
              duplicate.rssi = item.rssi;
            } else {
              // Append new detection to the newdetectionsHistory
              updateddetectionsHistory.push(item);
              // Update Top Band C counts
              newTopBandC.classification[item.classification]++;
              newTopBandC.bands[item.band]++;
            }
          }

          // Return the updated detectionsHistory
          return updateddetectionsHistory;
        });

        // Update topBandC state after detectionsHistory has been updated
        setTopBandC(newTopBandC);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Fetch data every 3 seconds
  useEffect(() => {
    fetchAndUpdateState(); // Initial fetch
    const fetchIntervalId = setInterval(fetchAndUpdateState, 3000);

    return () => clearInterval(fetchIntervalId);
  }, []);

  // Update UI every 1 second to correctly display duration of each detection
  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setDuration(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(timeIntervalId);
  }, []);

  return (
    <div className="user-interface">
      <h1 className="title">Drone Detection Display</h1>

      <h3 className="message-count">
        Number of messages received: {numMessages}
      </h3>

      <BandC topBandC={topBandC} />

      <h3>RSSI of Drones Detected in the past 5 minutes</h3>
      <Histogram detectionsHistory={detectionsHistory} />

      <div className="table-container">
        <DetectionTable message={message} duration={duration} />
      </div>
    </div>
  );
};

export default UserInterface;
