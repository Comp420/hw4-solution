/*
  TODO: Store a reference to ALL the keys of our drumkit
*/
var keys;

/*
  TODO: 
  1. Pressing a valid key will make a sound and put a glow around the 
  corresponding virtual key (don't worry if it stays there forever).
  2. Pressing a valid key rapidly and repeatedly should make rapid, 
  repeated sounds.
  3. Pressing a nonvalid key should not raise an error.
*/
function playSound(e) {
  /*YOUR CODE HERE*/
  console.log("Event object", e);
}

/* 
  The level at which an event is registered is important.
  Here, we want the pressing of a key to be registered on an application level
  i.e. the window will be 'listening' to this event.

  In other cases, we just want events to be registered at an element level.
  Keep this in mind when adding event listeners.
*/
window.addEventListener('keydown', playSound);

/*
  TODO: Finish the script so that the glow gets removed after you are 
  done pressing any valid key. 
  Everything else should work the same way as before.
*/