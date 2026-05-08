    const text = "Red Phantom";
    let index = 0;
    let isDeleting = false;
    const speed = 120;
    const deleteSpeed = 100;
    const delayAfterFinish = 150;

    function typeWriter() {
        const title = document.getElementById("typewriter");
        if (!isDeleting) {
            if (index < text.length) {
                title.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            } else {
                isDeleting = true;
                setTimeout(typeWriter, delayAfterFinish);
            }
        } else {
            if (index > 1) {
                title.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, deleteSpeed);
            } else {
                isDeleting = false;
                setTimeout(typeWriter, 500);
            }
        }
    }

    window.onload = typeWriter;
