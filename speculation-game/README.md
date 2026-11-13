# The Speculation Game - Digital Version

**Design for the future you fear.**

A digital tool for exploring the ethical implications of emerging technologies through speculative design workshops.

Live at: https://darktechmethod.com/speculation-game/

## Overview

The Speculation Game is an interactive card-based design exercise where participants combine technologies, target groups, funding models, problems, and strategies to create speculative systems. This digital version facilitates workshops in face-to-face, online, or hybrid environments.

Based on **CORE v2.0** of the physical card deck.

## Core Features

- **Draw cards**: Draw one card from each of the 5 core categories
- **Swap one**: Redraw a single card, or write your own blank card
- **Blank / custom cards**: Fill in your own technology, target, funding, problem, or strategy
- **Twist cards**: Optional sixth category when a combination feels too easy
- **Wizard flow**: Draw → Design → Build → Pitch → Reflect
- **Examples**: Browseable example concepts for inspiration
- **Responsive design**: Works across desktop, tablet, and mobile

## Card Categories

1. **Technology** (10): Wearable Technology, Ambient Surveillance, Smart Devices, AI, and more
2. **Target Group** (10): Children, Students, Workers, Older Adults, Patients, Citizens
3. **Funding Model** (10): Subscription, Advertising, Licensing, Marketplace Commission, and more
4. **Problem** (10): Learning Challenges, Safety Risks, Social Isolation, Information Overload
5. **Strategy** (10): Optimize, Monitor, Support, Protect, Influence, and more
6. **Twist** (10, optional): No Opt-Out, Black Box, Scoring, Function Creep, and more

## Workshop Integration

- Built-in step-by-step instructions and reflection questions
- Example concepts on the Examples page
- Physical prototyping step (paper, post-its, cardboard, markers)

## Usage Instructions

### For Facilitators
1. Open `index.html` or `game.html` in a web browser
2. Project the screen for group sessions, or share the link for remote play
3. Use **Draw cards** for a quick start
4. Use **Swap one** to redraw a card or let participants write their own
5. Guide the group through Design → Build → Pitch → Reflect

### For Participants
1. Draw the five core cards
2. Swap any card that feels impossible, or write your own
3. Design a speculative system from the combination
4. Build a rough physical prototype
5. Pitch the concept and reflect on consequences

## File Structure

```
speculation-game/
├── index.html          # Home / intro
├── game.html           # Play the game
├── examples.html       # Example concepts
├── styles.css          # Visual styling
├── script.js           # Card data and game logic
├── favicon.svg         # Site icon
└── README.md           # Documentation
```

## Educational Applications

### Learning Objectives
- Critical analysis of technology implications
- Ethical awareness of benefits and potential harms
- Systems thinking about technology, society, and economics
- Creative problem-solving with constraints
- Future literacy skills development

### Suitable For
- Design Education: Technology ethics, speculative design, human-centered design
- Technology Studies: Digital sociology, science and technology studies
- Business Education: Innovation ethics, technology entrepreneurship
- General Education: Digital literacy, critical thinking

## Customization

### Adding Cards
Edit the `cardData` object in `script.js`:

```javascript
technology: [
    {
        title: "Your New Technology",
        description: "Description of the technology, with a few concrete examples."
    }
]
```

### Styling
Modify `styles.css` for branding or accessibility needs.

### Translation
Copy lives mainly in `index.html`, `game.html`, `examples.html`, and `script.js`.

## Technical Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for local use
- Internet connection only needed for fonts (optional)
- Compatible with desktop, tablet, and mobile devices

## Workshop Best Practices

### Preparation
- Test the tool on your presentation setup
- Prepare prototyping materials
- Review the Examples page
- Set clear time limits

### Facilitation
- Provide context about speculative design
- Demonstrate draw and swap (including write-your-own)
- Encourage exploratory thinking over realistic products
- Guide reflection using the built-in questions
- Document participant concepts

### Follow-up
- Facilitate concept sharing between groups
- Connect to real-world technology examples
- Discuss further exploration opportunities

## License and Attribution

When using this tool in workshops or research, please provide appropriate attribution to The Speculation Game concept by Tinker Ethical TechLab and mention this digital adaptation developed by Marise van Noordenne.

*This project was pair programmed with Cursor AI*

---

The goal is not to predict the future, but to think critically about the implications of our technological choices.
