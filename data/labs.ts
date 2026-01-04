
export interface LabStep {
  title: string;
  desc: string;
  check?: string;
  technicalNote?: string;
}

export interface ScientificPrinciple {
  title: string;
  content: string;
}

export interface LabContent {
  id: string;
  title: string;
  subtitle: string;
  difficulty: 'Level 1' | 'Level 2' | 'Level 3';
  time: string;
  objective: string;
  analogy: string;
  bom: string[];
  prerequisites: string[];
  scientificPrinciples: ScientificPrinciple[];
  steps: LabStep[];
  theory: string;
  pitfalls: string[];
  realWorldApp: string;
  break: string;
  challenge: string;
  code?: string;
}

export const LAB_DATA: Record<string, LabContent> = {
  'CE-01': {
    id: 'CE-01',
    title: 'The Electron Journey',
    subtitle: 'Foundation of Physical Circuits',
    difficulty: 'Level 1',
    time: '60-90 Mins',
    objective: 'Build your first closed-loop circuit and understand why LEDs need protection via Ohm\'s Law.',
    analogy: 'Imagine electricity is like water flowing through a pipe. The battery is the pump, the wires are the pipes, and the resistor is a "squeeze" in the pipe that slows the water down so it doesn\'t burst your LED "water-balloon".',
    prerequisites: ['Basic safety (Never short battery terminals)', 'Identifying anode vs cathode in LEDs', 'Resistor color code basics'],
    scientificPrinciples: [
      {
        title: 'Ohm\'s Law (V = I * R)',
        content: 'Voltage (V) is the pressure, Current (I) is the flow rate, and Resistance (R) is the friction. To protect an LED, we must limit the current (I) to roughly 20mA. If we use a 9V battery and the LED takes 2V, we must "drop" 7V across the resistor.'
      },
      {
        title: 'The Forward Voltage Drop',
        content: 'Unlike a wire, an LED is a semiconductor. It requires a specific "Forward Voltage" (Vf) before it starts conducting. For Red LEDs, this is usually 1.8V to 2.2V.'
      }
    ],
    bom: ['Breadboard', '9V Battery with connector', '220Ω Resistor (Red-Red-Brown)', 'Red LED', 'Solid Core Jumper Wires'],
    steps: [
      {
        title: 'The Power Rail Initialization',
        desc: 'Connect your battery to the red (+) and blue (-) lines on the side of your breadboard. This creates your "Main Power Bus". These rails run vertically down the entire length of the board.',
        check: 'Use a multimeter to verify 9V across the rails.',
        technicalNote: 'The red rail is technically the Vcc (Voltage at Common Collector) and the blue/black rail is Ground (GND).'
      },
      {
        title: 'Seeding the Semiconductor',
        desc: 'Plug the long leg (Anode) of your LED into row 10, column A. Plug the short leg (Cathode) into row 11, column A. Columns A-E are connected horizontally.',
        check: 'Ensure the LED is oriented correctly; they are directional!',
        technicalNote: 'LEDs are Diodes; they only allow current to flow in one direction.'
      },
      {
        title: 'Integrating the Limiter',
        desc: 'Place one end of your 220Ω resistor into row 10, column B. Connect the other end directly to the Red Power Rail (+). This puts the resistor in series with the LED.',
      },
      {
        title: 'Closing the Signal Loop',
        desc: 'Use a jumper wire to connect row 11, column B to the Blue Power Rail (-). This completes the path for electrons to return to the battery.',
      }
    ],
    pitfalls: [
      'Resistor Value too high: LED will be very dim or won\'t light.',
      'LED Backwards: Circuit is "Open" and no current flows.',
      'Shorting the Rail: Connecting red and blue rails directly will heat up the battery and potentially cause a fire.'
    ],
    realWorldApp: 'Every screen you look at is an array of millions of these circuits. In smartphones, we use Transistors instead of manual wires to switch these on and off millions of times per second.',
    theory: 'Kirchhoff’s Voltage Law states that the sum of voltages around a loop must be zero. The 9V from the battery is split: ~2V across the LED and ~7V across the resistor.',
    break: 'Remove the resistor and jump the connection with a wire for exactly 0.5 seconds. What happens? (Caution: The LED will likely pop or burn out instantly. This is the importance of Current Limiting).',
    challenge: 'Can you calculate the resistance needed for a 5V supply instead of 9V?',
  },
  'CE-03': {
    id: 'CE-03',
    title: 'The DNA of Logic',
    subtitle: 'Building Universal NAND Gates',
    difficulty: 'Level 2',
    time: '2 Hours',
    objective: 'Construct the fundamental building block of all digital intelligence using discrete NPN transistors.',
    analogy: 'Think of a NAND gate as a strict bouncer at a club. The bouncer only lets everyone in UNLESS both VIPs (Signal A and Signal B) show up at the same time. If both are there, the door is barred!',
    prerequisites: ['CE-01 Completion', 'Understanding Transistor Pinouts (E-B-C)', 'Binary Logic Basics (0 vs 1)'],
    scientificPrinciples: [
      {
        title: 'Saturation vs Cutoff',
        content: 'In digital logic, we don\'t use transistors as amplifiers. We use them as switches. "Cutoff" is when the base voltage is 0 (Switch Open). "Saturation" is when the base voltage is high (Switch Closed).'
      },
      {
        title: 'The NAND Universality',
        content: 'The NAND gate is a "Universal Gate". This means you can build an AND, OR, NOT, XOR, and even a 64-bit CPU using nothing but NAND gates.'
      }
    ],
    bom: ['Breadboard', '2N2222 Transistors (x2)', '10kΩ Resistors (x2)', '470Ω Resistor', 'LED', 'Tactile Pushbuttons (x2)'],
    steps: [
      {
        title: 'Cascading the Switch',
        desc: 'Place two 2N2222 transistors on the board. Connect the Emitter of Transistor 1 to the Collector of Transistor 2. This creates a "Logical AND" dependency.',
        technicalNote: 'This configuration is called "Series" switching.'
      },
      {
        title: 'Bias Control (Inputs)',
        desc: 'Connect a 10k resistor from the Base of each transistor to a pushbutton. Connect the other side of the buttons to the positive rail.',
        check: 'Pressing a button should send a "High" signal to the base.',
        technicalNote: 'The 10k resistors are "Base Current Limiters" that prevent the transistor from melting.'
      },
      {
        title: 'The NAND Inversion',
        desc: 'Connect the LED in a way that it is powered by default. Wire the transistor chain so that when BOTH conduct, they "Short" the LED\'s path to ground, turning it off.',
      }
    ],
    pitfalls: [
      'Floating Inputs: If the buttons aren\'t pressed, the base might pick up "noise" and flicker. Use 10k resistors to "Pull Down" the base to ground.',
      'Transistor Overheating: If you omit the base resistor, the transistor will draw too much current and fail.'
    ],
    realWorldApp: 'Modern CPU chips contain billions of NAND gates etched into silicon. They are significantly smaller but follow the exact same logical physics you are building now.',
    theory: 'In Boolean Algebra, NAND is the negation of AND. Only the input state (1,1) results in an output of 0.',
    break: 'Disconnect the pull-down resistors. Wave your hand over the breadboard. Does the LED flicker? This is "Electrostatic Induction" and it\'s the enemy of reliable engineering.',
    challenge: 'Modify the circuit to create a NOR gate (LED off if EITHER button is pressed).',
  },
  'CE-05': {
    id: 'CE-05',
    title: 'The Silicon Brain',
    subtitle: 'Bare-Metal Register Control',
    difficulty: 'Level 3',
    time: '3-4 Hours',
    objective: 'Bypass all software abstractions to manipulate the CPU hardware at the register level.',
    analogy: 'Using a library like Arduino is like ordering a pizza via an app. Bare-metal programming is like walking into the kitchen, finding the specific dial for the oven temperature, and turning it to exactly 425 degrees yourself.',
    prerequisites: ['Intermediate C Programming', 'Understanding Binary/Hexadecimal', 'ESP32 Technical Datasheet familiarity'],
    scientificPrinciples: [
      {
        title: 'Memory-Mapped I/O (MMIO)',
        content: 'The CPU doesn\'t have a special "pin instruction". Instead, certain addresses in RAM are actually "Hardware Registers". Writing a bit to these addresses physically moves electrons at the chip pins.'
      },
      {
        title: 'The Execution Pipeline',
        content: 'In bare-metal, there is no "Operating System" to catch you. If your code stops, the CPU just hangs. You are responsible for every single clock cycle.'
      }
    ],
    bom: ['ESP32-WROOM Development Board', 'High-quality Micro-USB/USB-C Cable', 'Workstation with VS Code and PlatformIO'],
    steps: [
      {
        title: 'Environment Hardening',
        desc: 'Create a new project in PlatformIO. Delete the standard boilerplate. We will use a standard C entry point `app_main()` instead of `setup()` and `loop()`.',
      },
      {
        title: 'Locating the GPIO Matrix',
        desc: 'Consult the ESP32 Technical Reference Manual. Find the address for the "GPIO_ENABLE_REG" (0x3FF44020). This register decides if a pin is an input or output.',
      },
      {
        title: 'The "Write-1-To-Set" Strategy',
        desc: 'Instead of doing a Read-Modify-Write (which is slow), use the W1TS (Write 1 To Set) and W1TC (Write 1 To Clear) registers. These are atomic hardware operations.',
        technicalNote: 'Atomic operations prevent "Race Conditions" where two tasks try to change the same pin at once.'
      }
    ],
    pitfalls: [
      'Register Offset Errors: Writing to the wrong address can brick the peripheral or cause a silent failure.',
      'Optimization Stripping: The compiler might delete your "delay" loops if they don\'t do anything. Use the `volatile` keyword.'
    ],
    realWorldApp: 'Automotive ECUs (Engine Control Units) and Aerospace guidance systems use bare-metal code for guaranteed timing. You cannot afford an "operating system update" when a rocket is landing.',
    theory: 'Von Neumann Architecture defines memory and instructions in the same space. By writing to specific memory addresses, we control the state of the physical world.',
    break: 'Delete the infinite `while(1)` loop. Flash the code. What happens? (The system will crash and reboot endlessly because `app_main` returns but there is no OS to return to).',
    challenge: 'Implement a software-based PWM (Pulse Width Modulation) by toggling the register with varying duty cycles in a loop.',
    code: `#include <stdint.h>
// DIRECT REGISTER ADDRESSES (BARE METAL - ESP32)
#define GPIO_OUT_W1TS_REG 0x3FF44008 // Set high
#define GPIO_OUT_W1TC_REG 0x3FF4400C // Set low
#define GPIO_ENABLE_REG   0x3FF44020 // Mode select

// 'volatile' prevents the compiler from optimizing away our logic
void app_main() {
    // 1. Enable GPIO 2 (Internal LED) as an Output
    // We cast the address to a pointer and dereference it
    volatile uint32_t* enable_reg = (uint32_t*)GPIO_ENABLE_REG;
    *enable_reg |= (1 << 2);

    while(1) {
        // 2. Set Pin 2 High (W1TS = Write 1 To Set)
        *((volatile uint32_t*)GPIO_OUT_W1TS_REG) = (1 << 2);
        
        // Manual NOP (No Operation) delay loop
        for(int i=0; i<500000; i++) {
            asm("nop");
        }
        
        // 3. Set Pin 2 Low (W1TC = Write 1 To Clear)
        *((volatile uint32_t*)GPIO_OUT_W1TC_REG) = (1 << 2);
        
        for(int i=0; i<500000; i++) {
            asm("nop");
        }
    }
}`
  }
};
