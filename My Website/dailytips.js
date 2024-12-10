const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button =>{button.addEventListener('click',()=>{
    const textElement = button.nextElementSibling;
    if(textElement.style.display ==='block'){
        textElement.style.display='none';
        button.textContent='Read more';
    } else {
        textElement.style.display='block';
        button.textContent='Read less';
    };
});
});
const publishArticleButton = document.getElementById('publish-article');
publishArticleButton.addEventListener('click',()=>{
    const articleContent = document.getElementById('article-content').value;
    const newArticle = document.createElement('li');
    newArticle.innerHTML = '<h3>New Article</h3><p class = "article-content">articleContent</p><button class= "read-more">Read More</button>';

    const articlesList = document.querySelector('.articles ul');
    articlesList.appendChild(newArticle);

    document.getElementById('article-content').value = ";"
});

window.addEventListener('resize',()=>{
    const heroSection = document.querySelector('hero');
    const articlesSection = document.querySelector('.articles');

    if (window.innerWidth < 768){
        heroSection.style.height = '50vh';
        articlesSection.style.marginTop = '20px';

    } else {
        heroSection.style.height = '100vh';
        articlesSection.style.marginTop = '40px';
    }
});
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');
const commentData = [];
('comments.json')
.then(response => response.json())
.then(data=>{
    commentData = data;
    renderComments();
});
commentForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const commentAuthor = document.getElementById('comment-author').value;
    const commentText = document.getElementById('comment-text').value;
    const articleId = 1;
    const newComment = {
        author: commentAuthor,
        text: commentText,
    };
    commentData[articleId - 1].comments.push(newComment);
    renderComments();
    commentForm.reset();
});
function renderComments() {
    commentList.innerHTML = `;commentsData[0].comments.forEach((comment)=>{const commentHTML = '<li><p><strong>${comment.text}</p></li>';commentList.insertAdjacentHTML('beforeend',commentHTML);});`
};
function navigateToHome(){
    window.location.href = 'dailytips.html';
}
function navigateToAbout(){
    window.location.href = 'dailytips.html';
}
function navigateToContact(){
    window.location.href = 'dailytips.html';
}
function navigateToAdvertising(){
    window.location.href = 'dailytips.html';
}
function navigateToPartnership(){
    window.location.href = 'dailytips.html';
}
// get the form
const articleTitle = document.querySelector('.article h2');
const articleContent = document.querySelector('.article p');
articleTitle.addEventListener('input',(e)=>{
    console.log('p updated:',
        e.target.textContent);
});
articleContent.addEventListener('input',(e)=>{
    console.log('Contentupdated');
});
readMoreButtons.addEventListener('click',()=>{
    fullContentDiv.style.display = fullContentDiv.style ==='none' ? 'block':'none';
});
articleContent.addEventListener('input',(e)=>{
    fullContentDiv.innerHTML = e.target.textContent;
});
articleTitle.addEventListener('input',(e)=>{
    fullContentDiv.innerHTML = `<p>$
    {e.target.textContent}</p>` + fullContentDiv.innerHTML;
});