# Gilded rose tech test
## Overview
This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

I opted to do the challenege in Java-Script and use the Jasmine testing framework. There was the option to use image testing but I chose to write my own tests to gain a better understanding of the code. 
The files are contained in the js-jasmine directory, the `original_code.js` & `gilded_rose.js` files are in the scr folder and the respective spec files in the spec folder. To run the tests you must do the following: 

- $`git clone https://github.com/kasey-purvor/gilded_rose_tech_test.git`
- $`cd gilded_rose_tech_test`
- $`cd js-jasmine`
- $`open SpecRunner.html` if on linux
- $`start SpecRunner.html` if on windows
- You should the the jasmine test page open on your browser. All 28 tests will be passing. Turn off the 'run tests in random order' option as it will sperate tests for original and updated code. 
![jasmine_test_results](https://user-images.githubusercontent.com/67878899/117170516-012e3c00-adc2-11eb-9f58-773c4b8d27a7.png)
- Compare the original and updated code to assess the quality of the changes, as well as the added `conjured item` handling functions

## My thoughts
Overall I was extremely pleased at the outcome of this challange. I was able to fully restructure the original code so that additional items could be added with ease in the future. I fully adhered to the specification and did not change the origin Shop or Item class constructors. 
Although the actual challenge was completed over a long period of time (as can be seen in the commits) you can observe that most of the work was carried out over 48 hours, and I left the refactoring some time before revisitng. Overall I spent about 56 hours on the challenge as I added readme files and the original code ect. . 

## Specification 
Here is the text of the kata:

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the `UpdateQuality` method and Items property static if you like, we’ll cover for you)."*
