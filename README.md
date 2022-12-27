# Steam-Inventory-Sell-Js
Selling script for steam inventory via browser


How to:
Log in to steam via browser
browse your inventory at https://steamcommunity.com/id/{yourusername}/inventory/
Inject the script in browser via console on developer tools (just paste it and press enter)
I used this to quick sell cards
Select one card and sell it (first time is needed to put the checkbox for steam contract agreement always on, too lazy to do that myself :P)
After that when you select any other card/item with a price and that can be sold, just run the js function steamSell() and it will place the market entry for you

Note:
money = money * 0.87; 

this lowers the price for the steam fee (15%) so the final price matches the price of market cap and people will be more likely to buy
You can increase/decrease it at your pleasure
