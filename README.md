# MoniePlant

## Background🧙🏼‍♂️
As an MBA grad, I continue to stay abreast economic and financial news, and am passionate in the world and history of banking and investing <sub>(I'm passionate about many things...)</sub>. This app aims to take a stab at making one such strategy - dividend investing - to make it easier for people like me to **explore stocks from a dividend perspective and assemble a prospective portfolio, and provide key portfolio statistics.** 

The game was designed and implemented using Javascript, HTML, CSS, with an emphasis on **React**, while attending the Software Engineering Immersive course at General Assembly.

## Technologies & sites used🤖
- JavaScript
- React
- HTML
- CSS
- Git & GitHub
- Trello (Kanban / roadmap [here](https://trello.com/b/pqurEdXB/monieplant-dev-roadmap))
- ChatGPT 3.5
- Stack Overflow

## Deployment🚀
The app is deployed on Vercel, and you can use it [here](https://monie-plant.vercel.app/)!

Some screenshots below📷: 
<img width="500" alt="image" src="https://github.com/justintea/MoniePlant/assets/37412968/c37413be-dec8-4350-90ab-0271e07417fd">

## App design & development process🏗
- Define or clarify the why and 'business case' of the app 💵
- Establish 'must-have', 'good-to-have' functionalities, stretch goals (eg. P1, P2-3) 🎖
- Set high-level timeline to achieve must-haves (eg. MVP) 🏹
- An iterative process: Code, mistake, learn (or ask for help), re-code 🌀
- Furnish with better UI/UX (eg. cleaner & more consistent CSS, nicer images) 🎨


## Development timeline🗓
- [x] **Day 0:** High-level roadmapping & prioritization, write user stories, test [Polygon API](https://polygon.io/docs/stocks/getting-started), test with Bruno, plan super high-level architecture (eg. Components...before Pages), set up server and environment
- [x] **Day 1-2:** Develop MVP, core "3-in-1" API request completed
- [x] **End of Day 2:** Present MVP
- [x] **Day 3:** Develop P2 functionalities, refactor code due to React-router work
- [x] **Day 4:** Develop P2 functionalities, refactor code due to state/useState hook function declaration placement, documentation     
- [ ] **Day 5:** Present web app
- [ ] > Always a Day 1👶🏻

## Key Learnings👨🏻‍🎓
- **"Dubious" nature of state in UseState🔮:** States, as declared in useState(), are very useful for us to indicate and render visual changes. However, working with them is not always straightforward (eg. console.log is 'faster' than state change, state cannot be directly passed to assign to variables, promises, etc)
- **States & props design🔗:** Midweek, I had to refactor the code due to 2 reasons: introducing routes via React Router, and also allowing certain components to access particular states that had to be shared (eg. position, shared between Airtable and Portfolio). Could I have thought of this beforehand or even at the design phase? I wonder...
- **Celebrate daily wins🎉:** We are doing everything almost for the first time! Cherish the win with self and congratulating progress can be uplifting in this journey!

## Future Improvements🧊
This game is designed and created within the first 2 weeks of learning React. However, there are still many opportunities to improve the game, which will be worked on in the future, such as:
- beautifying the web-app (eg. Nav bar)
- centralising buttons so there is only 1 set of buttons performing similar use cases (eg. 'Create', 'Update shares' button)
- maybe even store multiple portfolios for comparison (eg. total holdings, yield, CAGR)
