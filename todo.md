---
title: TODO
layout: misc
---

<link href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap" rel="stylesheet">
<!-- <link href="https://fonts.googleapis.com/css2?family=Mansalva&display=swap" rel="stylesheet"> -->

# TO-DO

You've found my "secret" to-do list!  \
This is where I dump all the possible to-dos for this website.

If you have any suggestions on how to implement these (or if you'd like to help out), please feel free to do a pull-request on the site's repo.

***

## Bugs

If you have found any bugs on the site, please report them via email or Github (repo in folder) - I will catalog them here.

Please **clearly** state reproducible steps, browser type/version, device, notes, and any other useful info.

- [ ] Navbar bug: navbar does not hide if nav/burger menu opened in mobile view then scrolled in non-mobile view
  - Reproducible steps:
    - Go to mobile view
    - Open nav/burger menu
    - Resize screen to non-mobile view
    - Scroll down
    - Navbar doesn't hide!
  - Notes:
    - Edge case?
- [ ] Generating a portfolio item's card bug: if truncated text has hyperlink, rendering cards on "Portfolio" causes the subsequent item's HREF value to be misinterpreted
  - Reproducible steps:
    - Add hyperlink to near start of any portfolio card
    - Re-render
    - See messed-up render & its HTML output!
  - Notes:
    - Workaround is remove hyperlink (if possible) or move it to the end - enough?
    - Workaround as of 250108: remove post contents in cards!
    - If we want previews, we MUST convert all hyperlinks to paragraph text...

***

## Feature suggestions

- [ ] Make CV & portfolio sections collapsible
- [ ] Make site more mobile-friendly?
- [ ] How to specify section breaks in MD? Can it convert to breaks in HTML? (ideally without parser, or minimally)
- [ ] Restructure Portfolio - separate pages for Choral vs Poetry vs etc?
- [ ] Generate a new burger button - SVG or pure CSS?
- [ ] Spin-off Poetry into its own page in header

***

## Done!

- [X] Add more portfolio items
- [X] Add a proper bio...
- [X] Hide the HUGE margin between name & body of CV page in `Print` view

<style>
body {
  font-family: "Comic Neue", cursive;
  /* font-family: "Mansalva", serif; */
}
</style>