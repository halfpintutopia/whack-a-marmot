# Whack-A-Marmot

![Screenshot of the site on the Am I Responsive site](./docs/media/images/am_i_responsive.png)

[View the live project here.](https://halfpintutopia.github.io/magic-forest-trail/)

The website is a fan website and has been created solely for the course, but it was inspired by an actual hiking trail based in Braunwald, Glarus-Süd, in the North East of Switzerland. "Zwerg Bartli", a mountain-dwelling    
The dwarf is an affectionately well-known character in this area—a fictitious character made famous by a children's book. 

![GitHub forks](https://img.shields.io/github/forks/halfpintutopia/magic-forest-trail?style=social)
![W3C Validation](https://img.shields.io/w3c-validation/html?style=social&targetUrl=https%3A%2F%2Fhalfpintutopia.github.io%2Fmagic-forest-trail%2F)
---

## Table of contents
* [User Experience](#user-experience-ux)
  * [Intended Audience](#intended-audience)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Wireframes](#wireframes)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries-and-programs-used)

* [Remote & Local Development](#remote-and-local-deployment)
  * [Remote Deployment](#remote-deployment)
  * [Local Deployment](#local-deployment)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

# User Experience (UX)

The site was designed and developed mobile first. 

The idea of the website was inspired by a friend, Hermina Oláh Vass. She and her family are very enthusiastic about the trail. She is motivated to breathe a new breath of life into this local attraction. The idea was to provide an essential website to start her project. and gain support from investors in Braunwald. As due to climate change, the winter season needs to be open to ventures, other than winter sports. 

## Intended Audience

* Parents with children
* Families
* Schools


* ## User stories

* Client Goals
    * Provide content that is child appropriate
    * Provide content for adults or parents with children
    * Provide easy access to routes
        * Show trail distances
        * Show approximate times to hike
        * Show difficulty level
    * Provide a booking form
        * For people to book family passes in advance
        * To also ask questions about the trail
* First Time Visitor Goals
    * Find information about the trails
    * Find out how to get to the start of the trails
    * Find information about the distance of the trails
    * Find variations of the trial
    * Find the difficulty and suitability of the trails
    * See images of various trails
* Return Visitor Goals
    * Try alternative routes
* Frequent Visitor Goals
    * Refer their friends, families and associates about the hiking trail.


# Design

## Wireframes
Wireframes were created for the site with [Figma](https://www.figma.com).

![Figma Wireframe for mobile and desktop](./docs/media/images/wireframe/game_page.png)

*Wireframe for mobile and desktop*

<details>
<summary>Game page for mobile and desktop</summary>
<br>

![Figma Wireframe of start page for mobile and desktop](./docs/media/images/wireframe/start_page.png)

*Start page - mobile and desktop*
</details>
<br>

<details>
<summary>Instructions modal for mobile and desktop</summary>
<br>

![Figma Wireframe of trail list for mobile and desktop](./docs/media/images/wireframe/how_to_play.png)

*Instructions modal - mobile and desktop*
</details>
<br>

<details>
<summary>Settings modal for mobile and desktop</summary>
<br>

![Figma Wireframe of trail page for mobile and desktop](./docs/media/images/wireframe/settings.png)

*Settings modal - mobile and desktop*
</details>
<br>

To see the full wireframe, view it [here](https://www.figma.com/file/uxe1pvEmLdY4evLEZttrqL/Whack-A-Marmot-(Copy)?t=gLTwq7qkJGoX6F3p-1).

---

The website consists of the following:

* Start page
* Play page
* A 404 page
* Instructions modal
* Settings modal
* Leaderboard

## Colour Scheme

The colour palette was meant to support a cheerful and natural backdrop to showcase the trails. The colours should complement greens to represent nature and the forest. The red was to represent Bartli's hat. 

Created colour palette using:
* [Adobe Color](https://color.adobe.com/create/image) 

![Colour palette for the website](./docs/media/images/design/color-palette/theme_from_image.png)

### Accessibility Concerns

The colour palette was altered to improve accessibility and increase contrast.

Accessibility tested using the Adobe's [Accessibility Tools](https://color.adobe.com/create/color-contrast-analyzer).

Results and contrast improvements suggestions:

<details>
<summary>Dark purple & Pale blue</summary>
<br>

![Adobe Accessibility Tools - Color contrast between dark purple and pale blue](./docs/media/images/wireframe/settings.png)

*Settings modal - mobile and desktop*
</details>
<br>

Feedback from lighthouse testing raised an issue with accessibility and colour contrast. As a result, the red colour was changed on the button with white font. 

## Typography

Permanent Marker and Overpass Fonts were chosen from [Google Fonts](https://fonts.google.com). Fonts were selected to represent fun, playful, clear and easy to read.

![Permanent Marker 400](./docs/media/images/typography/permanent_400.png)

![Overpass 200](./docs/media/images/typography/overpass_200.png)

![Overpass 400](./docs/media/images/typography/overpass_400.png)

![Overpass 600](./docs/media/images/typography/overpass_600.png)

<br>

### References for typography:

When thinking about typography, the type had to suit responsively as well. The fonts had to be also readable on mobile View.

Using Utopia, clamps for fonts and spaces were created. This minimised errors where fonts would be oversized or too small on desktop or mobile devices. 

* [min(), max(), and clamp(): three logical CSS functions to use today](https://web.dev/min-max-clamp/)
* [Modern Fluid Typography Using CSS Clamp](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
* [RFS](https://github.com/twbs/rfs#installation)
* [Utopia - Responsive font and space sizing](https://utopia.fyi)

## Imagery

Images are located on all pages. At the top of the page, under the navigation, is the header image. All pages have the same thematic layout, and the layout should be consistent on all pages, including the home page. 

Hiking photos have been used from:

* [Pexels](https://www.pexels.com/)
* [Unsplash](https://unsplash.com/)


Illustrated images, icons and favicons were generously provided by:

* Hermina Oláh Vass


All images should match the theme of the site, families with children on hiking activities. The hand-drawn illustrations were to support the theme of the trail being inspired by an illustrated storybook. 

To increase the speed of the website., all images were compressed. Also, I added the ```lazy-loading``` attribute to images showing below the fold.

### References for images

* [An image format for the Web](https://developers.google.com/speed/webp)
* [A Guide to Responsive Images with Ready-to-Use Templates](https://medium.com/free-code-camp/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433)

<br>

Icons were used for social links and buttons. The icons used on the site were taken from:

* [Font Awesome](https://fontawesome.com/)

<br>

The footprints-SVG was created using the SVG from:

* [Pixabay](https://pixabay.com)

* [Footprint](https://pixabay.com/vectors/shoe-print-boot-mark-traces-36730/) by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=155457">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=155457">Pixabay</a>

The footprints were created by using GIMP to manipulate the Image, and then the SVG was created with Inkscape. 

# Features

Details of each feature are listed under [General Features on Each Page](#general-features-on-each-page).

The website consists of the following pages:
* Home page
* Storybook page
* Individual hiking trail pages
    * Full trail
    * Option 1
    * Option 2
    * Option 3
    * Option 4
    * Option 5
* Form page
    * with a success page
* 404 page 

---

[Home](https://halfpintutopia.github.io/magic-forest-trail/index.html)

The home page consists of 5 sections. 
* Full height and width image with:
    * text overlay
    * button to scroll down to hiking trail cards
* Image, title and text
* Trail cards
* Image, title and text (reversed order)
* Gallery
* Floating booking button

--- 

[Storybook](https://halfpintutopia.github.io/magic-forest-trail//storybook.html)

The storybook page consists of the following:
* Image banner at the top of the page
* Multiple images, title and text, alternatively reversing the order

---

[Individual trail page](https://halfpintutopia.github.io/magic-forest-trail/trails/full-trail.html)

Individual trail pages are accessed via the home page. A link around each card directs visitors to see more about the trail.

The hiking trail page consists of the following:
* Image banner at the top of the page
* Statistics are divided into 3 "boxes."
* A back-to-trail list link, which redirects visitors back to the home page to the Trail Cards
* A table of the stages, trails are divided into easy-to-walk stages
* A map with markers of the locations indicated in the stages

---

[Form](https://halfpintutopia.github.io/magic-forest-trail/contact-us.html)

The form page consists of the following:
* A table to clearly present the tickets and prices
* Form to add first name, last name, email address, number of adults and children and additional comments.
* A map with the location of the main station

---

Every page except the 404 page, success page and form page has a CTA Button, which is a button to take visitors to the booking form.

## General Features on Each Page 

### Specific features

#### Trail List

![Screenshot of the trail (lists) feature](./docs/media/images/features/trail-list/trail_list_mobile.png)

*Screenshot of the trail (lists) feature for mobile*

<br>

![Screenshot of the trail (lists) feature](./docs/media/images/features/trail-list/trail_list_desktop.png)

*Screenshot of the trail (lists) feature for desktop*

<br>

The trail cards displayed contain text descriptions. The height of each card depends on the size of the device. A class was added to shorten the text so that the card heights were manageable on mobile devices. 

#### Gallery

![Screenshot of the gallery feature for mobile](./docs/media/images/features/gallery/gallery_mobile.png)

*Screenshot of the gallery feature for mobile*

<br>

![Screenshot of the gallery feature for desktop](./docs/media/images/features/gallery/gallery_desktop.png)

*Screenshot of the gallery feature for desktop*

<br>

The gallery is in a grid layout masonry style. The gallery was to suit and demonstrate images that are meant to be viewed in portrait or landscape.

### Buttons

#### Call to action

![Screenshot of the cta feature for mobile](./docs/media/images/features/cta/cta_button_mobile.png)

*Screenshot of the CTA feature for mobile*

<br>

![Screenshot of the cta feature for desktop](./docs/media/images/features/cta/cta_button_desktop.png)

*Screenshot of the CTA feature for desktop*

<br>

The button link for the contact form is a floating element on the page. This was changed from the original wireframe, as the CTA button was to be visible wherever the user was on the page. Floating, it made it visible and accessible for visitors to easily click. 


#### Back to trails button

![Screenshot of the back button feature for mobile](./docs/media/images/features/back-btn/back-btn_mobile.png)

*Screenshot of the back button feature for mobile*

<br>

![Screenshot of the back button feature for desktop](./docs/media/images/features/back-btn/back-btn_desktop.png)

*Screenshot of the back button feature for desktop*

<br>

The back button is to enable visitors to go back to the trail card list quickly after viewing the trail page. On mobile, the backlink is always coloured red, but on the desktop, there is a hover effect from white to red. 


#### Explore button

https://user-images.githubusercontent.com/30613818/208512665-33657fd0-3047-4207-b8a4-384b875249ab.mov

The explore button is located on the landing page. The button takes visitors directly to the trail cards so that they can explore the different hiking trails. 

### Header image

### With statistics (distance, level and time) and a back button

![Screenshot of the header image for trail page with statistics and back button feature for mobile](./docs/media/images/features/header-img/header-img_stats_back-btn_mobile.png)

*Screenshot of the header image for trail page with statistics and back button feature for mobile*

<br>

![Screenshot of the header image for trail page with statistics and back button feature for desktop](./docs/media/images/features/header-img/header-img_stats_back-btn_desktop.png)

*Screenshot of the header image for trail page with statistics and back button feature for desktop*

<br>

The header image should be the first View of the landscape and also quick information about the trail. Showing the distance, approximate time to hike and the level of ease.  

### Trail map

#### Map using leaflet.js

![Screenshot of the trail map on trail page feature for mobile](./docs/media/images/features/trail-map/trail-map_mobile.png)

*Screenshot of the trail map on trail page feature for mobile*

<br>

![Screenshot of the trail map on trail page feature for desktop](./docs/media/images/features/trail-map/trail-map_desktop.png)

*Screenshot of the trail map on trail page feature for desktop*

<br>

The trail map should show all the locations the trail encounters. The trail map markers are custom markers of Bartli.


### text and Image

#### Text Image Sections (with & without quick links)

Version 1:

![Screenshot of the text image feature for mobile](./docs/media/images/features/text-image/feature_image-title-text_mobile.png)

*Screenshot of the text image feature for mobile*

<br>

![Screenshot of the text image feature for desktop](./docs/media/images/features/text-image/feature_image-title-text.png)

*Screenshot of the text image feature for desktop*

<br>

Version 2:

![Screenshot of the text image with quicklinks feature for mobile](./docs/media/images/features/text-image/feature_image-title-text-with-quicklinks_mobile.png)

*Screenshot of the text image with quick links feature for mobile*

<br>

![Screenshot of the text image with quicklinks feature for desktop](./docs/media/images/features/text-image/feature_image-title-text-with-quicklinks.png)

*Screenshot of the text image with quick links feature for desktop*

<br>

There are two versions of the text-image feature. 

The first one can be found on the home page. This is a simple layout of a single image and text. When multiple image text sections are on the same page, they are set to be alternative sides. The text remains in a container, and the Image stretches to either the left or right side, dependent on which side of the text it is positioned. This effect was to fill empty space on wider devices and to add colour.

The second version is seen on the storybook page. The layout is exactly the same. The content is slightly different, as, under each text, there is a link which enables the visitor to quickly go to the trail page if they are interested in visiting the place mentioned in the story. 

## Future Implementations

1. Add SwissMobility API to show:
    * Show actual height
    * Show real distances
    * Show declines and inclines
    *  the ascent and descent
2. Connect Instagram API to enable hikers to share images
    * Share their photos on social media
    * Try other activities provided in the area
3. Connect to other local companies
    * Be able to contact Braunwaldbahn, the company that provides the cable car service
    * Stay overnight in the accommodation provided in the area
    * Try other recommended activities in the local area
4. Provide a platform that boosts tourism in the area

## Accessibility

* Use of semantic HTML
* Use of ARIA
* Use of alt attributes
* Provide an invisible "Skip to content" button for a screen reader. Enabling visitors to skip the navigation menu
* Use Adobe Color to check colour contrast
* Fixed header, providing visitors with easy access to other pages
* Floating button element providing visitors to reach the contact form easily

# Technologies Used

## Languages Used

* HTML5
* CSS3
* JavaScript

## Frameworks, Libraries and Programs Used

* [Google Fonts](https://fonts.google.com)
    * Google Fonts was used to import the font to the style.css, which is used on all pages throughout the project.
* [Font Awesome](https://fontawesome.com/)
    * Font Awesome was used on all necessary pages throughout the website to add icons for aesthetic and UX purposes.
* [Git](https://git-scm.com/)
    * Git was used for version control by utilising the Gitpod terminal to commit to Git and push to GitHub.
* [GitHub](https://github.com/)
    * GitHub was used to store the project's code after being pushed from Git.
* [Gitpod](https://www.gitpod.io/)
* [Coolors](https://coolors.co/)
* [Adobe Color](https://color.adobe.com/create/color-wheel)
* [Pexels](https://www.pexels.com/)
* [Unsplash](https://unsplash.com/)
* Devtool
    * [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/)
    * [Chrome](https://developer.chrome.com/docs/devtools/)
* [Browserstack](https://www.browserstack.com)
* [LeafletJS](https://leafletjs.com/) - [Use of GeoJSON with Leaflet](https://leafletjs.com/examples/geojson/)
* [Figma](https://www.figma.com/)
* [Inkscape](https://inkscape.org/)
* [GIMP](https://www.gimp.org/)
* [SVGator](https://app.svgator.com)

# Remote and Local Deployment

Git was used for version control. Version control was done locally and remotely. For remote version control, GitHub was used. Regular commits were made after each file change.

## Remote deployment
GitHub Pages was used to deploy the site remotely. 

https://user-images.githubusercontent.com/30613818/205482822-4c33545b-8b52-4a2b-9212-0e119214ff22.mov

*Screencast of deployment*

<br>

1. Go to the repository
2. Click the Settings tab
3. Click on Pages in the left-hand menu, under code and automation
![Click Pages](./docs/media/images/deployment/deployment_pages.png)
   *Screenshot of how to get the Pages section*

4. Under Build and deployment > Source, ensure Deploy from a branch is selected 
![Choose Source](./docs/media/images/deployment/deployment_pages_source.png)
   *Screenshot of source option*

5. Under Build and deployment > Branch, select the main branch 
![Choose Branch](./docs/media/images/deployment/deployment_pages_branch.png)
   *Screenshot of branch option*

6. Click save
7. It may take more than a few minutes, but when the page has been created, you will see the following success message 
![Successful deployed](./docs/media/images/deployment/successful_page.png)
   *Screenshot of success message*


## Local Deployment

To contribute or check the code yourself, you can:
* fork the repository
* clone the repository

### How to Fork

1. To fork, go the repository
2. Click on the Fork button in the top left corner of the page. ![Click Fork](./docs/media/images/fork/fork_button.png)
3. Fill in the form with either keep the name or create a new name for the repository 
![Create Fork](./docs/media/images/fork/fork.png)

### How to Clone

1. To clone on the repository 
2. Click on the Code button above the repository files. 
3. A drop-down will appear and choose either 
![Click Code](./docs/media/images/deployment/clone.png): 
    * HTTP
    * SSH
    * GitHub CLI 
4. Go to your terminal and decide where you want to clone the files.
5. Use the copy/paste button and copy it into your terminal
6. You also have the option to download a ZIP file of the code

# Testing

Browserstack was used for testing. The devices selected were:
* Windows
    * Firefox 108 on Windows 11
    * Chrome 108 on Windows 11
* Apple
    * Ventura Safari 16
* Android
    * Chrome Galaxy S22
    * Xiaomi Redmi Note 11 Chrome
* Apple iOS
    * Safari iPhone SE 2022

## User experience

Testing implemented from [User stories](#user-stories)

### Client Goals Testing

| Client goal | Implementation | Tested | Successful |
| ------------- |:-------------:|:-----:|:-----:|
| Provide content that is child appropriate | The content was child-friendly | Yes | Yes |
| Provide content for adults or parents with children | The content is descriptive yet simple  | Yes | Yes |
| Provide easy access to routes |  Trail list navigated via the nav bar. Quick links added to the Storybook page | Yes | Yes |
| Inform visitors of trail distances | Trail details and distances are easily seen on the top of the page  | Yes | Yes |
| Inform visitors of approximate times to hike the trail | Trail details, approximate times easily seen on the top of the page  | Yes | Yes |
| Inform visitors of difficulty levels | Trail details, difficulty levels easily seen on the top of the page  | Yes | Yes |
| Provide a booking form | Accessible via the CTA button show on all pages  | Yes | Yes |
| Provide a form which allows users to book family passes in advance | form has inputs for booking the number of adults and children for family pass | Yes | Yes |
| Provide a form for visitors to ask a question about the trail | Textarea input added for users to ask comments or ask questions | Yes | Yes |

### First-Time Visitor Goals

| First Time Visitor Goals | Implementation | Tested | Successful |
| ------------- |:-------------:|:-----:|:-----:|
| Find information about the trails | Trail list shows available trails. The link from the home page takes visitors to individual trail pages  | Yes | Yes |
| Find information about the distance of the trails | information about the distance is above the fold on individual trail pages | Yes | Yes |
| Find variations of the trial | List of trail variations are on the home page  | Yes | Yes |
| Find the difficulty of the trails | information about the level is above the fold on individual trail pages  | Yes | Yes |
| See images of various trails | Images of hiking trails in the gallery on the home page. The main Image in the header is of the trail | Yes | Yes |

### Return Visitor Goals

| Return Vistor Goals | Implementation | Tested | Successful |
| ------------- |:-------------:|:-----:|:-----:|
| Try alternative routes | List of trails on the home page. Visitors can check other routes | Yes | Yes |


### Frequent Visitor Goals

| Frequent Vistor Goals | Implementation | Tested | Successful |
| ------------- |:-------------:|:-----:|:-----:|
| Refer their friends, families and associates about the trail | Visitors can share the [trail list](https://halfpintutopia.github.io/magic-forest-trail/index.html#trails) and each of the individual trail pages | Yes | Yes |

### Bugs and fixes

|Bug / Errors | Where / Location site | Browser | Device | Remarks | Mode (light / dark) | Fixed | Solution |
|-------------|-----------------------|---------|--------|---------|:-------------------:|:-----:|----------|
| Fields in form not visible | contact form | Chrome, Firefox | Apple Laptop| | dark | Yes | Change line colors for field. Applied colour for dark and light mode |
| Only adults and kids visible (missing: first name, last name, email, telephone)| contact form | Chrome | Apple Laptop | | dark | Yes | Change font colour to suit dark and light mode |
| Arrows to add / sub-adults / kids only visible on mouse over | contact form | Chrome | Apple Laptop | | dark | | No | Arrow colour are determined by the browser |
| Reference * not visible (bottom of the page) | contact form | Chrome | Apple Laptop | actually there are * but they are at form fields marking mandatory entries, slightly confusing | dark | | Yes | Removed the Reference as it was not relevant to the content |
| Social media icons go white (on white), therefore not visible on mouse over everywhere / every page | Chrome, Firefox | Apple Laptop| | | dark | Yes | Changed the icon colours in the footer |
| Twitter link typo - redirects to "Twiiter" instead of "Twitter" | everywhere / every page | Chrome, Firefox | Apple Laptop | | dark | Yes | Corrected typos |
| Text box / frame of text box not visible | contact form | Chrome, Firefox | Apple Laptop| | dark | Yes | Added border to textarea field. Applied colour for both dark and light modes |
| Image not loading | full trail | Chrome, Firefox | Apple Laptop| | dark | Yes | Fixed the broken link by correcting the relative path |
| Zoom/pan on the map does not include all dwarfs, only the top half | every trail page | Chrome | Apple Laptop | | dark | Yes | Added bounds to the leaflet map to centre the map according to all markers |
| Shorten text on the first story (size is off in comparison to the next story bits), not a bug, just looking off | storybook | Chrome, Firefox | Apple Laptop| | dark | Yes | The text remains the same but changed spacing on the text image grid areas |
| Links either labelled wrong or wrong links set (Trail option 3 leads to variation 1) | storybook | Chrome, Firefox | Apple Laptop | | dark | Yes | Fixed links to suit the actual href |
| Image not loading | full trail | Chrome | Android mobile | | dark | Yes | Fixed the broken link by correcting the relative path |
| Little arrow to expand/collapse above adults doesn't do anything | contact form | Chrome, Firefox | Apple Laptop | | light / dark | Yes | form made visible by changing colours for dark and light mode |
| Neither the labels nor the placeholder texts are visible at the first name, last name, email and phone number inputs | contact form |  |  |  | dark | Yes | Make placeholders visible by changing the default opacity to 1 for input placeholders. I also had to fix specificity, as I initially assumed the issue had occurred due to the wrong pseudo element being selected. After trial and error, I discovered that the problem occurred due to specificity, as form input needed to be more specific. |
| Zoom out of your maps more than the max size of the maps are | All trail pages |  |  |  |  | Yes | Set a min and max zoom on the leaflet map |
| Error form display in Chrome only sometimes notifies about wrong inputs. Firefox tells you correctly which input is wrong | contact form | Chrome | Apple Laptop | | dark | Not a fix | Chrome moves the page to the area of the error, the red border line highlights the missing information |
| When going back from the trail page to the storybook, the last chosen trail option is marked in green instead of red. Nice, but I wonder if intentional. does not happen in Chrome only ff | storybook | Firefox | Apple Laptop | | dark | Yes | Change the look of the button, ensure :visited pseudo is not used |

#### Not solved

The following bug was found, but it was hard to determine the reason for the jumping of the sticky button. It only occurred on mobile devices. The issue still needs to be resolved and added as an issue to GitHub.

https://user-images.githubusercontent.com/30613818/208293996-427c7401-a60a-47dc-bd0f-677ca0110535.mp4

|Bug / Errors | Where / Location site | Browser | Device | Remarks | Mode (light / dark) |
|-------------|-----------------------|---------|--------|---------|:-------------------:|
| book your family pass blocks scroll down text and animation; Book your family pass goes into hiding when scrolled to the position of any header; Book your family pass seemingly jumps around randomly when scrolling; Book your family pass snaps back down after scrolling up from the bottom of the page | Home / Storybook | Chrome | Android mobile | | dark |

### Lighthouse

<details>
<summary>Home page</summary>

![Home page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_index_light-mode.png)

*Home page in light mode*

<br>

![Home page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_index_dark_mode.png)

*Home page in dark mode*

</details>

<details>
<summary>Storybook page</summary>

![Storybook page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_storybook_light-mode.png)

*Storybook page in light mode*

<br>

![Storybook page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_storybook_dark_mode.png)

*Storybook page in dark mode*

</details>

<details>
<summary>Full trail page</summary>


![Full trail page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_full-trail_light-mode.png)

*Full trail page in light mode*

<br>

![Full trail page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_full-trail_dark_mode.png)

*Full trail page in dark mode*

</details>

<details>
<summary>Option 1 trail page</summary>

![Option 1 trail page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_variation-1_light-mode.png)

*Option trail page in light mode*

<br>

![Option 1 trail page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_variation-1_dark_mode.png)

*Option trail page in dark mode*

</details>

<details>
<summary>Option 2 trail page</summary>

![Option 2 trail page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_variation-2_light-mode.png)

*Option 2 trail page in light mode*

<br>

![Option 2 trail page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_variation-2_dark_mode.png)

*Option 2 trail page in dark mode*

</details>

<details>
<summary>Option 3 trail page</summary>

![Option 3 trail page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_variation-3_light-mode.png)

*Option 3 trail page in light mode*

<br>

![Option 3 trail page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_variation-3_dark_mode.png)

*Option 3 trail page in dark mode*

</details>

<details>
<summary>Option 4 trail page</summary>

![Option 4 trail page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_variation-4_light-mode.png)

*Option 4 trail page in light mode*

<br>

![Option 4 trail page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_variation-4_dark_mode.png)

*Option 4 trail page in dark mode*

#### Error in Lighthouse testing

![Best practice error in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_variation-4_dark_mode_best-practice-error.png)

*Best practice error in dark mode*

<br>

The error states: 

"Image natural dimensions should be proportional to the display size and the pixel ratio to maximise image clarity."

This error looks to be from the map tile, as all the screenshots refer to the Image added by the tile, linked by [vmts.geo.admin.ch](vmts.geo.admin.ch).

</details>

<details>
<summary>Option 5 trail page</summary>

![Option 5 trail page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_variation-5_light-mode.png)

*Option 5 trail page in light mode*

<br>

![Option 5 trail page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_variation-5_dark_mode.png)

*Option 5 trail page in dark mode*

</details>

<details>
<summary>Contact us form page</summary>

![Contact us form page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_contact-us_light-mode.png)

*Contact us form page in light mode*

<br>

![Contact us form page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_contact-us_dark_mode.png)

*Contact us form page in dark mode*

</details>

<details>
<summary>Success form page</summary>

![Success form page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_success_light-mode.png)

*Success form page in light mode*

<br>

![Success form page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_success_dark_mode.png)

*Success form page in dark mode*

</details>

<details>
<summary>404 page</summary>

![404 page in light mode](docs/media/images/testing/lighthouse/light/lighthouse_404_light-mode.png)

*404 page in light mode*

<br>

![404 page in dark mode](docs/media/images/testing/lighthouse/dark/lighthouse_404_dark_mode.png)

*404 page in dark mode*

</details>

### Validator Testing

* Use [W3C Markup Validation Service](https://validator.w3.org) to validate all HTML pages
* Use [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate all stylesheets
    * Error (```width: min(100% - var(--container-padding), var(--container-max-width));```) caused from related to the following issue:
        * [Please add support for CSS variables ("custom properties"), a widely supported and crucial feature](https://github.com/w3c/css-validator/issues/111)

# Credits

## Code Used
All code is also referenced as a comment in stylesheets.

* [Fix hover effect](https://css-tricks.com/cool-hover-effects-using-background-properties)
* [Fix error with scroll to content](https://www.youtube.com/watch?v=iGUSTyG-CYw)
* [Screen Reader only - hidden elements](https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/style.css#L112)
* [Custom Checkbox](https://moderncss.dev/pure-css-custom-checkbox-style/)
* [Gallery layout](https://www.youtube.com/watch?v=rg7Fvvl3taU&t=1306s)
* [Containers](https://www.youtube.com/watch?v=VsNAuGkCpQU&t=366s)
* [Image with text overlay](https://www.youtube.com/shorts/oy2iUDT0mf8)
* [Assessibility - Kevin Powell - Most sites have a "hidden" link, and yours should too!](https://www.youtube.com/watch?v=jDDaOFr9nqQ)


### References & Resources
A list of references used for the site:

* [Kevin Powell](https://www.youtube.com/@KevinPowell)
* [Box shadows](https://www.cssmatic.com/box-shadow)
* [CSS Tricks - HTML Picture](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-picture)
* [Web Dev - Browser level image lazy loading](https://web.dev/browser-level-image-lazy-loading/)
* [Editorx - Font size](https://www.editorx.com/shaping-design/article/font-size)
* [The 100% correct way to do CSS breakpoints](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)
* [Containers - width for different devices](https://getbootstrap.com/docs/5.2/layout/containers)
* [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/)
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    
## Content

The content created for this website was created by my partner, Stefan Tschudi, a colleague, Hermina Oláh Vass and myself. The story was loosely based on a rough translation of the character based on "Der Zwerg Bartli" by Lorly Jenny. 

All maps were created from actual locations found in [Zwerg-Bartli-Erlebnisweg](https://braunwald.ch/de/map/detail/zwerg-bartli-erlebnisweg-9ff632fe-5eaf-45d9-a6ea-4d743635148f.html). 

The address, email and telephone number on the contact page were made up and are not associated with Braunwald or the story.

The trail is an actual, locally well-known tourist attraction. The trail locations were based on the existing hiking trails in Braunwald, Glarus-Süd in, Switzerland.

## Media

<details>
<summary>Homepage</summary>

* [Green Trees on Brown Soil](https://www.pexels.com/photo/green-trees-on-brown-soil-3670681/)
* [Footprint](https://pixabay.com/vectors/shoe-print-boot-mark-traces-36730/) by <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=155457">OpenClipart-Vectors</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=155457">Pixabay</a>

The footprints were created by using GIMP to manipulate the Image, and then the SVG was created with Inkscape. 

* [Two Girls Sitting on Brown Bench Near Body of Water photo by Susanne Jutzeler, suju-foto](https://www.pexels.com/photo/two-girls-sitting-on-brown-bench-near-body-of-water-1292006/)
* [children and adults hiking on a trail in the mountains](https://unsplash.com/photos/FSdsaiuRNfc) by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
</details>

<details>
<summary>Gallery</summary>

* [Man, woman, and child walking together along dirt road](https://unsplash.com/photos/REKXJ7JhwiI) by <a href="https://unsplash.com/@acasetta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alberto Casetta</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Child looking at map photo](https://unsplash.com/photos/kZO9xqmO_TA) by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Two boys hiking through tall trees in forest](https://unsplash.com/photos/e3PQpLM_SGo) by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/s/photos/kids-hiking-adventure?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Man carrying child](https://unsplash.com/photos/nzUHrjz4wu4) by <a href="https://unsplash.com/@katiemoum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katie Moum</a> on <a href="https://unsplash.com/s/photos/kids-hiking-adventure?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Girl with turquois backpack, walking with family and friends](https://unsplash.com/photos/jd4_-NCdLE4) by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
</details>

<details>
<summary>Trail list and Trail Pages</summary>

* [White-Red-White Hiking flag painted on rock](https://unsplash.com/photos/ZIFccT5-36Y) by <a href="https://unsplash.com/@giger_00?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Curdin Giger</a> on <a href="https://unsplash.com/s/photos/hiking-switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [View of the View with the mountain as the backdrop](https://unsplash.com/photos/FNaFLvbLFuk) by <a href="https://unsplash.com/@chris_regg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christian Regg</a> on <a href="https://unsplash.com/s/photos/hiking-switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [View from the path that leads to the lake](https://unsplash.com/photos/guc520jc0lk) by <a href="https://unsplash.com/@mamuej?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marc</a> on <a href="https://unsplash.com/s/photos/hiking-switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [View of mountain and valley below](https://unsplash.com/photos/NaEIPJ51EHE) by <a href="https://unsplash.com/@bladeoftree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marco Meyer</a> on <a href="https://unsplash.com/s/photos/hiking-switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [View from the top of the mountain](https://unsplash.com/photos/NaEIPJ51EHE) by <a href="https://unsplash.com/@msafwat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohammed Abdullatif</a> on <a href="https://unsplash.com/s/photos/hiking-switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Swiss Alps in the middle of summer on a sunny day](https://unsplash.com/photos/fZsIcej_bQA) by <a href="https://unsplash.com/@allphotobangkok?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paul Szewczyk</a> on <a href="https://unsplash.com/s/photos/hiking-switzerland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</details>

<details>
<summary>Storybook</summary>

* [Children and adults hiking on a trail in the photo of the mountains from Unsplash](https://unsplash.com/photos/FSdsaiuRNfc) by <a href="https://unsplash.com/@greg_rosenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Greg Rosenke</a> on <a href="https://unsplash.com/s/photos/free-hiking-family-mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Girl journalling on a rocky surface](https://unsplash.com/photos/q-motCAvPBM) by <a href="https://unsplash.com/@nixcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tyler Nix</a> on <a href="https://unsplash.com/s/photos/hiking-family-mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Family and dog going down the mountain](https://unsplash.com/photos/7MrXw_o7Eo4) by <a href="https://unsplash.com/@souvenirpixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Wheeler</a> on <a href="https://unsplash.com/s/photos/hiking-family-mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Boy climbing up rocky steps](https://unsplash.com/photos/t9VI_OSaErI) by <a href="https://unsplash.com/@mael_balland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mael BALLAND</a> on <a href="https://unsplash.com/s/photos/family-hiking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Sun rays beating down on mother and daughter walking in the forest](https://unsplash.com/photos/RRZM3cwS1DU) by <a href="https://unsplash.com/@souvenirpixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Wheeler</a> on <a href="https://unsplash.com/s/photos/hiking-family-mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Boy walking up alpine hiking trail path](https://unsplash.com/photos/DgSRu6944ZQ) by <a href="https://unsplash.com/@morganddl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Morgan David de Lossy</a> on <a href="https://unsplash.com/s/photos/children-hiking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
* [Small child with pink teepee tent](https://www.pexels.com/photo/pink-teepee-tent-3038343/) Photo by Caleb Oquendo from Pexels


</details>

## Acknowledgements
A big thank you goes to all the incredible people who supported me during this process. Acknowledgements go to those who took the time to provide great insights and advice
* Rahul Lakhanpal - for keeping me focussed.
* Stefan Tschudi - for repeatedly testing my site on his computer and mobile. Being continually supportive and keeping me on track.
* Hermina Oláh Vass - for providing beautiful illustrations and allowing me the privilege to use your images on my website.

<br>

Also, a huge thank you for the support on Code Institute's Slack Channels, especially Ger Tobin, who suggested using Leaflet and Szilvia Csernus, for reviewing my project and taking the time to give me constructive feedback, which I was able to report as bugs. 
