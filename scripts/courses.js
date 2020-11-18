const modal = document.getElementById('modal-add-article');
const showModalBtn = document.getElementById('show-modal-button');
const closeModalBtn = document.getElementById('modal-add-article-close');
const list = document.getElementById('courses-list');

const addForm = document.getElementById('add-article-form');
const addBtn = document.getElementById('modal-form-button-add');

const nameLabel = document.getElementById('nameLabel');
const teacherLabel = document.getElementById('teacherLabel');
const descriptionLabel = document.getElementById('descriptionLabel');
const linkLabel = document.getElementById('linkLabel')

showModalBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
})
// addBtn.addEventListener('click', () => {
//   modal.classList.toggle('active');
// })

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.toggle('active');
    resetForm();
  }
})

closeModalBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
  resetForm();
})

// Form validation and action

const generateArticle = (name, teacher, description, link) => {
  const html = ` <li>
<article class="article__wrapper">
<img class="article__picture" src="/images/courses-picture.jpg" alt="">
<div class="article__text">
  <h2 class="article__title">${name}</h2>
  <p class="article__teacher">Author:<span> ${teacher}</span></p>
  <p class="article__description">${description}</p>
  <button onclick="window.open('${link}');" class="article__button">Go to website</button>
</div>
</article>
</li>
`
  list.innerHTML += html;
  resetForm();
  modal.classList.toggle('active');
}

const resetForm = () => {
  addForm.name.value = '';
  addForm.teacher.value = '';
  addForm.link.value = '';
  addForm.description.value = '';
}



addForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = addForm.name.value;
  const teacher = addForm.teacher.value;
  const description = addForm.description.value;
  const link = addForm.link.value;
  console.log(name, teacher, description, link);
  if (name.length === 0) {
    console.log(name)
    nameLabel.innerText += `aaaaa`
  }
  generateArticle(name, teacher, description, link);
})