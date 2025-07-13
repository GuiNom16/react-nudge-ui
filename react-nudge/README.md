# react-nudge

A lightweight React component to subtly draw attention to UI elements with animated rings and customizable tooltips — perfect for onboarding hints, feature highlights, or gentle nudges in your app.

---

## Features

- Animated pulse ring around any React element
- Customizable ring color, size, and border radius
- Tooltip with flexible positioning (top or bottom)
- Smooth floating animation for tooltips (optional)
- Customizable tooltip styles: background, text color, font size, padding, and more
- Control tooltip visibility duration
- Easy to integrate and style

---

## Installation

npm install react-nudge-ui

or with yarn:

yarn add react-nudge-ui

---

## Usage

import React from "react";  
import { Nudge } from "react-nudge-ui";

function App() {  
 return (

 <div style={{ padding: 40 }}>  
 <Nudge hint="Click me!" ringColor="tomato" tooltipPosition="top">  
 <button style={{ padding: "10px 20px", borderRadius: 12 }}>  
 Nudge Button  
 </button>  
 </Nudge>  
 </div>  
 );  
}

export default App;

---

## Props

## Props

| Prop               | Type              | Default    | Description                                      |
| ------------------ | ----------------- | ---------- | ------------------------------------------------ |
| `children`         | React.ReactNode   | —          | The wrapped React element to highlight           |
| `hint`             | string            | —          | Tooltip message to display                       |
| `duration`         | number            | 5000       | Time in milliseconds the nudge is visible        |
| `ringColor`        | string            | `#007bff`  | Color of the animated ring                       |
| `ringSize`         | number            | 8          | Thickness (in px) of the ring                    |
| `ringBorderRadius` | string            | —          | Border radius of the ring (e.g., `12px`, `50%`)  |
| `tooltipBgColor`   | string            | `#333`     | Background color of the tooltip                  |
| `tooltipTextColor` | string            | `#fff`     | Text color of the tooltip                        |
| `tooltipFontSize`  | string            | `14px`     | Font size of the tooltip text                    |
| `tooltipPadding`   | string            | `6px 12px` | Padding inside the tooltip                       |
| `tooltipPosition`  | "top" \| "bottom" | `"top"`    | Position of the tooltip relative to the element  |
| `tooltipFloating`  | boolean           | `true`     | Whether the tooltip floats with smooth animation |
| `zIndex`           | number            | —          | Custom stacking order for tooltip and ring       |
| `className`        | string            | —          | Optional custom CSS class for the wrapper        |
| `tooltipClassName` | string            | —          | Optional custom CSS class for the tooltip        |
| `ringClassName`    | string            | —          | Optional custom CSS class for the ring           |

---

## Styling

You can customize the styles either via props or by overriding CSS classes:

- `.nudge-wrapper` — wrapper div
- `.nudge-ring` — animated ring element
- `.nudge-tooltip` — tooltip container

## License

MIT © Jeremie Nombro

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## Author

Jeremie Nombro
