# Travel_Budget_App

## Objective
This project is a Travel Budget Application designed to help users manage their travel expenses. It allows users to set a total budget, allocate funds to different categories (accommodation, food, transportation, activities, shopping, and other), and track expenses. The application also includes a dark mode toggle for improved user experience and a currency checker feature that fetches currency information based on user input. The application uses JavaScript for functionality, HTML for structure, and CSS for styling.

## Output
<iframe src="https://niat-web.github.io/Travel_Budget_App/" height="1000" width="300" title="Travel_Budget_App"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Setting a total travel budget.
- Allocating budget to different expense categories.
- Tracking expenses within each category.

## UI Enhancements
- Implement a visually appealing and user-friendly design.
- Ensure the application is responsive and works well on different screen sizes.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement dark mode toggle. | User can switch between light and dark themes. |
| Develop budget form. | User can input and submit their budget allocations. |
| Develop expense form. | User can input and submit expense details. |
| Create budget summary display. | Display a summary of the total budget and allocated amounts for each category. |
| Implement currency checker | Application allows to display currency information based on country name. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| Event Listeners | Used to handle form submissions, button clicks (dark mode, currency refresh), and page load events. |
| DOM Manipulation | Used to update the content of the page, such as displaying the budget summary, showing notifications, and toggling dark mode. |
| Functions | Used to encapsulate reusable logic, such as updating the budget summary and showing notifications. |
| Form Validation | Used to ensure that user input is valid before processing. |
| Fetch API | Used to retrieve currency data from external APIs. |
| Async/Await | Used to handle asynchronous operations for API calls. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| FreeTestAPI | `https://freetestapi.com/api/v1/currencies` | Retrieves currency data based on country name or returns all currency data. |
| AllOrigins (Proxy) | `https://api.allorigins.win/raw?url=[API_URL]` | Acts as a proxy to bypass CORS issues when the direct API call fails. |

## MISC Section:

### 1. Formulas/Calculations:
- **Budget Allocation:** The user inputs values for each budget category (accommodation, food, transportation, activities, shopping, other). These values are stored as JavaScript variables (`accommodationBudget`, `foodBudget`, `transportationBudget`, `activitiesBudget`, `shoppingBudget`, `otherBudget`). The application subtracts the amount spent within each category from the allocated budget for that category. For example, if the user spends $X on food, `foodBudget` is updated by subtracting X.
- **Remaining Budget:** The application uses subtraction to calculate the remaining budget for each category after expenses are recorded. For example, if the initial food budget is $200 and $50 has been spent, the remaining food budget is $200 - $50 = $150. This calculation is used to dynamically update the budget summary displayed to the user.

### 2. Array Data:
- No static array data is present in `script.js`. Currency data is fetched dynamically from an external API (`https://freetestapi.com/api/v1/currencies`) and stored in the `currencyData` variable. The data is in JSON format and contains information about different currencies, including their name, code, symbol, and exchange rate.