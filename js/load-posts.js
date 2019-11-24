$(document).ready(function () {
	loadPosts();

	function loadPosts() {
		let posts = JSON.parse(localStorage.getItem('posts'));
		// let posts = [
		// 	{title:'hhh', body: 'shhssh'},
		// 	{title:'hhh', body: 'shhssh'},
		// 	{title:'hhh', body: 'shhssh'},
		// ];

		for (const [index, post] of posts.entries()) {
			console.log(index, post)

			let postTemplate = `
				<div class="row post-item" data-id="${index}">
						<div class="col-md-2"></div>
						<div class="col-md-8 col-sm-12">
							<div class="card mt-5">
								<div class="card-header d-flex justify-content-between">
									${post.title}
						
									<button class="btn btn-danger btn-sm delete-post">
										<i class="fas fa-trash"></i>
									</button>
								</div>
								<div class="card-body">
									${post.body}
								</div>
							</div>
						</div>
					</div>
			`;

			$('#posts-container').prepend(postTemplate)


		}


	}

	$('.delete-post').on('click', function () {
		$(this).parents('.row.post-item').slideUp(700, function () {
			let posts = JSON.parse(localStorage.getItem('posts'));

			posts.splice($(this).data('id'), 1)
			$(this).remove()

			localStorage.setItem('posts', JSON.stringify(posts))
		})
	})



});