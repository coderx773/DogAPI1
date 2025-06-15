const gallery = document.getElementById("gallery");
let lastImages = [];
const img = document.getElementById("dogImage");
const getBtn = document.getElementById("getBtn");
const clearBtn = document.getElementById("clearBtn");

getBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const data = await response.json();
    img.src = data.message;

    // Store image in history
    lastImages.unshift(data.message);
    if (lastImages.length > 5) lastImages.pop();

    // Update gallery
    gallery.innerHTML = "";
    lastImages.forEach((url) => {
      const thumb = document.createElement("img");
      thumb.src = url;
      gallery.appendChild(thumb);
    });
  } catch (error) {
    alert("Failed to fetch dog image.");
    console.error(error);
  }
});

clearBtn.addEventListener("click", () => {
  img.src = "";
  img.alt = "";
});