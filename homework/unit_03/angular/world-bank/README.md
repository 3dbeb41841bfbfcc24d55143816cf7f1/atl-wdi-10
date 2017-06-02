# Homework : World Bank Loan Records

  In tonight's homework, you will be provided with a working JSON API that serves
  up World Bank Loan data (as JSON); your job is to build a single-page Angular
  front-end that makes use of the data. _You may not change the server code in any
  way: you are making Angular to suit._

## Setup

  Navigate to the directory for today, go into the `homework/world-bank`
  directory, and run `npm install` to download and install the app's
  dependencies.

  **Seed Some Data!** Before you launch the app, run the script found in
  `node scripts/add_example_data.js`; this file will load up your app with example
  data so that it can work correctly.

  Run your server with `npm start`.
  
## Specifications

  Your Angular page should display:

  1.  The number of records in the database.

  2.  A clickable list of each unique `region` name in the database.

      - When the `region` name is clicked, a list of all the records associated
      with that region should appear.

  4.  A search bar / filter box to narrow down the list of regions.

  5.  A working form to add a new record to the database.

      - When the data is
      submitted and processed, the page should immediately reflect the changes


  Some screenshots of a finished version of the app are shown below. As you can
  see, at the **very top of the page**, the number of records is displayed. In
  the **upper-right corner**, the page shows the names of all regions in the
  database (duplicates excluded). In the **upper-left corner** is a window
  which, once a region's name is clicked, shows all of the records for the
  selected region.

  ![main](http://i.imgur.com/u9Hf6KZ.png)

  In the **lower-right corner** of the page, there is a form for submitting a
  new record.

  ![newrecord](http://i.imgur.com/4wdv1yl.png)

  There is also a search bar / filter box on the upper-right to narrow down the
  list of regions; inputting data into the box changes the region list in real
  time.

  ![filter](http://i.imgur.com/jYs7yBS.png)

  Here's a close-up of the search/filter box

  ![filterclose](http://i.imgur.com/pYmkL3p.png)

  > If you're feeling confused about implementing the filter/search box,
  > here's a video you can watch: https://www.youtube.com/watch?v=YFsduR7mBfY
  >
  > (the final code is at around `3:32 - 3:40`; skip to that if you like)

## Back-End API

  Before moving ahead with the Angular app, it'd be a good idea to first take
  stock of the Node/Express app and how it works.

  Here are the routes provided.

  -   `GET /wbinfo/count`.

      Serves up the number of all records in the database.

  -   `GET /wbinfo/uniqueRegions`

      Serves up all unique `region` values in the database, as a list.

  -   `GET /wbinfo/byName/:name`

      Serves all records for the region specified by `:name`

  -   `POST /wbinfo`

      Creates a new record.

  Interact with these routes in your Angular code using the `$http` service.

  For reference, a `wbinfo` record has five attributes (all strings):

  -   `region`
  -   `projectabstract`
  -   `projectname`
  -   `year`
  -   `loanamnt`

### Reach Targets

  -   List the region names alphabetically in the region list
  -   Add `delete` functionality for records <sup>*</sup>
  -   Add `update` functionality for records <sup>*</sup>
  -   Clear form(s) after submission

> <sup>*</sup> Requires adding a server route

## Submitting Your Work

When you're ready, push the code to your fork on GitHub and add that specific homework link to schoology.  Your submission should include:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
