var loader = document.getElementById("loader")

loader.innerHTML = "Detecting.."
setTimeout(() => {
  alert("Found video games on device..");
  setTimeout(() => {
    loader.innerHTML = "We have found Roblox, and Fortnite on your computer.."
    setTimeout(() => {
      alert("Deleting games..")
      setTimeout(() => {
        loader.innerHTML = "Deleting.."
        setTimeout(() => {
          alert("Deleted!");
          loader.innerHTML = "Deleted all detected games from your computer"
          displayNewTxt()
        }, 3000);
      }, 2000);
    }, 2000);
  }, 3000);
}, 2000);

// display new text
function displayNewTxt() {
  document.getElementById("weProtectedTxt").innerHTML = "We protected your computer *_*";
  document.getElementById("noGamesTxt").innerHTML = "Now no games can be runned or downloaded.";
}
