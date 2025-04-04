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

### Fixed

- Updated the `Calendar` component to align days horizontally and match the layout of the provided sample.
- Adjusted styles in `Calendar.css` to ensure proper grid alignment and spacing.
- Fixed the `Calendar` component to correctly calculate the first day of the month, ensuring accurate alignment of dates.
- Updated the `Calendar` component to default to the current date instead of February 2025.

### Changed

- Updated the settings button to use a Bulma button with the text "Settings" and removed the icon.
