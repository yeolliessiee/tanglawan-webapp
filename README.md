note: follow niyo tong directory kapag gagawa ng pages, so under src -> pages -> home (for example), kasama ni Home.jsx si Home.css, ganun din mangyayari sa iba

```

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

```

ito naman yung default code sa jsx file: for example home

after nung line ng return, parang html nalang din yung pagcocode sa loob nung return() function, if may constants man kayo gagamitin kayo na bahala. make sure na consistent lahat nung naming, thanksss 

```jsx
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <p>Your content here.</p>
    </div>
  );
};

export default Home;
```

next, after niyo na matapos yun page, need niyo siya i-import sa App.jsx, import niyo lang yung page, yung header and footer matic naman na siya ma iimport since nakalagay na rin siya dun sa App.jsx


```jsx
// Existing imports (example)
import Homepage  from "./Pages/About/About";
import LoginPage from "./Pages/LoginPage/LoginPage";

// Add this ↓ (eto yung page na gawa niyo)
import AboutPage from "./Pages/Home/Home";
```

eto next, mag add kayo nito  `<Route element={<Layout />}>`

```jsx
<Route element={<Layout />}>
  <Route path="/"      element={<About />} />
  <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} />

  {/* Add your new page here ↓ */}
  <Route path="/about" element={<Home />} />

</Route>
```

> ⚠️ Make sure your new `<Route>` is **inside** `<Route element={<Layout />}>` — otherwise the page won't have a Header or Footer.

---
