note: follow niyo tong directory kapag gagawa ng pages, so under src -> pages -> home (for example), kasama ni Home.jsx si Home.css, ganun din mangyayari sa iba

src/
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │
│   ├── About/
│   │   ├── About.jsx
│   │   ├── About.css
│   │
│   ├── PrivacyPolicy/
│       ├── PrivacyPolicy.jsx
│       ├── PrivacyPolicy.css
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │
│   ├── Login/
│       ├── Login.jsx
│       ├── Login.css


ito naman yung default code sa jsx file: for example home

afer nung line ng return, parang html nalang din yung pagcocode sa loob nung return() function, if may constants man kayo gagamitin kayo na bahala. make sure na consistent lahat nung naming, thanksss 

------------------------------------------------------------------------------------------------
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
-----------------------------------------------------------------------------------------------