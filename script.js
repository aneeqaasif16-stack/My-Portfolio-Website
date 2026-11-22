
// 1. Welcome Message
console.log("Welcome to Aneeqa's Portfolio!");

// 2. Smooth Scrolling
document.documentElement.style.scrollBehavior = "smooth";

// 3. Make Contact Details Clickable
const contactSection = document.querySelector(".contact");

if (contactSection) {
    const contactParagraphs = contactSection.querySelectorAll("p");

    contactParagraphs.forEach(function (paragraph) {
        const text = paragraph.textContent.trim();

        if (text.startsWith("Email:")) {
            const email = text.replace("Email:", "").trim();

            paragraph.innerHTML =
                'Email: <a href="mailto:' + email + '">' + email + '</a>';
        }

        if (text.startsWith("LinkedIn:")) {
            const url = text.replace("LinkedIn:", "").trim();

            paragraph.innerHTML =
                'LinkedIn: <a href="' + url + '" target="_blank" rel="noopener noreferrer">Visit My LinkedIn</a>';
        }

        if (text.startsWith("Instagram:")) {
            const url = text.replace("Instagram:", "").trim();

            paragraph.innerHTML =
                'Instagram: <a href="' + url + '" target="_blank" rel="noopener noreferrer">Visit My Instagram</a>';
        }

        if (text.startsWith("Facebook:")) {
            const url = text.replace("Facebook:", "").trim();

            paragraph.innerHTML =
                'Facebook: <a href="' + url + '" target="_blank" rel="noopener noreferrer">Visit My Facebook</a>';
        }
    });
}

// 4. Create Back To Top Button
const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.title = "Back to Top";
topButton.setAttribute("aria-label", "Back to Top");

document.body.appendChild(topButton);

// 5. Style Back To Top Button
topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.backgroundColor = "#7550A8";
topButton.style.color = "#FFFFFF";
topButton.style.fontSize = "28px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

// 6. Show Button While Scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

// 7. Back To Top Function
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
