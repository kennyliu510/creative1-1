var recipes = [
	"Orange Chicken",
	"Thain Chicken Breasts",
	"Orange Beef",
	"Orange Cream Fruit Salad",
	"Chocolate Chip Orange Zucchini Bread",
	"Spicy Shrimp In Coconut Milk",
	"Pad Thai With Chicken and Shrimp",
	"Amanda's Thai Peanut",
	"Thai Beef Pitas",
	"Raw Pad Thai",
	"Artichoke Red Clam Sauce",
	"Lemon Pepper Salmon",
	"Salmon with Fruit Salsa, Roasted Asparagus, and Brown Rice",
	"Berry Chicken Salad",
	"Chicken Athena",
	"Chicken Gyro"
];

function getRecipes(prefix){

	console.log("key press");
	console.log(prefix);

	var recipesList = document.getElementById('search-result');	
	
	var inner = "<ul>";

	for(recipe in recipes){
		if(recipes[recipe].startsWith(prefix)){
			inner+= "<a class='' href='orange-chicken.html'><li>"+recipes[recipe]+"</li></a>";
		}
	}

	inner+="</ul>";
	recipesList.innerHTML = inner;	
}