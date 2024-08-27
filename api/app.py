from flask import Flask, jsonify
from flask_cors import CORS
import random
import string
import time
from threading import Lock

app = Flask(__name__, static_folder='build', static_url_path='/')
CORS(app)

def generate_random_string(length=8):
    return ''.join(random.choices(string.ascii_letters, k=length))

def generate_rssi(previous_rssi=None):
    if previous_rssi:
        return round(previous_rssi + random.uniform(-2.5, 2.5), 4)
    return round(random.uniform(-110, -65), 4)

detection_messages = []

@app.route('/', methods=['GET'])
def simulate_detections():
    message = {
        "msg_type": "detections",
        "system": "detection_service",
        "msg_id": generate_random_string(),
        "detections": detection_messages,
        "timestamp": int(time.time())
    }

    # Update RSSI for active drones and add them to the message
    for drone in message["detections"]:
        if random.random() > 0.2: #keep drone in detections if its over 20%
            drone['rssi'] = generate_rssi(drone['rssi'])
        else: #remove it from detections if 20% or less
            message['detections'].remove(drone)

    if random.random() > 0.5 and len(message['detections']) < 5:    
        # Add new drones 
        new_drone = {
            "drone_id": generate_random_string(),
            "start_time": message['timestamp'],
            "band": random.choice(["2.4GHz", "5.8GHz"]),
            "classification": random.choice(["OcuSync", "Lightbridge"]),
            "rssi": generate_rssi(),
        }
        message['detections'].append(new_drone)

    # return message
    return jsonify(message)

app.run(debug=True, port=5001)
# if __name__ == '__main__':
    

