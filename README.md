# TWiCS---Client-Side

            Turn a tweet into pictures
MVP
  - Can enter a short phrase or sentence
  - Will get back an array of pictures that represent the phrase

USER STORIES
  - As a user I want to enter a short phrase
  - As a user I want to see that phrase translated into a set of images

BRONZE
  -Phrase is parsed so that only important words are sent to flickr api(such as no, the, is, etc.)
  -Can see a backlog of past question
  -Social share buttons
  -Phrase is replaced by twitter handle.
  -First tweet from the handle is returned.

USER STORIES
  -As a user, I only want to see the most important words translated to pictures(such as no, the , is ,etc.)
  -As a user, I want to see what other translations have happened on the site
  -As a user, I want to be able to share my translations on social channels
  -As a user, I want to enter a twitter handle instead of a phrase and have that translated.

SILVER
  -Use ruby Gems to perform basic Natural Language processing to identify nouns, verbs and phrases.
  -Only these will be passed to the api for translations

USER STORIES
  -As a user, I want the translation to be more accurate and recognize common phrases

GOLD
  -Turn the app into a game by pressing a set of pictures and having the user try to guess the original tweet.

USER STORIES
  -As a user, I want to try to guess the tweet that resulted in a series of pictures.
