let imageIndex = 0;
let imageLinks = ['Marmink01.jpg','Marmink02.jpg','Marmink03.jpg','Marmink04.jpg','Marmink05.jpg','Kamink01.jpg','Kamink02.jpg']; //พวกนี้คือลิ้งก์รูปที่เก็บไว้ในโฟลเดอร์กับไฟล์ HTML
let image = document.querySelector('.image');

function prevImage () {
   if(imageIndex> 0) {
       imageIndex--;
       image.src = imageLinks[imageIndex];
   }
}

function nextImage () {
    if(imageIndex < imageLinks.length -1) {
       imageIndex++;
       image.src = imageLinks[imageIndex];
    }
}

function keyup (event) {
   if (event.key==='ArrowLeft') {
      prevImage();
   }
   else if (event.key === 'ArrowRight') {
      nextImage();
   }
}

document.addEventListener('keyup', keyup);