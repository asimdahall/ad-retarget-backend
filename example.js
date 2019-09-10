var apriori = require("./dist/apriori");
var express = require("express");
const fi = require("frequent-itemset");
const d = require("./csvjson.json");
const fs = require("fs");
app = express();

app.use("/vendor", express.static(__dirname + "/bower_components/"));
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.post("/aprori", jsonParser, function(req, res) {
  let op = aprori(req.body);
  res.send(op);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen("7777", function() {
  console.log("listning on port 7777");
});

// console.log(fi(t, 0.01, true));
d.map(i => {
  fs.appendFile("data.csv", `,` + i.title, () => {});
});
// Execute Apriori with a minimum support of 40%.
// var apriori = new apriori.Apriori(0.4);

// // Returns itemsets 'as soon as possible' through events.
// apriori.on("data", function(itemset) {
//   // Do something with the frequent itemset.
//   var support = itemset.support;
//   var items = itemset.items;
//   console.log(
//     `Itemset { ${items.join(
//       ","
//     )} } is frequent and have a support of ${support}`
//   );
// });

// // Execute Apriori on a given set of transactions.
// apriori.exec(t).then(function(result) {
//   // Returns both the collection of frequent itemsets and execution time in millisecond.
//   var frequentItemsets = result.itemsets;
//   var executionTime = result.executionTime;
//   console.log(
//     `Finished executing Apriori. ${frequentItemsets.length} frequent itemsets were found in ${executionTime}ms.`
//   );
// });
