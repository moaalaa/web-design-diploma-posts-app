const title = $('#title');
const body = $('#body');
const form = $('form');

$('.create-post').on('click', function (event) {
	const self = $(this)
	event.preventDefault();

	let validTitle = validate(title);
	let validBody = validate(body);

	if (validTitle && validBody) {
		self.attr('disabled', true)
		self.html('Loading... <i class="fas fa-spinner fa-spin"></i>')

		let post = {title: title.val(), body: body.val()};

		let posts = JSON.parse(localStorage.getItem('posts'));

		if (posts !== null) {
			
			posts.push(post);
		
			localStorage.setItem('posts', JSON.stringify(posts));			
		}  else {
			localStorage.setItem('posts', JSON.stringify([post]));
		}
		
		setTimeout(function () {
			title.val('')
			body.val('')
			title.removeClass('is-invalid').removeClass('is-valid')
			body.removeClass('is-invalid').removeClass('is-valid')
			
			self.attr('disabled', false)
			self.html('Create Post')		

		}, 3000)
	}
});


function validate(input) {
	if (input.val() === '') {
		input.addClass('is-invalid').removeClass('is-valid')

		return false;
	}

	input.removeClass('is-invalid').addClass('is-valid')

	return true;
}