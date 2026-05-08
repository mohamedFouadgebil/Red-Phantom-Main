      const text = "Red Phantom";
      let index = 0;
      let isDeleting = false;
      const speed = 150;
      const deleteSpeed = 80;
      const delayAfterFinish = 1000;
      const title = document.getElementById("typewriter");

      function typeWriter() {
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
