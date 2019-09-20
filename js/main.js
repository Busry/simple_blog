$(document).ready(function() {
  // $(function() {
  let $comments = $("#comments");
  let $password = $("#password");
  let $username = $("#username");
  let $email = $("#email");
  let $posts = $("#content-main-post");
  // var postTemplate = $("#post-template").html();

  function aPost(post, i) {
    $posts.append(`
      <!-- card -->
          <section class="row card mb-3" style="max-width: 540px;">
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
                </div>
              </div>
            </div>
          </section>
          <!--// card -->



      `);
  }
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
  // $.ajax({
  //   type: "GET",
  //   url: "http://localhost:3000/comments",
  //   success: function(comments) {
  //     $.each(comments, function(i, comment) {
  //       $comments.append(`<li>${comment.body}</li>`);
  //     });
  //     console.log("success", comments);
  //   },
  //   error: function() {
  //     alert("error in loading");
  //   }
  // });

  //POST
  $("#register").on("click", function(event) {
    event.preventDefault();

    var user = {
      username: $username.val(),
      email: $email.val(),
      password: $password.val()
    };

    console.log(event);
    console.log(user);
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
});
// })
ClassicEditor.create(document.querySelector("#bodys"), {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote"
  ],
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph"
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1"
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2"
      }
    ]
  }
}).catch(error => {
  console.log(error);
});
