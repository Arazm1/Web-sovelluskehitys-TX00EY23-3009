'use strict';

const restaurants = [];

async function getRestaurants() {
  const baseURL = 'https://media2.edu.metropolia.fi/restaurant';
  const requestURL = '/api/v1/restaurants';
  try {
    const response = await fetch(baseURL + requestURL);

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Error: ', errorData.error);
      return;
    }

    const data = await response.json();

    data.forEach((restaurant) => {
      const {
        _id,
        companyId,
        name,
        address,
        postalCode,
        city,
        phone,
        type,
        coordinates,
        company,
      } = restaurant;

      restaurants.push({
        location: {type: type, coordinates: coordinates},
        _id: _id,
        companyId: companyId,
        name: name,
        address: address,
        postalCode: postalCode,
        city: city,
        phone: phone,
        company: company,
      });
    });
    console.log(restaurants);
    displayOnPage();
  } catch (error) {
    console.log('Error while fetching data', error);
  }
}

async function getDailyMenu(rID) {
  const baseURL = 'https://media2.edu.metropolia.fi/restaurant';
  const requestURL = `/api/v1/restaurants/daily/${rID}/en`;

  try {
    const response = await fetch(baseURL + requestURL);

    if (!response.ok) {
      const errorData = await response.json();
      console.log('Error: ', errorData.error);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error while fetching data', error);
  }
}

getRestaurants();

function displayOnPage() {
  const table = document.querySelector('table');
  const dialog = document.querySelector('dialog');

  //Sort the restaurant alphabetically
  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  dialog.addEventListener('click', async (event) => {
    const target = event.target;

    const highlightedRow = document.querySelector('.highlight');
    const rID = highlightedRow ? highlightedRow.dataset.id : null;
    const restaurant = restaurants.find((r) => r._id === rID);

    if (!restaurant) return;

    if (target.id === 'clickRestaurantInfo') {
      restaurantInfo(dialog, restaurant);
    } else if (target.id === 'clickMenuModal') {
      const menuData = await getDailyMenu(restaurant._id);
      restaurantDailyMenu(dialog, restaurant, menuData);
    } else if (target.id === 'closeBtnWin') {
      document
        .querySelectorAll('tr')
        .forEach((tr) => tr.classList.remove('highlight'));
      dialog.close();
    }
  });

  restaurants.forEach((r) => {
    const tr = document.createElement('tr');
    tr.dataset.id = r._id;
    const nameTD = document.createElement('td');
    const addressTD = document.createElement('td');

    nameTD.textContent = r.name;
    addressTD.textContent = r.address;

    tr.appendChild(nameTD);
    tr.appendChild(addressTD);
    table.append(tr);

    tr.addEventListener('click', () => {
      document
        .querySelectorAll('tr')
        .forEach((tr) => tr.classList.remove('highlight'));
      tr.classList.add('highlight');
      //BASE: Restaurant info
      restaurantInfo(dialog, r);
      dialog.showModal();
    });
  });
}

function restaurantInfo(dialog, r) {
  const restaurantName = r.name;
  const restaurantAddress = r.address;
  const restaurantPostalCode = r.postalCode;
  const restaurantCity = r.city;
  const restaurantPhoneNumber = r.phone;
  const restaurantCompany = r.company;
  dialog.innerHTML = `
    <button class="dialogButton" id="clickRestaurantInfo" >Info</button><button class="dialogButton" id="clickMenuModal" >Daily Menu</button>
    <h2>Restaurant Name: ${restaurantName}</h2>
    <p>Address: ${restaurantAddress}<p>
    <p>Postal code: ${restaurantPostalCode}<p>
    <p>City: ${restaurantCity}<p>
    <p>Phone number: ${restaurantPhoneNumber}<p>
    <p>Restaurant company: ${restaurantCompany}<p>
    <button class="dialogCloseButton" id="closeBtnWin">Close windows</button>    
    `;
}

function restaurantDailyMenu(dialog, r, menuData) {
  let menuContent = '';
  if (!menuData || !menuData.courses || menuData.courses.length == 0) {
    menuContent = 
    `
    <h2>No Daily Menu available for this restaurant today!</h2>  
    `;
  } else {
    menuContent = `
    <h2>Daily Menu for ${r.name}</h2>
    <ul>
    `;

  const c = menuData.courses;

  c.forEach((item) => {
    menuContent += `
        <li>
        <p>Food name: ${item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Diets: ${item.diets}</p>
        <p></p>
        </li>
        `;
  });
  menuContent += `</ul>`;

  }

  dialog.innerHTML = `
        <button class="dialogButton" id="clickRestaurantInfo">Info</button>
        <button class="dialogButton" id="clickMenuModal">Daily Menu</button>
        ${menuContent}
        <button class="dialogCloseButton" id="closeBtnWin">Close windows</button>
    `;
}
