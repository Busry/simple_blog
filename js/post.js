$(document).ready(function() {
  // $(function() {
  let $tableBody = $("#table-body");
  let $delete = $(".delete");
  let $edit = $("#edit");
  let $publish = $("#publish");
  // let $posts = $("#content-main-post");
  // let $title = $("#post-form #article-title");
  // let $content = $("#post-form #bodys");
  // let $articleImage = $("#post-form #imageUrl");
  // var postTemplate = $("#post-template").html();

  function tr(post, i) {
    $tableBody.append(`
      <!-- -->
          <tr>
        <td>*</td>
        <td>${post.title}</td>
        <td>${post.author}</td>
        <td><a href="#" class="edit" id="edit">Edit</a> </td>
        <td><a href="#" class="delete" id="delete">Delete</a></td>
        <td><a href="#" class="publish" id="publish">publish</a></td>
       </tr>
      <!--//  -->



      `);
  }
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
  // $($delete).on("click", function(e) {
  //   console.log("hi");
  //   //  $(".remove").hide();
  // });
  document.getElementById("delete").addEventListener("click", e => {
    console.log("hi");
  });
});
