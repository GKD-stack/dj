// // Fetch the JSON data
// fetch('scams.json')
//   .then(response => response.json())
//   .then(data => {
//     // Select the element where you want to display the data
//     const displayDiv = document.getElementById('data-display');

//     // Create a list element
//     const list = document.createElement('ul');

//     // Loop through each item in the data and add it to the list
//     data.forEach(item => {
//       const listItem = document.createElement('li');
//       listItem.textContent = `scamName: ${item.scamName}, count: ${item.count}, description: ${item.description}`;
//       list.appendChild(listItem);
//     });

//     // Append the list to the display element
//     displayDiv.appendChild(list);
//   })
//   .catch(error => console.error('Error loading the data:', error));

  fetch('/assets/js/scams.json')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    // rest of your code
  })
  .catch(error => console.error('Error loading the data:', error));
