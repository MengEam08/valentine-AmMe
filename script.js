 /**
         * IMPORTANT: Paste your actual KHQR image link here.
         */
        const MY_REAL_QR_URL = "https://via.placeholder.com/300x400?text=Paste+Your+KHQR+Direct+Link+Here";
        
        const qrImg = document.getElementById('real-qr-image');
        if (MY_REAL_QR_URL && !MY_REAL_QR_URL.includes("placeholder")) {
            qrImg.src = MY_REAL_QR_URL;
        }

        function createFallingElement() {
            const container = document.getElementById('bg-overlay');
            const el = document.createElement('i');
            const icons = ['fa-star', 'fa-sparkle', 'fa-heart'];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            el.className = `fas ${randomIcon} falling-element`;
            const startX = Math.random() * 100;
            const size = Math.random() * 8 + 8;
            const duration = Math.random() * 4 + 5;
            const delay = Math.random() * 2;
            el.style.left = startX + 'vw';
            el.style.fontSize = size + 'px';
            el.style.animationDuration = duration + 's';
            el.style.animationDelay = delay + 's';
            container.appendChild(el);
            setTimeout(() => { el.remove(); }, (duration + delay) * 1000);
        }

        // Initialize background particles
        for(let i = 0; i < 15; i++) createFallingElement();
        setInterval(createFallingElement, 1500);

        function goToQRCode() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById('page-garden').classList.add('hidden-page');
            document.getElementById('page-qrcode').classList.remove('hidden-page');
            for(let i = 0; i < 15; i++) setTimeout(createFallingElement, i * 100);
        }

        function showGiftModal() {
            document.getElementById('gift-modal').classList.remove('hidden-page');
        }

        function confirmGiftSent(isSent) {
            document.getElementById('gift-modal').classList.add('hidden-page');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (isSent) {
                document.getElementById('page-qrcode').classList.add('hidden-page');
                document.getElementById('page-success').classList.remove('hidden-page');
                for(let i = 0; i < 40; i++) setTimeout(createFallingElement, i * 40);
            } else {
                document.getElementById('page-qrcode').classList.add('hidden-page');
                document.getElementById('page-sad').classList.remove('hidden-page');
            }
        }

        function goBackToQRFromSad() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById('page-sad').classList.add('hidden-page');
            document.getElementById('page-qrcode').classList.remove('hidden-page');
        }

        function goToGardenFromSuccess() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById('page-success').classList.add('hidden-page');
            document.getElementById('page-garden').classList.remove('hidden-page');
        }