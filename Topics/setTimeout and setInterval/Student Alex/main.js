function showName(name) {
  name = "Alex";
  return(`Hello, student ${name}!`);
}

const studentGreeting = setInterval(showName, 3000);
clearInterval(studentGreeting);
