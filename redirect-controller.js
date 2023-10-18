class RedirectController {
    constructor(targetURL, maxWidth, delay) {
        this.targetURL = targetURL;
        this.maxWidth = maxWidth;
        this.delay = delay || 2000; // 5000 milisegundos (5 segundos) por defecto
    }

    isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    shouldRedirect() {
        return window.innerWidth <= this.maxWidth && this.isMobileDevice();
    }

    redirectToURL(url) {
        window.location.href = url;
    }

    redirectToGoogle() {
        setTimeout(() => {
            if (this.shouldRedirect()) {
                this.redirectToURL(this.targetURL);
            }
        }, this.delay);
    }

    init() {
        this.redirectToGoogle();
    }
}

export { RedirectController };
