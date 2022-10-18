class NewOrder{
    //Create an overall orders array
    orders = {};


    //Use this class to then store values into the array, that then can be output to HTML
    orderPlaced(event){
        //Prevents refresh of the page on click
        event.preventDefault();
    
        let ordName = document.getElementById("orderName").value;
        let ordDate = document.getElementById("orderDate").value;
        let ordType = document.getElementById("orderTypes").value;
        let ordDetail = document.getElementById("orderDetails").value;

        //create an array item for each order, then send it to the overall array
        const order = [ordName, ordDate, ordType, ordDetail];
        orders.push(order);
       
        //update display
        DisplayOrder.displayData(orders);
        //sort data
        OrderData.dataSort(ordType);
    }

    //order removed function
    orderRemoved(event){
        //prevent refresh on click
        event.preventDefault;

        //remove last order
        orders.pop();

        //update display
        DisplayOrder.displayData(orders);
    }

};

class DisplayOrder{
    //Class will use contents of X instance from newOrder to output it to the HTML. 
    //Class here will also be used to remove content from HTML
    constructor(order){
        this.order = order;
    }

    //display the data based off of the orders array, which is updated each time a button is clicked
    displayData(order){
        ordBox = document.getElementById("orders");
        ordBox.innerHTML = order;
    }


};

class OrderData{
    //Keep track of what all has been ordered, create and output graph
    constructor(order){
        this.order = order;
    }
    countA = 0;
    countB = 0;
    countC = 0;
    countD = 0;

    //data sorting to prepare for the graph
    dataSort(orderType){
        this.order = orderType;

        if(orderType == "Volvo"){
            countA++;
        }else if(order == "Saab"){
            countB++
        }else if(order == "Opel"){
            countC++;
        }else{
            countD++;
        }

        console.log(countA + " " + countB + " " + countC + " " + countD);
    }
};

//instantiate the initial class
const OrderSystem = new NewOrder;

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