class LanguageDropdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .language-dropdown {
                    position: relative;
                    display: inline-block;
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    right: 0;
                    background-color: #fff;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                    border-radius: 4px;
                    margin-top: 8px;
                }

                .dropdown-content.show {
                    display: block;
                }

                .language-option {
                    display: flex;
                    align-items: center;
                    padding: 12px 16px;
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                }

                .language-option:hover {
                    background-color: #f1f1f1;
                }

                .language-option img {
                    width: 20px;
                    height: 15px;
                    margin-right: 10px;
                }

                .dropdown-trigger {
                    cursor: pointer;
                }

                .navbar-arrow-svg.rotated {
                    transform: rotate(180deg);
                }

                ::slotted(img) {
                    width: inherit;
                    height: inherit;
                }
            </style>

            <div class="language-dropdown">
                <div class="dropdown-trigger" style="color: blue">
                    <slot name="arrow-icon"></slot>
                </div>
                <div class="dropdown-content">
                    <div class="language-option" data-language="es">
                        <img src="assets/flag-arg.svg" alt="Argentina">
                        <span>Español</span>
                    </div>
                    <div class="language-option" data-language="en">
                        <img src="assets/flag-usa.svg" alt="United States">
                        <span>English</span>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const dropdownTrigger = this.shadowRoot.querySelector('.dropdown-trigger');
        const dropdownContent = this.shadowRoot.querySelector('.dropdown-content');
        const arrowIcon = this.querySelector('[slot="arrow-icon"]');

        dropdownTrigger.addEventListener('click', (e) => {
            dropdownContent.classList.toggle('show');
            arrowIcon.classList.toggle('rotated');
            e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                dropdownContent.classList.remove('show');
                arrowIcon.classList.remove('rotated');
            }
        });

        const languageOptions = this.shadowRoot.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const language = option.dataset.language;
                const flagSrc = option.querySelector('img').src;

                this.dispatchEvent(new CustomEvent('languageChange', {
                    detail: { language, flagSrc },
                    bubbles: true,
                    composed: true
                }));

                dropdownContent.classList.remove('show');
                arrowIcon.classList.remove('rotated');
            });
        });
    }
}

customElements.define('language-dropdown', LanguageDropdown);