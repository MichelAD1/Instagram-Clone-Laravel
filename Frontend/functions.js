const openDeleteButtons = document.querySelectorAll("[data-delete-target]");
const closeDeleteButtons = document.querySelectorAll("[data-close-button]");
const openStory = document.querySelectorAll("[data-story-target]");
const closeStory = document.querySelectorAll("[data-close-story-button]");
const openComment = document.querySelectorAll("[data-comment-target]");
const closeComment = document.querySelectorAll("[data-close-comment-button]");
const deleteDeleteButtons = document.querySelectorAll("[data-delete-button]");
const overlay = document.getElementById("overlay");

openDeleteButtons.forEach((image) => {
  image.addEventListener("click", () => {
    const delete_option = document.querySelector(image.dataset.deleteTarget);
    displayOption(delete_option);
  });
});
closeDeleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const delete_option = button.closest(".delete-popup");
    closeOption(delete_option);
  });
});
openComment.forEach((image) => {
  image.addEventListener("click", () => {
    const comment = document.querySelector(image.dataset.commentTarget);
    displayComment(comment);
  });
});
closeComment.forEach((button) => {
  button.addEventListener("click", () => {
    const comment = button.closest(".comment-popup");
    closeComments(comment);
  });
});

openStory.forEach((image) => {
  image.addEventListener("click", () => {
    const story = document.querySelector(image.dataset.storyTarget);
    displayStatus(story);
  });
});
closeStory.forEach((button) => {
  button.addEventListener("click", () => {
    const story = button.closest(".story-popup");
    closeStatus(story);
  });
});
let displayOption = (delete_option) => {
  delete_option.classList.add("active");
  overlay.classList.add("active");
  let nav = document.getElementById("nav");
  nav.classList.add("active");
};
let displayStatus = (story) => {
  story.classList.add("active");
  overlay.classList.add("active");
  let nav = document.getElementById("nav");
  nav.classList.add("active");
};
let displayComment = (comment) => {
  comment.classList.add("active");
  overlay.classList.add("active");
  let nav = document.getElementById("nav");
  nav.classList.add("active");
};
let closeOption = (delete_option) => {
  delete_option.classList.remove("active");
  overlay.classList.remove("active");
  let nav = document.getElementById("nav");
  nav.classList.remove("active");
};
let closeStatus = (story) => {
  story.classList.remove("active");
  overlay.classList.remove("active");
  let nav = document.getElementById("nav");
  nav.classList.remove("active");
};
let closeComments = (comment) => {
  comment.classList.remove("active");
  overlay.classList.remove("active");
  let nav = document.getElementById("nav");
  nav.classList.remove("active");
};
let splashScreen = () => {
  setTimeout(() => {
    window.location.href = "../Frontend/signin.html";
  }, 2300);
};

