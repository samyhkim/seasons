Detect what season the user is currently experiencing and display results accordingly.

Challenges:

1. Need to get the user's physical location.
   - Geolocation API
     - getCurrentLocation()
2. Need to determine the current month.
   - Built-in Date() object:
     - 0-indexed months
       - Northern Hemisphere:
         - Summer Months: 3-8
         - Winter Months: 0-2, 9-11
       - Southern Hemisphere:
         - Summer Months: 0-2, 9-11
         - Summer Months: 3-8
3. Need to change text and styling based on location & month.
