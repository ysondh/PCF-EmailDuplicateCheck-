# PCF Email Address Duplicate Detection Control

This PCF (PowerApps Component Framework) control is designed specifically for Model-Driven Apps within the Power Platform environment. This control utilises fluentUI Component Packages to replicate the Model Driven App Interface. 
It replaces the standard out-of-the-box email control for the contact entity, providing real-time duplicate detection functionality.





<img width="353" alt="image" src="https://github.com/ysondh/PCF-EmailDuplicateCheck-/assets/77232067/9bf217fc-fc1c-4110-b3bb-68d2269c6374">



## Features

- **Real-time Duplicate Detection**: The control checks the email address entered against the email address field on the contact entity in real-time.
  
- **Single Entity Support**: Currently, the control only supports duplicate detection within the contact entity using the `emailaddress1` field. Multi-entity support and customizable field mapping will be available in future releases.
  
## Installation

To install the PCF Email Address Duplicate Detection Control in your Model-Driven App, follow these steps:

1. Clone or download this repository to your local environment.
2. Build the solution using the provided configuration file or download Managed Solution from the `ManagedSols` folder.
3. Deploy the generated solution file to your Power Platform environment.
4. Add the control on the currently existing email field.

## Usage

Once installed and configured, the PCF Email Address Duplicate Detection Control seamlessly integrates into your Model-Driven App. Simply use it in place of the standard email control on the contact entity forms. As users enter email addresses, the control will automatically check for duplicates within the contact entity using the `emailaddress1` field and provide feedback accordingly.


## Support

For questions, issues, or feedback, please open a [GitHub issue](https://github.com/ysondh/PCF-EmailDuplicateCheck/issues).
