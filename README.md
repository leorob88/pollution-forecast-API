# pollution-forecast-API

Description:

I created this API as a JS advanced project. It is self explanatory in the page. You (a user) can search for the pollution rate value of any location around the world, mainly by 2 options:

- a name
- your current position

The value is based on details you can learn more about at this link: https://www.airnow.gov/aqi/aqi-basics/


How to use online:

First of all, in order to get a value your browser needs permission to get the current position of your device (for geolocation), so if you don't grant that permission the geolocation cannot work (and some functions based on your position, too). In that case, in order to work, you have to grant permission and reload the page.
Then, if you want to find the nearest detection station to your device, just use the Geolocation button; if you want to know about a specific location instead, just type the name of that location into the textbox and use one of the buttons above: Name or Keyword. The difference between these two are the first gets you the location the algorhythm considers the most appropriate, the second instead searches for a series of locations having a name similar enough to the name you typed (also, many cities have more than one detection station, so they can detect different values for different positions of the same city).


How to test offline:

After downloading the zip file, unzip it wherever you want and go to the .env.example file. Follow the instructions inside it, then open your console and go to the repository folder path. Use "npm install" command (requires Node installed) and then use "npm run dev" command to launch the API on your browser.
Except these additional requirements, it works just like it does online.
