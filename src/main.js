const title = document.querySelector('h1');
const text = document.querySelectorAll('p');
const button = document.querySelector('button');
const fingerTitle = document.querySelector('h2');

fingerTitle.style.display = 'none';
text[1].style.display = 'none';
text[2].style.display = 'none';

button.addEventListener('click', async () => {
  title.style.display = 'none';
  text[0].style.display = 'none';
  button.style.display = 'none';

  fingerTitle.style.display = 'block';
  text[1].style.display = 'block';
  text[2].style.display = 'block';

  try {
    alert('REQUESTING CAMERA');
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    alert('CAMERA READY');
    const video = document. createElement('video');
    
    } catch (error) {
    alert('CAMERA PERMISSION NEEDED');
  }
});