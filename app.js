const count = 10;
const apiKey = "2H4tmcDK0xhGaN4pQ9OU7Zievu8gpENFUM31F0w5Hz8";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

getPhotos();