let goToEdit = () => {
  window.location.href = "../Frontend/editprofile.html";
};
let displayMessages = () => {
  let user = document.querySelector(".sentto-inbox");
  user.style.display = "flex";
  let inbox = document.querySelector(".inbox-display");
  inbox.style.display = "flex";
};
let displaySend = () => {
  let send = document.querySelector(".send-message-btn");
  send.style.display = "flex";
};
let likePost = () => {
  let like = document.getElementById("like_icon").src;
  let name = like.split("/").pop();
  like = document.getElementById("like_icon");
  if (name === "like.png") {
    like.src = "logos/likefill.png";
  }
  if (name === "likefill.png") {
    like.src = "logos/like.png";
  }
};
let changeTheme = () => {
  let theme = document.getElementById("theme_icon");
  let dark = localStorage.getItem("Dark");
  let logo = document.getElementById("logo_icon").src;
  let name = logo.split("/").pop();
  logo = document.getElementById("logo_icon");
  if (name === "logo.png") {
    logo.src = "logos/logowhite.png";
    logo.style.width = "90px";
    logo.style.height = "25px";
    logo.style.marginLeft = "4px";
    logo.style.marginTop = "10px";
  }
  if (name === "logowhite.png") {
    logo.src = "logos/logo.png";
    logo.style.width = "10%";
    logo.style.height = "100%";
    logo.style.marginLeft = "0px";
    logo.style.marginTop = "5px";
  }
  if (dark === "on") {
    theme.src = "logos/moon.png";
    localStorage.setItem("Dark", "off");
  } else if (dark === "off") {
    localStorage.setItem("Dark", "on");
    theme.src = "logos/sun.png";
  }

  document.body.classList.toggle("dark-theme");
};
let changeThemePage = () => {
  let theme = document.getElementById("theme_icon");
  let dark = localStorage.getItem("Dark");
  let logo = document.getElementById("logo_icon").src;
  let name = logo.split("/").pop();
  logo = document.getElementById("logo_icon");
  if (name === "logo.png") {
    logo.src = "logos/logowhite.png";
    logo.style.width = "90px";
    logo.style.height = "25px";
    logo.style.marginLeft = "4px";
    logo.style.marginTop = "10px";
  }
  if (name === "logowhite.png") {
    logo.src = "logos/logo.png";
    logo.style.width = "10%";
    logo.style.height = "100%";
    logo.style.marginLeft = "0px";
    logo.style.marginTop = "5px";
  }
  if (dark === "on") {
    theme.src = "logos/sun.png";
  } else if (dark === "off") {
    theme.src = "logos/moon.png";
  }
  document.body.classList.toggle("dark-theme");
};

let goToAccount = () => {
  window.location.href = "../Frontend/account.html";
};
let goToAdd = () => {
  window.location.href = "../Frontend/addPostStory.html";
};
let loadHome = () => {
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let home_icon = document.getElementById("home_icon");
  home_icon.src = "logos/homefill.png";
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Instagram";
};
let loadAccount = () => {
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let acc_icon = document.getElementById("acc_icon");
  acc_icon.src = "logos/accountfill.png";
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "My Account";
};
let loadMessenger = () => {
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let mes_icon = document.getElementById("messenger_icon");
  mes_icon.src = "logos/messengerfill.png";
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Chat - Inbox";
};
let loadExplore = () => {
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let explore_icon = document.getElementById("explore_icon");
  explore_icon.src = "logos/explorefill.png";
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Instagram";
};
let loadAdd = () => {
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let add_icon = document.getElementById("add_icon");
  add_icon.src = "logos/addfill.png";
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Create Post/Story";
};

let search = () => {
  let search = document.getElementById("search_icon").src;
  let name = search.split("/").pop();
  search = document.getElementById("search_icon");
  if (name === "search.png") {
    search.src = "logos/searchfill.png";
    search = document.getElementById("search");
    search.style.display = "block";
    let searchh = document.querySelector(".search");
    searchh.style.display = "block";
  } else {
    search.src = "logos/search.png";
    search = document.getElementById("search");
    search.style.display = "none";
    let searchh = document.querySelector(".search");
    searchh.style.display = "none";
  }
};

let signUp = () => {
  let username = document.getElementById("username_form").value;
  let fullname = document.getElementById("fullname_form").value;
  let bio = document.getElementById("bio_form").value;
  let password = document.getElementById("password_form").value;
  let profile_picture;
  if (username === "" || fullname === "" || bio === "" || password === "") {
    let msg = document.querySelector(".empty-fields");
    msg.style.display = "block";
  } else {
    if (document.getElementById("profile_form").files[0]) {
      profile_picture = document.getElementById("profile_form").files[0].name;
    } else {
      profile_picture = "noprofile.jpg";
    }
    let args = new FormData();
    args.append("username", username.toLowerCase());
    args.append("full_name", fullname);
    args.append("password", password);
    args.append("bio", bio);
    args.append("profile_picture", profile_picture);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v0.1/users/signup",
      data: args,
    })
      .then((res) => {
        let resp = res["data"];
        localStorage.setItem("Token", resp["authorisation"]);
        window.location.href = "../Frontend/home.html";
      })
      .catch((err) => console.error(err.response.data));
  }
};
