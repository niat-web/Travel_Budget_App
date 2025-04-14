// script.js
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 darkModeToggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  const icon = darkModeToggle.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
 });
 

 // Budget Form
 const budgetForm = document.getElementById('budgetForm');
 const totalBudgetInput = document.getElementById('totalBudget');
 const accommodationBudgetInput = document.getElementById('accommodationBudget');
 const foodBudgetInput = document.getElementById('foodBudget');
 const transportationBudgetInput = document.getElementById('transportationBudget');
 const activitiesBudgetInput = document.getElementById('activitiesBudget');
 const shoppingBudgetInput = document.getElementById('shoppingBudget');
 const otherBudgetInput = document.getElementById('otherBudget');
 const budgetNotification = document.getElementById('budgetNotification');
 

 let totalBudget = 0;
 let accommodationBudget = 0;
 let foodBudget = 0;
 let transportationBudget = 0;
 let activitiesBudget = 0;
 let shoppingBudget = 0;
 let otherBudget = 0;
 

 budgetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (budgetForm.checkValidity()) {
  totalBudget = parseFloat(totalBudgetInput.value);
  accommodationBudget = parseFloat(accommodationBudgetInput.value);
  foodBudget = parseFloat(foodBudgetInput.value);
  transportationBudget = parseFloat(transportationBudgetInput.value);
  activitiesBudget = parseFloat(activitiesBudgetInput.value);
  shoppingBudget = parseFloat(shoppingBudgetInput.value);
  otherBudget = parseFloat(otherBudgetInput.value);
 

  updateBudgetSummary();
  showNotification('Budget set successfully!', 'success');
 

  // Clear input fields
  totalBudgetInput.value = '';
  accommodationBudgetInput.value = '';
  foodBudgetInput.value = '';
  transportationBudgetInput.value = '';
  activitiesBudgetInput.value = '';
  shoppingBudgetInput.value = '';
  otherBudgetInput.value = '';
 

  budgetForm.classList.remove('was-validated');
  } else {
  budgetForm.classList.add('was-validated');
  }
 });
 

 // Expense Form
 const expenseForm = document.getElementById('expenseForm');
 const expenseCategoryInput = document.getElementById('expenseCategory');
 const expenseAmountInput = document.getElementById('expenseAmount');
 const expenseDateInput = document.getElementById('expenseDate');
 

 expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (expenseForm.checkValidity()) {
  const category = expenseCategoryInput.value;
  const amount = parseFloat(expenseAmountInput.value);
 

  switch (category) {
  case 'accommodation':
  accommodationBudget -= amount;
  break;
  case 'food':
  foodBudget -= amount;
  break;
  case 'transportation':
  transportationBudget -= amount;
  break;
  case 'activities':
  activitiesBudget -= amount;
  break;
  case 'shopping':
  shoppingBudget -= amount;
  break;
  case 'other':
  otherBudget -= amount;
  break;
  }
 

  updateBudgetSummary();
  showNotification('Expense added successfully!', 'success');
 

  expenseCategoryInput.value = '';
  expenseAmountInput.value = '';
  expenseDateInput.value = '';
 

  expenseForm.classList.remove('was-validated');
  } else {
  expenseForm.classList.add('was-validated');
  }
 });
 

 // Budget Summary
 const budgetSummaryContent = document.getElementById('budgetSummaryContent');
 

 function updateBudgetSummary() {
  let summaryHTML = `
  <p><strong>Total Budget:</strong> $${totalBudget.toFixed(2)}</p>
  <p><strong>Accommodation:</strong> $${accommodationBudget.toFixed(2)} ${accommodationBudget < 0 ? '<span class="text-danger">(Overspent)</span>' : ''}</p>
  <p><strong>Food:</strong> $${foodBudget.toFixed(2)} ${foodBudget < 0 ? '<span class="text-danger">(Overspent)</span>' : ''}</p>
  <p><strong>Transportation:</strong> $${transportationBudget.toFixed(2)} ${transportationBudget < 0 ? '<span class="text-danger">(Overspent)</span>' : ''}</p>
  <p><strong>Activities:</strong> $${activitiesBudget.toFixed(2)} ${activitiesBudget < 0 ? '<span class="text-danger">(Overspent)</span>' : ''}</p>
  <p><strong>Shopping:</strong> $${shoppingBudget.toFixed(2)} ${shoppingBudget < 0 ? '<span class="text-danger">(Overspent)</span>' : ''}</p>
  <p><strong>Other:</strong> $${otherBudget.toFixed(2)} ${otherBudget < 0 ? '<span class="text-danger">(Overspent)</span>' : ''}</p>
  `;
  budgetSummaryContent.innerHTML = summaryHTML;
 }
 

 // Form Validation
 (function() {
  'use strict';
  window.addEventListener('load', function() {
  const forms = document.getElementsByClassName('needs-validation');
  const validation = Array.prototype.filter.call(forms, function(form) {
  form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
  event.preventDefault();
  event.stopPropagation();
  }
  form.classList.add('was-validated');
  }, false);
  });
  }, false);
 })();
 

 // Notification
 function showNotification(message, type = 'info') {
  const notificationContainer = document.querySelector('.notification-container');
  const notification = document.createElement('div');
  notification.classList.add('notification', `notification-${type}`);
  notification.textContent = message;
  notificationContainer.appendChild(notification);
 

  setTimeout(() => {
  notification.remove();
  }, 3000);
 }
 

 //Currency Check
 const currencyForm = document.getElementById('currencyForm');
 const countryNameInput = document.getElementById('countryName');
 const currencyInfoDiv = document.getElementById('currencyInfo');
 const refreshButton = document.getElementById('refreshButton');
 

 let currencyData = [];
 

 async function fetchCurrencyData(query) {
  const apiUrl = `https://freetestapi.com/api/v1/currencies?search=${query}`;
  let data = null;
 

  try {
  const response = await fetch(apiUrl);
  if (response.ok) {
  data = await response.json();
  } else {
  console.warn("Direct API call failed, attempting proxy.");
  const proxyUrl = `https://api.allorigins.win/raw?url=${apiUrl}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  data = JSON.parse(proxyResponse.responseText);
  } else {
  console.error("Proxy API call failed.");
  showNotification('Failed to fetch currency data.', 'error');
  return null;
  }
  }
  } catch (error) {
  console.error("An error occurred during the API call:", error);
  showNotification('An error occurred while fetching currency data.', 'error');
  return null;
  }
 

  return data;
 }
 

 //Function to display currency data in UI
 function displayCurrencyInfo(data) {
  if (data && data.length > 0) {
  const currency = data[0]; // Assuming the first result is the most relevant
  currencyInfoDiv.innerHTML = `
  <p><strong>Name:</strong> ${currency.name}</p>
  <p><strong>Code:</strong> ${currency.code}</p>
  <p><strong>Symbol:</strong> ${currency.symbol}</p>
  <p><strong>Exchange Rate:</strong> ${currency.exchange_rate}</p>
  `;
  } else {
  currencyInfoDiv.innerHTML = '<p>No currency information found for this country.</p>';
  }
 }
 

 currencyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (currencyForm.checkValidity()) {
  const countryName = countryNameInput.value;
  const data = await fetchCurrencyData(countryName);
  displayCurrencyInfo(data);
  countryNameInput.value = '';
  currencyForm.classList.remove('was-validated');
  } else {
  currencyForm.classList.add('was-validated');
  }
 });
 

 refreshButton.addEventListener('click', async () => {
  const allCurrenciesUrl = "https://freetestapi.com/api/v1/currencies";
  let data = null;
 
  try {
  const response = await fetch(allCurrenciesUrl);
  if (response.ok) {
  data = await response.json();
  } else {
  console.warn("Direct API call failed, attempting proxy.");
  const proxyUrl = `https://api.allorigins.win/raw?url=${allCurrenciesUrl}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  data = JSON.parse(proxyResponse.responseText);
  } else {
  console.error("Proxy API call failed.");
  showNotification('Failed to fetch currency data.', 'error');
  return null;
  }
  }
  } catch (error) {
  console.error("An error occurred during the API call:", error);
  showNotification('An error occurred while fetching currency data.', 'error');
  return null;
  }
  
  if (data && data.length > 0) {
  const shuffledData = data.sort(() => Math.random() - 0.5);
  currencyData = shuffledData;
  displayCurrencyInfo(currencyData[0]); // Display data for the first currency after shuffling
  } else {
  showNotification('Failed to fetch and shuffle currency data.', 'error');
  }
 });