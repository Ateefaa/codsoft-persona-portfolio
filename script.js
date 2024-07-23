function typeWriter(textElement, text, i) {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() { typeWriter(textElement, text, i); }, 50);  
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var textContainer = document.querySelector('.text-container');
    var textElements = textContainer.querySelectorAll('h2, p');
    
    textElements.forEach(function(textElement) {
        var text = textElement.textContent.trim();
        textElement.textContent = '';
        typeWriter(textElement, text, 0);
    });
});
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
document.getElementById("contactButton").onclick = function() {
    document.getElementById("contactPopup").style.display = "block";
}

document.getElementById("closePopup").onclick = function() {
    document.getElementById("contactPopup").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("contactPopup")) {
        document.getElementById("contactPopup").style.display = "none";
    }
} 
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { rootMargin: '0px', threshold: 0.5 }); 

timelineItems.forEach(item => {
    observer.observe(item);
});



