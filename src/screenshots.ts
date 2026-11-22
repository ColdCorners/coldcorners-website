export const screenshots = [
  {
    id: 'display-map',
    label: 'Display map',
    hint: 'Choose corners by display',
    description: 'In "Allow selected corners" mode, only checked Hot Corners can trigger their assigned actions. Here, the top left Hot Corner is active on the MacBook Pro and all Hot Corners are blocked on the Studio Display.',
    alt: 'The display map shows the top left corner checked on the MacBook Pro and no corners checked on the Studio Display.',
  },
  {
    id: 'block-timer',
    label: 'Block timer',
    hint: 'Pause all corners for a while',
    description: 'Block all Hot Corners for 5, 15, or 30 minutes, or for 1 or 2 hours. Your usual settings return when the timer ends. Choose "Use Saved Settings" to bring them back sooner.',
    alt: 'The ColdCorners menu bar menu shows the block end time and a checkmark next to 15 Minutes.',
  },
  {
    id: 'saved-setups',
    label: 'Saved setups',
    hint: 'Switch between laptop and desk',
    description: 'Unplug your monitor to use the corners you chose for your laptop. Reconnect it and ColdCorners restores the blocking mode and corners you saved for your desk.',
    alt: 'With the external display disconnected, the MacBook Pro map shows the top right and bottom right corners checked in Block selected corners mode.',
  },
  {
    id: 'keyboard-shortcut',
    label: 'Keyboard shortcut',
    hint: 'Toggle locking from any app',
    description: 'Record a shortcut in Settings. Press it from any app to turn corner locking on or off while ColdCorners is running.',
    alt: 'ColdCorners Settings shows Control-Option-Shift-K recorded under Keyboard Shortcut, with a Clear button beside it.',
  },
];
