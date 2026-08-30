const title = document.querySelector('h1');
const text = document.querySelectorAll('p');
const button = document.querySelector('button');
const fingerTitle = document.querySelector('h2');
const result=document.querySelector('#result');
const canvas = document.querySelector('#cameraCanvas');
const ctx = canvas.getContext('2d');
const samples=[];
let samlingInternal;
result.style.display='none';
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
  text[2].textContent = 'Requesting camera...';

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });

const video=document.querySelector('#camera')
video.srcObject=stream;
video.autoplay = true;
video.muted = true;
video.playsInline = true;
video.style.width = '100%';
video.style.maxWidth = '100%';
video.style.display = 'block';
video.style.height='300px';
video.style.objectFit='cover';




window.samplingInterval = setInterval(() => {
  if (video.readyState < 2) return;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let total=0;
  for (let i = 0; i < frame.data.length; i += 4) {
    total+= frame.data[i];
  }
  const averageRed = total / (frame.data.length / 4);
  samples.push(averageRed);
  if (samples.length >= 300) clearInterval(samplingInterval);
  if (samples.length === 300) console.log('Samples captured:', samples.length);
  
}, 100);






video.style.borderRadius='16px';

setTimeout(() => { text[2].style.display = 'none'; result.style.display = 'block'; result.textContent = 'YOUR CHECK'; stream.getTracks().forEach(track => track.stop()); video.style.display = 'none'; }, 30000);

  } catch (error) {
    text[2].textContent = error.message;
    console.error(error);
  }
});
   