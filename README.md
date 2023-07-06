# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/desktop-view.png)
![](./images/mobile-view.png)

### Links

- Live Site URL: [https://tjay05.github.io/advice-generator-app-main/](https://tjay05.github.io/advice-generator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learnt how to consume API's and implement them

```js
const getData = async()=> {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
```

## Author

- Frontend Mentor - [@Tjay05](https://www.frontendmentor.io/profile/Tjay05)
- Twitter - [@tjay_yy](https://www.twitter.com/@tjay_yy)