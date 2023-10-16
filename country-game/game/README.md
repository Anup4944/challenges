In the game, the player needs to match a country to its capital by clicking on appropriate buttons.

1. Your component should recieve a data property in the following format ( {{ Australia: "Canberra"}})

<CountryCapitalGame data={{ Australia: "Canberra"}} />

2. A button should be displayed for each country and each capital. Ex : Australia, Paris, Canberra, France

3. The buttons hsould be displayed in random order.

4. Clicking a button should set its bg to blue (4009Bff)
5. Clicking another button should:
   remove both buttons if a correct country and capital pair has been selected;
   set bg color of both buttons to red if a wrong pair has been slected
