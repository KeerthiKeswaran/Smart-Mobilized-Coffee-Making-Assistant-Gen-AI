# Smart Mobilized Coffee-Making Assistant

https://github.com/user-attachments/assets/b09bf4a5-1c44-4ea2-b5a5-cb4aa900ff11

## Table of Contents
1. [Problem Statement](#problem-statement)
2. [Scope of the Problem](#scope-of-the-problem)
3. [Description of Concepts, Theories, and Approaches](#description-of-concepts-theories-and-approaches)
4. [Technical Specifications](#technical-specifications)
5. [Detailed Flow of Operations](#detailed-flow-of-operations)
   - [User Interaction](#user-interaction)
   - [Command Type Identification](#command-type-identification)
   - [Coffee Making Process](#coffee-making-process)
   - [Mobility Command Process](#mobility-command-process)
   - [Diagnostics and Settings Command Process](#diagnostics-and-settings-command-process)
   - [Continuous System Monitoring](#continuous-system-monitoring)
6. [Experimentation and Verification](#experimentation-and-verification)
7. [Uniqueness and Advantages](#uniqueness-and-advantages)
8. [Bench Prototype Approach](#bench-prototype-approach)
9. [Futuristic Scope](#futuristic-scope)
10. [Advanced Mechanisms in Current Home Applications](#advanced-mechanisms-in-current-home-applications)
11. [Video Prototype Link](#video-prototype-link)
12. [Architecture](#architecture)
13. [Installation and Setup](#installation-and-setup)
14. [Contributing](#contributing)
15. [License](#license)

---

## Problem Statement
The problem being addressed is the lack of mobility and personalized assistance in existing coffee makers. While current coffee makers can produce a variety of coffee types, they are static and lack adaptability to individual user preferences.

## Scope of the Problem
The static nature of current coffee makers limits their functionality in domestic settings, especially for users seeking convenience and customization. This limitation affects a wide range of coffee enthusiasts who desire a more interactive and personalized coffee-making experience.

## Description of Concepts, Theories, and Approaches
Our solution integrates mobility and artificial intelligence into a traditional coffee maker. This involves the use of an ESP32 module for control and connectivity, coupled with Generative AI to tailor coffee recipes based on user preferences. The AI adapts to user habits, offering a futuristic and user-centric experience.  
This project also overcomes the need for programming separately for different coffee recipes. The coffee recipes can be dynamically generated using Large Language Models (LLMs) based on the user’s preferences, eliminating the need for custom coding.

<img src="https://github.com/KeerthiKeswaran/Smart-Mobilized-Coffee-Making-Assistant-Gen-AI/blob/main/docs-client/src/assets/CAFF-E%20IntroImg.png" alt="CAFF-E" style="width: 400px; height: auto;">

## Technical Specifications
The solution utilizes an ESP32 module for microcontroller operations. The system includes:
- A motorized platform for mobility.
- A dispenser mechanism for coffee making.
- A cloud-based AI model for Generative AI integration.

## Detailed Flow of Operations

### 1. User Interaction
- The user interacts with the Smart Mobilized Coffee-Making Assistant through a user-friendly interface, either via voice or text input.

### 2. Command Type Identification
- The microcontroller (ESP32) identifies the type of command issued by the user. Commands can fall into one of three categories:
   - Coffee Making
   - Mobility Command
   - Diagnostics/Settings Command

### 3. Coffee Making Process
- **Command Processing**: Upon identifying a coffee-making command, the microcontroller processes it and sends the details to the cloud-based AI system.
- **Recipe Generation**: The AI generates a personalized coffee recipe tailored to the user’s preferences, such as strength, sweetness, milk content, and any special flavors.
- **Recipe Validation**: The microcontroller validates the recipe, proceeds to control the dispenser unit to prepare coffee, or prompts the user for clarification.
- **Coffee Preparation Completion**: Once the coffee is prepared, the system notifies the user through the interface.

### 4. Mobility Command Process
- **Command Processing**: If the user issues a mobility command (e.g., move to the dining room or another location), the microcontroller processes the command.
- **Motor Driver Control**: The microcontroller sends precise control signals to the motor driver.
- **Actuation**: The motor driver actuates the mobility unit, which could be wheels or tracks, enabling the coffee maker to move smoothly to the specified location.
- **Position Confirmation**: The system ensures accurate positioning and notifies the user of its arrival.

### 5. Diagnostics and Settings Command Process
- **Command Processing**: If the command pertains to diagnostics or settings, the microcontroller processes it accordingly.
- **Diagnostics Mode**: The system collects real-time data from integrated sensors, generates a diagnostics report, and sends it to the user interface for review.
- **Settings Mode**: The user’s preferences are updated in the cloud database and synchronized across the system.
- **Invalid Command**: If an invalid command is issued, the system notifies the user and prompts for correction.

### 6. Continuous System Monitoring
- **Performance Monitoring**: The microcontroller continuously monitors the system's performance, including dispenser actions, motor functionality, and cloud communication.
- **Performance Deviation Handling**: Alerts are sent if deviations are detected, and the system adjusts operational parameters to maintain optimal performance.
- **Cloud Analytics**: Usage data is periodically sent to the cloud, where the AI performs analytics to refine the Generative AI model.

## Experimentation and Verification
Several tests were conducted to validate the system's functionality:
- **Mobility Tests**: Ensured smooth and precise movement.
- **Coffee-Making Tests**: Verified accurate ingredient dispensing based on AI-generated recipes.
- **Connectivity Tests**: Confirmed reliable communication between the ESP32 module and the cloud-based AI.

## Uniqueness and Advantages
- Enhanced convenience with a mobilized assistant.
- Personalized coffee recipes tailored to user habits.
- Voice and text command compatibility for seamless interaction.
- Scalable design with potential for additional features like health monitoring.
- Overcomes the need to program separate coffee recipes with dynamic generation through LLM.

## Bench Prototype Approach
The current bench prototype utilizes an ESP32 module as the core microcontroller. The prototype includes:
- A motorized base for mobility, controlled via Wi-Fi commands sent to the ESP32.
- Coffee-making functionality integrated with dispensers, controlled based on user inputs processed by the ESP32.
- Generative AI hosted in the cloud, providing dynamic recipe generation based on user commands.

## Futuristic Scope
In the future, advanced microcontrollers such as STM32 and NVIDIA Jetson Nano could be utilized to further enhance the functionality and efficiency of the system. Additional mechanisms like self-cleaning dispensers, biometric authentication for user personalization, and energy-efficient components could be integrated. These upgrades would position the coffee maker as a state-of-the-art appliance in modern smart homes.

## Advanced Mechanisms in Current Home Applications
Modern home applications often employ advanced microcontrollers like STM32, ESP32-S3, and Raspberry Pi 4 for various tasks. Mechanisms such as machine learning-based user profiling, IoT-enabled control systems, and integrated voice assistants are common in state-of-the-art devices. Incorporating such features into our solution would align it with contemporary standards and provide a competitive edge.

## Video Prototype Link
The video prototype showcasing the solution's functionality and innovation is available at:  
[**Video Prototype**](https://drive.google.com/file/d/1aMcqT6t4Pbogr48gf2XEdVjMu1Yqt2fB/view?usp=sharing)

---

## Architecture
![System Architecture](./images/architecture.jpg)

The architecture of the Smart Mobilized Coffee-Making Assistant consists of the following key components:
- **ESP32**: The microcontroller handling all user interactions, motor control, and communication with the cloud.
- **Cloud AI**: A cloud-based generative AI system that processes user preferences and generates personalized coffee recipes.
- **Motorized Platform**: A mobility unit for moving the coffee maker to different locations based on user commands.
- **Dispenser Mechanism**: A system to dispense water, coffee, milk, sugar, and other ingredients to prepare the coffee.

---

## Installation and Setup

1. **Prerequisites**
   - ESP32 module.
   - Motor driver and mobility components.
   - Coffee dispenser mechanism.
   - Cloud integration for AI (subscription to a cloud service).
   - Necessary software libraries for ESP32 programming.

2. **Steps to Install**
   1. Clone the repository:  
      ```bash
      git clone https://github.com/GenHub/SmartMobilizedCoffeeMaker.git
      ```
   2. Install dependencies for the ESP32.
   3. Set up the cloud-based AI model (ensure you have an active subscription).
   4. Upload the code to the ESP32.
   5. Power on the coffee maker and interact with the assistant via voice or text commands.

---

## Contributing
We welcome contributions to improve this project! Please fork the repository, make your changes, and submit a pull request.

---

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE] file for details.
