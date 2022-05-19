"using strict;"

//window.alert("connected");
//we are going to build the code to build out a table in our DIV tag

var products = [
    {item: "Burger", price: 3.50},
    {item: "Fries", price: 1.25},
    {item: "Drink", price: 1.00},
    {item: "Milkshake", price: 2.00},
    {item: "Chicken Nuggets", price: 2.50}
];
console.log("length is " + products.length);
console.log("item is " + products[3].item)
console.log("price is " + products[3].price)
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);
console.log(products[4]);
     
//caption and first row
var tableHTML = "<table>" + 
                "<caption>MENU</caption>" +
                "<tr><th>Item</th><th>Price</th></tr>";
console.log(tableHTML);

for (var i = 0; i < products.length; i++ ){
    //add the rows for each products[i]
    tableHTML += "<tr><td>" + products[i].item +
                "</td><td>" + parseFloat(products[i].price).toFixed(2) +
                "</td></tr>";
}
//add rows for the products
//close the table with a </table> tag
tableHTML = tableHTML + "</table>";
console.log(tableHTML);

//display this table in the div
document.getElementById("menu").innerHTML = tableHTML;