## [Unreleased]

### Changed

- Reduced padding between the date selectors and the calendar grid in `Calendar.css` for print-specific styles.
- Updated the `Calendar` component to dynamically set the document title to match the page title specified by the user in the settings.

### Added

- Created a `Calendar` component to display a monthly calendar view for tracking pocket money tasks.
- Added styles for the `Calendar` component in `Calendar.css`.
- Updated `index.html` title to "Child's Pocket Money Tracker".
- Rendered the `Calendar` component in `main.tsx`.
- Allow users to dynamically change the calendar's month and year using dropdowns.
- Created a settings button to allow users to edit the title and tasks.
- Added a popup dialog for settings with inputs for title and tasks.
- Persisted settings (title and tasks) in local storage.
- Styled the settings button and popup dialog for a user-friendly experience.
- Styled the settings button and popup dialog using the Bulma framework for a more polished and user-friendly appearance.
- Grouped the Save and Cancel buttons in the settings dialog using Bulma's `buttons` class for better spacing.
- Added black and white SVG images for each month (for coloring) to `seasonalImages.ts`.
- Updated `Calendar.tsx` to render the seasonal SVG to the right of the child's name/title in the header, before the settings button.
- Updated `Calendar.css` to style the SVG icon for proper alignment and print friendliness.

### Fixed

- Updated the `Calendar` component to align days horizontally and match the layout of the provided sample.
- Adjusted styles in `Calendar.css` to ensure proper grid alignment and spacing.
- Fixed the `Calendar` component to correctly calculate the first day of the month, ensuring accurate alignment of dates.
- Updated the `Calendar` component to default to the current date instead of February 2025.

### Changed

- Updated the settings button to use a Bulma button with the text "Settings" and removed the icon.

### Updated

- Increased the font size of the title in the calendar to match the sample image.

### Changes

- Aligned the date selector dropdowns to the left in the `Calendar` component.
- Added CSS for proper spacing and alignment of the dropdowns.
- Centered the days of the week vertically in their header cells in the calendar.
- Added print-specific styles to hide the settings button and replace dropdowns with selected text when printing.
- Updated print-specific styles to hide dropdown arrows when printing.
