const modalWrapper = document.getElementById('modal-wrapper');
const modalPicture = document.getElementById('modal-picture');
let modal = false;

window.addEventListener('click', e => {
  if (!modal) {
    if (e.path[0].nodeName === "IMG") {
      const image = e.path[0].outerHTML;
      modalPicture.innerHTML += `${image}`;
      modal = true
      modalWrapper.classList.add('active')
    }
  } else {
    window.addEventListener('click', e => {
      if (e.target === modalWrapper) {
        modalPicture.innerHTML = ``
        modal = false
        modalWrapper.classList.remove('active')
      }
    })
  }
})
