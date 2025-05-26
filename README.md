# ⌨️ Typing Speed Test
Live link : https://typingtestehte.netlify.app
A lightweight, browser-based application to measure and improve your typing speed and accuracy across different difficulty levels.

## Features

- **Multiple Difficulty Levels**: Choose between Easy, Medium, and Hard text passages
- **Real-time Statistics**: 
  - Words Per Minute (WPM) calculation
  - Accuracy percentage
  - Timer in seconds
- **Visual Feedback**:
  - Character-by-character highlighting (green for correct, red for incorrect)
  - Success animation when completed correctly
- **Responsive Design**: Works on desktop and mobile devices

## How It Works

1. Select your preferred difficulty level from the dropdown menu
2. Start typing in the text area to begin the test
3. The timer begins automatically when you start typing
4. Characters turn green when typed correctly and red when typed incorrectly
5. WPM and accuracy are calculated in real-time
6. When you complete the text perfectly, a success message appears
7. Press "Restart" to try again with a new random text

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone this repository or download the files:
   ```
   git clone https://github.com/ehte-s/typing-speed-test.git
   ```

2. No build process required! Simply open `index.html` in your browser:
   ```
   cd typing-speed-test
   open index.html
   ```

Alternatively, you can use a simple local server:
```
python -m http.server
```
Then visit `http://localhost:8000` in your browser.

## Project Structure

- `index.html` - Main HTML structure and UI elements
- `style.css` - Styling and animations
- `script.js` - Core functionality and typing logic

## How Speed and Accuracy Are Calculated

- **WPM (Words Per Minute)**: Calculated as the number of words typed divided by the elapsed time in minutes
- **Accuracy**: Calculated as the percentage of correctly typed characters out of all keystrokes

## Customization

Want to add your own texts? Edit the `quotes` object in `script.js`:

```javascript
const quotes = {
  easy: [
    "Your easy quote here",
    // Add more easy quotes
  ],
  medium: [
    "Your medium difficulty quote here",
    // Add more medium quotes
  ],
  hard: [
    "Your more challenging hard quote here", 
    // Add more hard quotes
  ]
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Here are some ways you can contribute:

- Add more quote collections
- Improve the UI/UX
- Fix bugs or improve performance
- Add additional features like user accounts or high scores

## Future Enhancements

- Personal best tracking
- User accounts and persistent statistics
- More difficulty levels and specialized text categories
- Multiplayer mode
- Dark/light theme toggle
- Custom text input option
