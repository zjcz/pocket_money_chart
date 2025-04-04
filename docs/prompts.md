Create a react web app to show a monthly calendar view to track my childs pocket money. Use the attached image as a reference, which shows the chart for February 2025. Each day contains the tasks my child needs to complete to obtain their pocket money for that day.

The calendar doesn't look quite right. Currently the days are listed vertically but should be horizontally. The days are listed vertically next to it, but again they should be laid out as defined in the #file:pocket money.jpg sample

Reduce the height of the cells containing the days of the week to match the #file:pocket money.jpg sample

> A manual fix was required here to fix the issue with the CSS. The `min-height: 100px` in `.calendar-cell` was forcing the height of the cells to be 100px. I added `min-height: 30px` in `.header-cell.reduced-height` to fix this issue.

Allow the date to be changed. Change the date "February 2025" to 2 dropdowns; one containing the months of the year and one containing the year (from 2025 to 2045). When the dropdowns are changed, change the calendar to reflect the month selected

The 1st of the month starts on the wrong day. For example, Jan 2025 started on a Wednesday, but 1st Jan 2025 is shown as Thursday on this calendar.

> At this point I realised the changelog.md file was not being updated as changes were being made.

Update #file:changelog.md with the recent changes

Currently the selected date when the page loads defaults to February 2025. Change this to default to the current date

Add a new settings button to the top right of the screen. Clicking this will show a popup dialog, allowing the user to edit the title (currently set to "Child's Pocket Money Tracker"), and set the tasks (currently set to "Behaviour", "Homework" and "Chores"). These settings should be stored in local storage so they can be persisted between browser sessions

Improve the styling of the popup dialog. Use the Bulma framework to style the dialog, and the new settings button

> I had to manuall add the Bulma CSS framework to the project using `npm install bulma`

In the settings dialog, add the Save and Cancel buttons to a button group to add a spacing between the two

Change the Settings button for a bulma button with just the text "Settings", remove the icon

Improve the styling of the page. Increase the sizeof the font for the title (Currently set to Child's Pocket Money Chart) to match the #file:pocket money.jpg sample image.

Left align the date selector dropdowns

The days of the week should be centered vertically in their header cells. Currently they are aligned to the bottom of the cell

When the page is printed, the settings button should be hidden and the date selector dropdowns should be replaced with their selected text

The arrow in the dropdowns is still visible when printing. Can this be hidden please

> Copilot still couldn't remove the arrows from the dropdowns. I manually added the following CSS to hide the arrow in the dropdowns when printing:

```css
.select:not(.is-multiple):not(.is-loading)::after {
  display: none !important;
}
```
Adjust the spacing of the elements so the page fills an A4 page when printed in landscape.  Currently the last row of the chart is printing on a second page.  Changes should only be applied when printing, the style is perfect when viewed on screen

When printing, there is a large amount of padding between the date selectors and the calendar grid.  Please reduce this
