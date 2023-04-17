//ROOt 1  Which is  Order 1

const root1={
    biscuits: document.querySelector('[data-biscuits="10" ]'),
    donuts: document.querySelector('[data-donuts="13" ]'),
    pancakes: document.querySelector('[data-pancakes="0"]'),
    status: document.querySelector('[data-delivered="false"]'),
}

   document.querySelector('dl[data-key="order1"] div.biscuits dd.count').innerHTML=root1.biscuits.dataset.biscuits
   document.querySelector('dl[data-key="order1"] div.donuts dd.count').innerHTML=root1.donuts.dataset.donuts 
   document.querySelector('dl[data-key="order1"] div.pancakes dd.count').innerHTML=root1.pancakes.dataset.pancakes
   document.querySelector('dl[data-key="order1"] div.status dd').innerHTML=root1.status.dataset.status==='false'? 'delivered': 'pending'

   

// ROOT 2 Which is order 2

   const root2={
    biscuits: document.querySelector('[data-biscuits="5" ]'),
    donuts: document.querySelector('[data-donuts="0" ]'),
    pancakes: document.querySelector('[data-pancakes="2"]'),
    status: document.querySelector('[data-delivered="false"]'),
}

   document.querySelector('dl[data-key="order2"] div.biscuits dd.count').innerHTML=root2.biscuits.dataset.biscuits
   document.querySelector('dl[data-key="order2"] div.donuts dd.count').innerHTML=root2.donuts.dataset.donuts 
   document.querySelector('dl[data-key="order2"] div.pancakes dd.count').innerHTML=root2.pancakes.dataset.pancakes
   document.querySelector('dl[data-key="order2"] div.status dd').innerHTML=root2.status.dataset.status==='false'? 'delivered': 'pending'

  //ROOT 3 Which is order 3
   const root3={
    biscuits: document.querySelector('[data-biscuits="12" ]'),
    donuts: document.querySelector('[data-donuts="11" ]'),
    pancakes: document.querySelector('[data-pancakes="15"]'),
    status: document.querySelector('[data-delivered="true"]'),
}

   document.querySelector('dl[data-key="order3"] div.biscuits dd.count').innerHTML=root3.biscuits.dataset.biscuits
   document.querySelector('dl[data-key="order3"] div.donuts dd.count').innerHTML=root3.donuts.dataset.donuts 
   document.querySelector('dl[data-key="order3"] div.pancakes dd.count').innerHTML=root3.pancakes.dataset.pancakes
   document.querySelector('dl[data-key="order3"] div.status dd').innerHTML=root3.status.dataset.status==='True'? 'pending': 'delivered'//tenary

   

// This code is designed to process a list of orders for three different types of items: biscuits, donuts, and pancakes. To keep track of the orders, two objects are initialized at the beginning of the code: outstanding and delivered. These objects will store the number of each item that has been delivered and that is still outstanding. The keys in each object correspond to the item types and the values are initialized to zero.

// Next, the code selects all of the dl elements on the page using the querySelectorAll() method. It then loops through each order, extracts the relevant data for each item type using the getAttribute() method, and checks whether the item has been delivered by examining the value of the data-delivered attribute.

// Using the forEach() method, the code then iterates through each of the three item types, gets the count of that item in the order using getAttribute(), and increments the appropriate value in the delivered or outstanding object based on whether the item has been delivered.

// Finally, the values of the outstanding and delivered objects are logged to the console so that the user can see how many of each item type are still outstanding and how many have been delivered.