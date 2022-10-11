const orders = [];
let ordName;
let ordDate;
let ordDetail;
let ordType;

class NewOrder{
    //Create constructor with values for name, date, type, and details
    //Use this class to then store values into the array, that then can be output to HTML
    orderPlaced(event){
        //Prevents refresh of the page on click
        event.preventDefault();
    
        ordName = document.getElementById("orderName").value;
        ordDate = document.getElementById("orderDate").value;
        ordType = document.getElementById("orderTypes").value;
        ordDetail = document.getElementById("orderDetails").value;

        orders.push({
            ordName,ordDate,ordType,ordDetail
        });
       
        DisplayOrder.displayData();
    
    }
};

class DisplayOrder{
    //Class will use contents of X instance from newOrder to output it to the HTML. 
    //Class here will also be used to remove content from HTML
    displayData(){
        ordBox = document.getElementById("orders");

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
    dataSort(order){
        if(order == valA){
            countA++;
        }else if(order == valB){
            countB++
        }else if(order == valC){
            countC++;
        }else{
            countD++;
        }

        console.log(countA + " " + countB + " " + countC + " " + countD);
    }
};

//overall onClick function for debugging
function orderPlaced(event){
    //Prevents refresh of the page on click
    event.preventDefault();

    ordName = document.getElementById("orderName").value;
    ordDate = document.getElementById("orderDate").value;
    ordType = document.getElementById("orderTypes").value;
    ordDetail = document.getElementById("orderDetails").value;

    orders.push({
        ordName,ordDate,ordType,ordDetail
    });
    console.log(orders[0]);

}