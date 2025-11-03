const questionInput = document.getElementById('questionInput');
const reviewInput = document.getElementById('reviewInput');
const postList = document.getElementById('postList');

document.getElementById('postQuestion').addEventListener('click', () => {
  addPost("Question", questionInput.value);
  questionInput.value = '';
});

document.getElementById('postReview').addEventListener('click', () => {
  addPost("Review", reviewInput.value);
  reviewInput.value = '';
});

function addPost(type, text) {
  if (!text.trim()) return;
  
  const li = document.createElement('li');
  li.innerHTML = `<strong>${type}:</strong> ${text}`;
  postList.prepend(li);

  // Save to localStorage
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.unshift({ type, text });
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Load previous posts on start
window.onload = () => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(p => addPost(p.type, p.text));
};
