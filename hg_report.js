"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Craig Adamson
   Date:   5/7/2026
   
   Filename: hg_report.js
	
*/

// Create the game report using variables from hg_product.js
var gameReport =
   "<h1>" + itemTitle + "</h1>" +
   "<h2>By: " + itemManufacturer + "</h2>" +
   "<img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' />" +
   "<table>" +
   "<tr><th>Product ID</th><td>" + itemID + "</td></tr>" +
   "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>" +
   "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>" +
   "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>" +
   "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>" +
   "<tr><th>Release</th><td>" + itemRelease + "</td></tr>" +
   "</table>" +
   itemSummary;

// Display the game report in the first article element
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// Calculate the number of ratings
var ratingsSum = 0;

// Count the number of ratings
var ratingsCount = ratings.length;

// Loop through ratings and add them together
for (var i = 0; i < ratings.length; i++) {
   ratingsSum += ratings[i];
}

// Calculate the average rating
var ratingsAvg = ratingsSum / ratingsCount;

// Create customer review report heading
var ratingReport =
   "<h1>Customer Reviews</h1>" +
   "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

// Display the first three customer reviews
for (var i = 0; i < 3; i++) {
   ratingReport +=
      "<div class='review'>" +
      "<h1>" + ratingTitles[i] + "</h1>" +
      "<table>" +
      "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>" +
      "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>" +
      "<tr><th>Rating</th><td>";

   // Add one star image for each rating point
   for (var j = 1; j <= ratings[i]; j++) {
      ratingReport += "<img src='hg_star.png' />";
   }

   ratingReport +=
      "</td></tr></table>" +
      ratingSummaries[i] +
      "</div>";
}

// Display the customer review report in the first aside element
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;