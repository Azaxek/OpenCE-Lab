
export interface BuildStep {
  title: string;
  instruction: string;
  technicalTip?: string;
}

export interface ProjectStory {
  id: string;
  name: string;
  location: string;
  author: string;
  status: 'OPERATIONAL' | 'DEPLOYED' | 'STABLE' | 'BETA' | 'CRITICAL';
  summary: string;
  fullStory: string;
  hardware: string[];
  challenges: string[];
  impact: string;
  imageSeed: string;
  buildGuide: {
    architecture: string;
    steps: BuildStep[];
    codeSnippet?: string;
    schematicNote: string;
  };
}

export const PROJECT_STORIES: ProjectStory[] = [
  {
    id: 'proj-01',
    name: 'LoRa Soil Monitor',
    location: 'Cerrado, Brazil',
    author: 'Carlos R.',
    status: 'OPERATIONAL',
    summary: 'A low-cost moisture sensing network helping small-scale farmers optimize irrigation in drought-prone regions.',
    fullStory: 'Carlos observed that many local farmers were losing crops due to erratic rainfall patterns. Using the OpenCE foundation labs, he designed a mesh network of soil sensors that communicate over long distances using LoRa. The system runs entirely on solar power and sends alerts to farmers via a simple SMS gateway when soil moisture drops below critical levels.',
    hardware: ['ESP32-WROOM', 'LoRa Transceiver Module (RFM95W)', 'Capacitive Soil Moisture Sensor', '3.7V LiPo Battery', 'TP4056 Solar Charger'],
    challenges: ['Signal attenuation due to dense foliage', 'Protecting electronics from high tropical humidity', 'Optimizing deep-sleep modes for 24/7 solar operation'],
    impact: 'Reduced water waste by 35% and increased crop yield by 15% for three local cooperatives.',
    imageSeed: 'farm-tech',
    buildGuide: {
      architecture: 'Sensor Node -> LoRa Gateway -> Cloud Dashboard -> SMS Alert',
      schematicNote: 'Connect the Capacitive Sensor to A0 (VP) pin. RFM95W uses SPI: SCK(18), MISO(19), MOSI(23), CS(5).',
      steps: [
        {
          title: 'Power Path Assembly',
          instruction: 'Connect the solar panel to the TP4056 module. Connect the LiPo battery to the battery terminals. Wire the output to a 3.3V voltage regulator to power the ESP32.',
          technicalTip: 'Always check your regulator output with a multimeter before plugging in the ESP32 to prevent over-voltage burnout.'
        },
        {
          title: 'Sensor Calibration',
          instruction: 'Place the capacitive sensor in dry air and note the value. Then place it in water and note that value. Map these values in your code to a 0-100% moisture range.',
          technicalTip: 'Capacitive sensors are better than resistive ones because they do not corrode in wet soil.'
        },
        {
          title: 'LoRa Link Configuration',
          instruction: 'Solder a 1/4 wave wire antenna (8.6cm for 868/915MHz) to the RFM95W. Connect the SPI pins to the ESP32 and initialize the RadioHead library.',
        }
      ],
      codeSnippet: `// CORE MONITORING LOGIC
void loop() {
  int moisture = readMoisture();
  if (moisture < THRESHOLD) {
    String packet = "ALERT: Moisture at " + String(moisture) + "%";
    rf95.send((uint8_t *)packet.c_str(), packet.length());
    rf95.waitPacketSent();
  }
  esp_deep_sleep_start(); // Hibernate to save solar power
}`
    }
  },
  {
    id: 'proj-02',
    name: 'Open Weather Node',
    location: 'Kerala, India',
    author: 'Ananya S.',
    status: 'DEPLOYED',
    summary: 'Hyper-local weather stations providing real-time flood risk data to flood-prone riverside communities.',
    fullStory: 'During the monsoon season, riverside communities in Kerala face unpredictable flooding. Ananya built a network of "Nodes" that measure water level, pressure, and rainfall. Unlike official stations which are sparse, these nodes provide street-level data. The project uses the register-level optimization techniques learned in Lab CE-05 to maximize battery life during extended overcast periods.',
    hardware: ['ESP32', 'JSN-SR04T (Waterproof Ultrasonic)', 'BME280', 'Custom 3D Printed Enclosure'],
    challenges: ['Debouncing ultrasonic readings during heavy rain', 'Establishing reliable WiFi links in rural areas', 'Cost-reduction to under $25 per node'],
    impact: 'Provided early warning signals to over 400 households during the 2024 monsoon season.',
    imageSeed: 'river-weather',
    buildGuide: {
      architecture: 'Waterproof Sensor Node -> MQTT Broker -> Local Alert System',
      schematicNote: 'JSN-SR04T Trig(GPIO 13), Echo(GPIO 12). BME280 uses I2C: SDA(21), SCL(22).',
      steps: [
        {
          title: 'Ultrasonic Placement',
          instruction: 'Mount the JSN-SR04T transducer facing downwards over the river from a bridge or pier. The waterproof cable allows the electronics to be housed in a dry box 2 meters away.',
        },
        {
          title: 'I2C Bus Initialization',
          instruction: 'Connect the BME280 to the I2C bus. Use 10k pull-up resistors on both SDA and SCL lines if your module doesn\'t have them built-in.',
          technicalTip: 'The ESP32 has internal pull-ups, but hardware pull-ups are more reliable for long cable runs.'
        }
      ],
      codeSnippet: `// WATER LEVEL CALCULATION
float getDistance() {
  digitalWrite(TRIG_PIN, LOW); delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  return duration * 0.034 / 2; // Distance in cm
}`
    }
  },
  {
    id: 'proj-03',
    name: 'Assistive Wheelchair Controller',
    location: 'Nairobi, Kenya',
    author: 'Samuel O.',
    status: 'STABLE',
    summary: 'An open-source head-gesture control system for manual wheelchairs, built for under $40.',
    fullStory: 'Samuel saw a need for affordable assistive technology. Using MPU6050 accelerometers and the ESP32\'s PWM capabilities, he created a retrofit kit that allows users with limited hand mobility to control an electric wheelchair motor via head tilts. The project is fully documented on the OpenCE hub to allow other makers to replicate the build.',
    hardware: ['ESP32', 'MPU6050 IMU', 'BTS7960 43A Motor Driver', 'LiFePO4 Battery Pack'],
    challenges: ['Smoothing noisy sensor data with a complementary filter', 'Ensuring safety cut-offs if the connection is lost', 'Calibrating for individual user range of motion'],
    impact: 'Three prototype units are currently in daily use at a local rehabilitation center.',
    imageSeed: 'wheelchair-tech',
    buildGuide: {
      architecture: 'IMU (Head-Mount) -> ESP32 Controller -> High-Power Motor Driver -> DC Motors',
      schematicNote: 'MPU6050 (I2C) to ESP32. BTS7960 PWM_L(GPIO 25), PWM_R(GPIO 26).',
      steps: [
        {
          title: 'IMU Calibration',
          instruction: 'Attach the MPU6050 to a hat or headband. Write a script to output the Roll and Pitch. Calibrate the "Neutral" position for the specific user.',
        },
        {
          title: 'Motor Drive Safety',
          instruction: 'Connect the BTS7960 drivers to the DC motors. Use heavy-gauge wire (12AWG) for the battery and motor paths to handle the high current surges.',
          technicalTip: 'Always include a physical emergency stop switch that cuts the main battery power.'
        }
      ],
      codeSnippet: `// GESTURE TO MOTOR MAPPING
void updateMotors(float pitch, float roll) {
  int speed = map(pitch, -30, 30, -255, 255);
  int steering = map(roll, -30, 30, -100, 100);
  ledcWrite(LEFT_PWM, speed + steering);
  ledcWrite(RIGHT_PWM, speed - steering);
}`
    }
  }
];
