$(document).ready(function() {
  // $(function() {
  let $articleFrame = $("#read_article");
  let $password = $("#password");
  let $username = $("#username");
  let $email = $("#email");
  let $posts = $("#content-main-post");
  let $title = $("#post-form #article-title");
  let $content = $("#post-form #bodys");
  let $articleImage = $("#post-form #imageUrl");
  let $readMore = $(".read");
  // var postTemplate = $("#post-template").html();

  function aPost(post, i) {
    $posts.append(`
      <!-- card -->
          <section class="row card mb-3" style="max-width: 540px;" data-id="${i}">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="${post.imageUrl}"
                  class="card-img"
                  alt="monalisa"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <i class="far fa-user">${post.author} </i>
                  &nbsp;
                  <i class="far fa-calendar-alt">sept 18th, 2019</i>
                  <p class="card-text">${post.content}</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                  <button type="button" class="btn btn-primary" data-id="${i}>Read more...</button>
                </div>
              </div>
            </div>
          </section>
          <!--// card -->



      `);
  }
  function article(article, i) {
    $articleFrame.append(`
      <div class="card-header bg-transparent border-success">
              <img src="${article.imageUrl}" class="img-fluid" alt="Responsive image">
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">${article.title}</h5>
              <i class="far fa-user">${article.author} </i>
              &nbsp;
              <i class="far fa-calendar-alt">${article.date}</i>
              <p class="card-text">
              ${article.content}
              </p>
            </div>
    `);
  }
  $($readMore).on("click", function(e) {
    // let event =
    $articleFrame.replaceWith(article(post, i));
  });
  // GET
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/posts",
    success: function(posts) {
      $.each(posts, function(i, post) {
        aPost(post, i);
        // console.log(`success, ${post.author}`);
      });
      // console.log("success:=>", posts);
    },
    error: function() {
      alert("error in loading");
    }
  });

  //POST
  $("#register").on("click", function(event) {
    event.preventDefault();

    var user = {
      username: $username.val(),
      email: $email.val(),
      password: $password.val()
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/users",
      data: user,
      success: function(newUser) {
        localStorage.setItem("users", newUser);
        window.location.href = "../index.html";
        // $("#formed").append(`
        // <p>${newUser.email}</p>
        // <p>${newUser.password}</p>
        // <p>${newUser.username}</p>
        // `);
        // $comments = newUser;
      },
      error: function() {
        alert("error in loading");
      }
    });
  });
  //get-----------------------------
  $("#login-btn").on("click", function(event) {
    event.preventDefault();
    $("#login-btn").hide();
    //$("#loading").html(`<img src="../images/Ring.gif"/>`);

    let newUser = {
      username: $("#username").val(),
      password: $("#password").val()
    };

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/users",
      success: function(users) {
        $.each(users, function(i, user) {
          if (
            newUser.username === user.username &&
            newUser.password === user.password
          ) {
            window.location.href = "../index.html";
          } else {
            $("#loading").append(`<p>you are not register</p> `);
          }
        });
        // console.log("success:=>", posts);
      },
      error: function() {
        alert("error in loading");
      }
    });
    // console.log(event);
    // console.log(user);
    // $.ajax({
    //   type: "POST",
    //   url: "http://localhost:3000/users",
    //   data: user,
    //   success: function(newUser) {
    //     $("#loading").append(`
    //     <p>welcome</p>
    //     `);
    //   },
    //   error: function() {
    //     alert("error during login");
    //   }
    // });
  });
  console.log(comments); //onclock

  //POST
  $("#post-article").on("click", function(event) {
    event.preventDefault();
    let apost = {
      title: $title.val(),
      content: $content.val(),
      imageUrl: $articleImage.val()
    };
    console.log("this is post", apost);
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/posts",
      data: apost,
      success: function(newPost) {
        localStorage.setItem("posts", newPost);
        article(newPost);
        aPost(newPost);
        //window.location.href = "../index.html";

        // $("#formed").append(`
        // <p>${newUser.email}</p>
        // <p>${newUser.password}</p>
        // <p>${newUser.username}</p>
        // `);
        // $comments = newUser;
      },
      error: function() {
        alert("error in loading");
      }
    });
  });
});
