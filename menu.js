let currentPhotoIndex = 0;
const photos = [
  { src: 'https://bakeitwithlove.com/wp-content/uploads/2022/07/baked-bbq-sausage-h.jpg.webp', caption: `` },
  { src: 'https://www.womansworld.com/wp-content/uploads/2025/07/smash-burgers.jpg?w=1200&h=630&crop=1&quality=86&strip=all', caption: `` },
  { src: 'https://www.seriouseats.com/thmb/5sVbb2pB97IvOmPHEMsDBXIiAuA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__04__20190322-sous-vide-wings-joel-russo-14-98ddac888aad49b18ed6639f443d7e51.jpg', caption: `` },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3K4vttsxCZfR8Yns8-_wrnvSQNpkD3Awug&s', caption: `Naruto: Shippuden" follows the teenage ninja Naruto Uzumaki and his allies as they face a greater threat, 
  the Akatsuki organization, and the looming Fourth Shinobi World War.` },
  { src: 'https://www.charleys.com/wp-content/uploads/2021/09/74750388cbe24276a50bfc0b10b91901.jpg', caption: `` },
  { src: 'https://www.heathrilesbbq.com/cdn/shop/articles/3_3c6cddb2-ff53-4fb4-9408-0d0205ebc2f3.png?v=1740776919', caption: `` },
];

// Get the modal
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
  
    modalImage.src = photos[index].src;
    modalCaption.textContent = photos[index].caption;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  function changePhoto(direction) {
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
    if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;
  
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
  
    modalImage.src = photos[currentPhotoIndex].src;
    modalCaption.textContent = photos[currentPhotoIndex].caption;
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}