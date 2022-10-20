//Create an overall orders array
const orders = [];

class OrderHandling{
    //Use this class to then store values into the array, that then can be output to HTML
    
    //order placed function
    orderPlaced(event){
        //Prevents refresh of the page on click
        event.preventDefault();
    
        //grab values of the form
        let ordName = "</br>" + document.getElementById("orderName").value;
        let ordDate = " " + document.getElementById("orderDate").value;
        let ordType = " " + document.getElementById("orderTypes").value;
        let ordDetail = " " + document.getElementById("orderDetails").value;

        //make sure they filled it out before executing code
        if(ordName == "" || ordDate == " " || ordDetail == " "){
            alert("Please fill out all fields.");
        }else{
        //show current orders
        document.getElementById("output").style.display = "block";

        //create an array item for each order, then send it to the overall array
        orders.push([ordName, ordDate, ordType, ordDetail]);
       
        
        //new instance of Display Order
        const ordersDisplay = new DisplayOrder;    
        //update display
        ordersDisplay.displayData();

        
        //sort data
        sortData.dataSort(ordType);
        }

    }

    //order removed function
    orderRemoved(event){
        //prevent refresh on click
        event.preventDefault;

        //remove last order
        orders.pop();

        //new instance of Display Order
        const ordersDisplay = new DisplayOrder;  
        //update display
        ordersDisplay.displayData();

        //hide the current orders if there are no more orders in the list
        if(orders.length == 0){
            document.getElementById("output").style.display = "none";
        }else{
            document.getElementById("output").style.display = "block";
        }
    }

};

class DisplayOrder{
    //Class will be used to display/remove content of the HTML.
    //Class here will also be used to remove content from HTML via the update

    //display the data based off of the orders array, which is updated each time a button is clicked
    displayData(){
        let ordBox = document.getElementById("orders");
        ordBox.innerHTML = orders;
    }

};

class OrderData{
    //Keep track of what all has been ordered, create and output graph
    constructor(){
        this.countA = 0;
        this.countB = 0;
        this.countC = 0;
        this.countD = 0;
        this.total = 0;
    }

    //data sorting to prepare for the graph
    dataSort(orderType){

        if(orderType == " volvo"){
            this.countA++;
        }else if(orderType == " saab"){
            this.countB++
        }else if(orderType == " opel"){
            this.countC++;
        }else if(orderType == " audi"){
            this.countD++;
        }

        //console.log(this.countA + " " + this.countB + " " + this.countC + " " + this.countD);
        this.graphData(this.countA, this.countB, this.countC, this.countD);
        
    }

    graphData(countOne, countTwo, countThree, countFour){
        //Display current results element
        document.getElementById("resultsGraph").style.display = "block";

        //update the total
        this.total = this.countA + this.countB + this.countC + this.countD;

        //update the count of each counter
        document.getElementById("countOne").innerHTML = countOne;
        document.getElementById("countTwo").innerHTML = countTwo;
        document.getElementById("countThree").innerHTML = countThree;
        document.getElementById("countFour").innerHTML = countFour;

        //retrieve the "bar" of each part
        let displayOne = document.getElementById("optionOne");
        let displayTwo = document.getElementById("optionTwo");
        let displayThree = document.getElementById("optionThree");
        let displayFour = document.getElementById("optionFour");

        //use the total and counts of each to set the width of a "graph" with the average
        let lengthOne = Math.floor((countOne/this.total) * 100);
        let lengthTwo = Math.floor((countTwo/this.total) * 100);
        let lengthThree = Math.floor((countThree/this.total) * 100);
        let lengthFour = Math.floor((countFour/this.total) * 100);

        //set the width to whatever the length is
        displayOne.style.width = String(lengthOne)+"%";
        displayTwo.style.width = String(lengthTwo)+"%";
        displayThree.style.width = String(lengthThree)+"%";
        displayFour.style.width = String(lengthFour)+"%";

        //console.log(lengthOne, lengthTwo, lengthThree, lengthFour);
    }
};

//instantiate the new order class and the data sorting class
const OrderSystem = new OrderHandling;
const sortData = new OrderData;

//grab button IDs to begin executing the code
let btnSubmit = document.getElementById("turnIn");
let btnRemove = document.getElementById("removeOrder");

btnSubmit.addEventListener("click", OrderSystem.orderPlaced);
btnRemove.addEventListener("click", OrderSystem.orderRemoved);

//overall onClick function for debugging
// const orders = [];
// ordID = 0;
// function orderPlaced(event){
//     //Prevents refresh of the page on click
//     event.preventDefault();

//     ordName = document.getElementById("orderName").value;
//     ordDate = document.getElementById("orderDate").value;
//     ordType = document.getElementById("orderTypes").value;
//     ordDetail = document.getElementById("orderDetails").value;
//     ordID = ordID + 1;

//     order = [ordID, ordName, ordDate, ordType, ordDetail, "</br>"];
//     orders.push(order);
//     console.log(orders);

//     ordBox = document.getElementById("orders");
//         ordBox.innerHTML = orders + "</br>";

// }

// function removeOrder(event){
//     event.preventDefault()

    
// }