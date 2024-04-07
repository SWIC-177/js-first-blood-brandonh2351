function welcome(guestName) {
  return `Welcome, ${guestName}!`;
}

function handleGuest(personName, action) {
  return action(personName);
}

console.log(handleGuest(`Alice`, welcome));
