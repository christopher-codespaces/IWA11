const items = ['biscuits', 'donuts', 'pancakes'];

let outstanding = {
  biscuits: 0,
  donuts: 0,
  pancakes: 0
};

let delivered = {
  biscuits: 0,
  donuts: 0,
  pancakes: 0
};

const orders = document.querySelectorAll('dl');

for (let i = 0; i < orders.length; i++) {
  const order = orders[i];
  const isDelivered = order.getAttribute('data-delivered') === 'true';

  items.forEach(item => {
    const count = parseInt(order.getAttribute(`data-${item}`));
    if (isDelivered) {
      delivered[item] += count;
    } else {
      outstanding[item] += count;
    }
  });
}

console.log('Outstanding:', outstanding);
console.log('Delivered:', delivered);

// This code is designed to process a list of orders for three different types of items: biscuits, donuts, and pancakes. To keep track of the orders, two objects are initialized at the beginning of the code: outstanding and delivered. These objects will store the number of each item that has been delivered and that is still outstanding. The keys in each object correspond to the item types and the values are initialized to zero.

// Next, the code selects all of the dl elements on the page using the querySelectorAll() method. It then loops through each order, extracts the relevant data for each item type using the getAttribute() method, and checks whether the item has been delivered by examining the value of the data-delivered attribute.

// Using the forEach() method, the code then iterates through each of the three item types, gets the count of that item in the order using getAttribute(), and increments the appropriate value in the delivered or outstanding object based on whether the item has been delivered.

// Finally, the values of the outstanding and delivered objects are logged to the console so that the user can see how many of each item type are still outstanding and how many have been delivered.