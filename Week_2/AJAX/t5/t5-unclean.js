
/*

  {
    location: {type: 'Point', coordinates: [25.018456, 60.228982]},
    _id: '6470d38ecb12107db6fe24c1',
    companyId: 68,
    name: 'Ravintola Ladonlukko',
    address: 'Latokartanonkaari 9 A',
    postalCode: '00790',
    city: 'Helsinki',
    phone:
      '+358 50 4653899 Ravintolan esimies +358 50 435 8072 Kokoustarjoilut /ravintola',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.903147, 60.221729]},
    _id: '6470d38ecb12107db6fe24c2',
    companyId: 1580536,
    name: 'Ravintola Stadin AO Ilkantie',
    address: 'Ilkantie 3',
    postalCode: '00400',
    city: 'Helsinki',
    phone: '+358 (0) 50 4710 211',
    company: 'Sodexo',
    __v: 0,
  },

];
*/


'use strict';

const restaurants = [];
let dailyMenu = [];

async function getRestaurants() {
    const baseURL = 'https://media2.edu.metropolia.fi/restaurant';
    const requestURL = '/api/v1/restaurants';

    try{
        const response = await fetch(baseURL + requestURL);

        if(!response.ok){
            const errorData = await response.json();
            console.log('Error: ', errorData.error);
            return;
        }

        const data = await response.json();
        //console.log(data);

        data.forEach(restaurant => {
            const {_id, companyId, name, address, postalCode, city, phone, location, type, coordinates, company} = restaurant;

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

           

        })
         console.log(restaurants);
         displayOnPage();

    } catch (error){
        console.log('Error while fetching data', error);
    }  
}


async function getDailyMenu(rID) {
    const baseURL = 'https://media2.edu.metropolia.fi/restaurant';
    const requestURL = `/api/v1/restaurants/daily/${rID}/en`;

    try{
        const response = await fetch(baseURL + requestURL);

        if(!response.ok){
            const errorData = await response.json();
            console.log('Error: ', errorData.error);
            return;
        }

        const data = await response.json();
        console.log(data);

        /*
        data.forEach(dailyMenu => {
            const {name, price, diets} = dailyMenu;

            dailyMenu.push({
                name: name,
                price: price,
                diets: diets,
            });
        })
        */
        return data;

    } catch (error){
        console.log('Error while fetching data', error);
    }  
}


getRestaurants();

function displayOnPage(){
const table = document.querySelector('table');
const dialog = document.querySelector('dialog');



restaurants.sort((a, b) => a.name.localeCompare(b.name));

// Event delegation setup for dialog
    dialog.addEventListener('click', async (event) => {
        const target = event.target;

        const highlightedRow = document.querySelector('.highlight');
        const rID = highlightedRow ? highlightedRow.dataset.id : null;
        const restaurant = restaurants.find(r => r._id === rID);

        if (!restaurant) return;

        if (target.id === 'clickRestaurantInfo') {
            restaurantInfo(dialog, restaurant);
        } 
        else if (target.id === 'clickMenuModal') {
            const menuData = await getDailyMenu(restaurant._id);
            restaurantDailyMenu(dialog, restaurant, menuData);
        } 
        else if (target.id === 'closeBtnWin') {
            document.querySelectorAll('tr').forEach(tr => tr.classList.remove('highlight'));
            dialog.close();
        }
    });



restaurants.forEach(r =>{
  const tr = document.createElement('tr');
  tr.dataset.id = r._id;
  const nameTD = document.createElement('td');
  const addressTD = document.createElement('td');

  nameTD.textContent = r.name;
  addressTD.textContent = r.address;

  tr.appendChild(nameTD);
  tr.appendChild(addressTD);
  table.append(tr);

  tr.addEventListener('click', () =>{
    document.querySelectorAll('tr').forEach((tr) => tr.classList.remove('highlight'));
    //console.log("Clicked", r);
    tr.classList.add('highlight');
    //BASE: Restaurant info
    restaurantInfo(dialog, r);
    dialog.showModal();



    


    /*
    //Button for restaurant info
    const restaurantInfoBtn = document.getElementById('clickRestaurantInfo');
    restaurantInfoBtn.addEventListener('click', () => {
        console.log("Changing to restaurantInfo");
        dialog = restaurantInfo(dialog, r);
    });

    //Button for dailyMenu
    const menuModalBtn = document.getElementById('clickMenuModal');
    menuModalBtn.addEventListener('click', async () => {
        console.log("Changing to dailyMenuModal");
        const menuData = await getDailyMenu(r._id);
        console.log("MENUDATA", menuData);
        dialog = restaurantDailyMenu(dialog, r, menuData);

    });
    


    const winCloseBtn = dialog.querySelector('#closeBtnWin');
    dialog.showModal();

    winCloseBtn.addEventListener('click', () => {
      //Turns of highlight and closes dialog
      document.querySelectorAll('tr').forEach((tr) => tr.classList.remove('highlight'));
      dialog.close();
      dailyMenu = []
    });
    */

  });
});
}


function restaurantInfo(dialog, r){
    const restaurantName = r.name;
    const restaurantAddress = r.address;
    const restaurantPostalCode = r.postalCode;
    const restaurantCity = r.city;
    const restaurantPhoneNumber = r.phone;
    const restaurantCompany = r.company;
    dialog.innerHTML = 
    `
    <button id="clickRestaurantInfo" >Info</button><button id="clickMenuModal" >Daily Menu</button>
    <h2>Restaurant Name: ${restaurantName}</h2>
    <p>Address: ${restaurantAddress}<p>
    <p>Postal code: ${restaurantPostalCode}<p>
    <p>City: ${restaurantCity}<p>
    <p>Phone number: ${restaurantPhoneNumber}<p>
    <p>Restaurant company: ${restaurantCompany}<p>
    <button id="closeBtnWin">Close windows</button>    
    `
}

function restaurantDailyMenu(dialog, r, menuData){
    let menuContent = '';
    if(!menuData || !menuData.courses){
        `
    <button id="clickRestaurantInfo" >Info</button><button id="clickMenuModal" >Daily Menu</button>
    <h2>No Daily Menu available for this restaurant today!</h2>
    <button id="closeBtnWin">Close windows</button>    
    `
    return;
    }

    menuContent = 
    `
    <h2>Daily Menu for ${r.name}</h2>
    <ul>
    `;

    const c = menuData.courses;

    c.forEach(item => {
        menuContent +=
        `
        <li>
        <p>Food name: ${item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Diets: ${item.diets}</p>
        <p></p>
        </li>
        `;
    });
    menuContent += `</ul>`;

    dialog.innerHTML = `
        <button id="clickRestaurantInfo">Info</button>
        <button id="clickMenuModal">Daily Menu</button>
        ${menuContent}
        <button id="closeBtnWin">Close windows</button>
    `;
    
}