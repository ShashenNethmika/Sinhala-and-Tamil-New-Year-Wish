const canvas = document.getElementById('wishCanvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'Post.jpg';

const NAME_Y_PERCENT = 0.82;

function generateWishCard() {
    const userName = document.getElementById('nameInput').value.trim();
    if (!userName) { alert('කරුණාකර නමක් ඇතුළත් කරන්න.'); return; }
    if (!img.complete) { alert('Image is still loading, please wait.'); return; }

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = "#520d49";
    ctx.font = "bold 55px 'Arial', sans-serif";
    ctx.textAlign = "center";

    const finalY = canvas.height * NAME_Y_PERCENT;
    ctx.fillText(userName, canvas.width / 2, finalY);

    canvas.classList.add('showCard');
    document.getElementById('downloadBtn').style.display = "inline-block";
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'My_New_Year_Wish.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
}
// --- Donation Modal Logic ---
const donateBtn = document.getElementById('donate-btn');
const donateModal = document.getElementById('donate-modal');
const closeModal = document.getElementById('close-modal');

// Open Modal
donateBtn.addEventListener('click', () => {
    donateModal.classList.add('show');
});

// Close Modal Function
const hideModal = () => {
    donateModal.classList.remove('show');
};

closeModal.addEventListener('click', hideModal);

// Close when clicking outside the popup
donateModal.addEventListener('click', (e) => {
    if (e.target === donateModal) {
        hideModal();
    }
});
