function toggle() {
  console.log("event");

  var closedIcon = document.getElementById("btn-closed");
  if (closedIcon) {
    closedIcon.classList.toggle("block");
    closedIcon.classList.toggle("hidden");
  }

  var openIcon = document.getElementById("btn-open");
  if (openIcon) {
    openIcon.classList.toggle("hidden");
    openIcon.classList.toggle("block");
  }

  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

function openBlog(blogId, blogTitle) {
  const urlTitle = blogTitle.toLowerCase().replace(/\s+/g, "-");
  const url = `/blogs/${urlTitle}-${blogId}`;
  history.pushState({ blogId }, null, url);
  window.location.href = url;
}
