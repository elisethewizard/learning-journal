import { articlesArray } from '/data.js'

function renderArticles(){
    let featuredHtml = ``
    let articlesHtml = ``
    let baseHtml = ``
    articlesArray.forEach(function(article) {
        baseHtml = `
<div class='post' id='post-${article.id}'>
<h1 class='p-title'>${article.title}</h1>
<h2 class='p-date'>${article.date}</h2>
<p class='p-content'>${article.content}</p>
<img class='p-img' src='${article.imgurl}'>
</div>`
        article.isFeatured ? featuredHtml += baseHtml : articlesHtml += baseHtml
    })
    if (document.getElementById('featured-container')){
        document.getElementById('featured-container').innerHTML = featuredHtml
    }
    document.getElementById('recent-articles').innerHTML = articlesHtml
}

function loadArticle(id){
    const articleObj = articlesArray.filter(function(obj){
        return `post-${obj.id}` === id 
    })[0]
    const articlePageHtml = `
<div class='article-full'>
    <h2 class='p-date'>${articleObj.date}</h2>
    <h1 class='p-title'>${articleObj.title}</h1>
    <p class='p-content'>${articleObj.content}</p>
    <img class='p-img' src='${articleObj.imgurl}'>
</div>
<h1 id='recent-title'>Recent posts</h1>
<div id='main-articles'>
    <div id='recent-articles'></div>
</div>`
    document.getElementsByTagName("main")[0].innerHTML = articlePageHtml
    renderArticles()
}

renderArticles()

document.addEventListener('click', function(e){
    if (e.target.parentElement.classList.contains('post')) {
        loadArticle(e.target.parentElement.id)
    } 
})