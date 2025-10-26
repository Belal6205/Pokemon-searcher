## 🎮 Pokémon Searcher

### 🧩 Overview

**Pokémon Searcher** is a lightweight web application that allows users to search for any Pokémon by name and instantly display its official sprite using the **PokéAPI**.
It’s a fun mini-project built with **HTML, CSS, and JavaScript**, demonstrating API integration and DOM manipulation.

---

### ⚙️ Features

* 🔍 Search any Pokémon by name (case-insensitive).
* 🖼️ Display Pokémon’s front sprite instantly.
* ⚠️ Error handling for invalid Pokémon names.
* 🎨 Clean and responsive design with modern UI styling.
* 🌐 Fetches live data from the **PokéAPI**.

---

### 🧠 How It Works

1. The user enters a Pokémon name (e.g., *pikachu*, *bulbasaur*, *charizard*).
2. When the **Search** button is clicked, a request is sent to:

   ```
   https://pokeapi.co/api/v2/pokemon/{pokemonName}
   ```
3. The program retrieves the Pokémon data (JSON format).
4. The Pokémon’s front sprite is displayed dynamically on the page.
5. If the Pokémon name is invalid, an alert message appears.

---

### 🧱 Project Structure

```
📂 Pokémon-Searcher
├── Pokemon searcher.html
├── Pokemon searcher style.css
└── pokemon searcher script.js
```

---

### 💻 Code Breakdown

#### 🟩 HTML (`Pokemon searcher.html`)

Provides the page layout and connects all resources:

* Input field for Pokémon name
* Button to trigger search
* Image element for displaying Pokémon sprite

#### 🟦 CSS (`Pokemon searcher style.css`)

Handles UI design and layout:

* Gradient background
* Centered content and rounded input fields
* Button hover animations
* Card-like Pokémon image display

#### 🟨 JavaScript (`pokemon searcher script.js`)

Implements the main logic and API call:

```js
async function fetchData() {
    const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    document.getElementById("PokemonSprite").src = data.sprites.front_default;
}
```

Includes full error handling for missing Pokémon names or invalid inputs.

---

### 🎨 Preview (Concept)

```
------------------------------------
|     Pokémon Searcher             |
|----------------------------------|
|  [ pikachu ] [ Search Pokémon ]  |
|                                  |
|        🟡   Pokémon Sprite   🟡   |
------------------------------------
```

---

### 🧰 Technologies Used

* **HTML5** → Page structure
* **CSS3** → Layout and styling
* **JavaScript (ES6+)** → Fetch API & DOM manipulation
* **PokéAPI** → Data source

---

### 🚀 How to Run

1. Download all three project files into the same folder.
2. Open `Pokemon searcher.html` in a web browser.
3. Type a Pokémon name and click **Search Pokémon**.
4. Enjoy the results! ⚡

---

### 🧑‍💻 Developer

**Belal Nasr**
A Computer Science student exploring front-end web development, API integration, and interactive projects.

