//https://dummyjson.com/ //this is dummy fetch api web link

async function run() {
  let x = fetch(
    "https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font",
  )
    .then((response) => response.blob()) // Convert response to blob
    .then((blob) => {
      console.log("Fetched image blob:", blob);
    });
  return x;
}

async function run(params) {
  try {
    const response = await fetch(
      "https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const blob = await response.blob(); //response.bolb() <= it converts bin fetch data into url form
    const imgURL = URL.createObjectURL(blob); // this makes temporary url of fetched data
    document.getElementById("myImg").src = imgURL; //this puts the url of fetched data into img tag
  } catch (error) {
    console.error(error);
  }
}

async function fetchImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(run());
    }, 3000);
  });
}
fetchImage(); //it will wait for 3500ms and then call run() to fetch the image and display it in the img element with id "myImg".

async function nam() {
  let i = fetch(
    "https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontSize=16",
  );
  let data = await i.json;
}
nam();

async function rr() {
  try {
    const response = await fetch(
      "https://dummyjson.com/icon/abc123/150?type=png",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const blob = await response.blob(); // response.bolb() <= it converts bin fetch data into url form
    const imgURL = URL.createObjectURL(blob); //this makes temporary url of fetched data
    document.getElementById("img").src = imgURL; //puts url into img tag
  } catch (error) {
    console.error(error);
  }
}

async function h() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rr());
    }, 3000); // waits for 3sec to run rr()
  });
}
h();

async function r() {
  try {
    const response = await fetch("https://dummyjson.com/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const data = await response.json();
    console.log("Fetched data:", data.todos[0].todo); //this will print the first todo item from the fetched data
  } catch (error) {
    console.error(error);
  }
}

async function e() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(r());
    }, 3000); // waits for 3sec to run rr()
  });
}
e();
