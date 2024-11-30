class RandomTextBlock {
    constructor(textLength = 20, fontSizeRange = [10, 30], spawnInterval = 500) {
        this.textLength = textLength;
        this.fontSizeRange = fontSizeRange;
        this.spawnInterval = spawnInterval;
        this.characters = "01"; // Only binary digits
        this.startSpawning();
    }

    generateRandomText() {
        let result = '';
        for (let i = 0; i < this.textLength; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * this.characters.length)) + '<br>';
        }
        return result;
    }

    spawnTextBlock() {
        const textBlock = document.createElement('div');
        textBlock.classList.add('text-block');
        textBlock.innerHTML = this.generateRandomText(); // Use innerHTML to interpret <br> tags

        const randomX = Math.random() * window.innerWidth - 400;
        const randomY = window.scrollY + Math.random() * window.innerHeight-400;
        const randomFontSize = Math.random() * (this.fontSizeRange[1] - this.fontSizeRange[0]) + this.fontSizeRange[0];

        textBlock.style.left = `${randomX}px`;
        textBlock.style.top = `${randomY}px`;
        textBlock.style.fontSize = `${randomFontSize}px`;

        document.body.appendChild(textBlock);

        setTimeout(() => {
            textBlock.remove();
        }, 10000);
    }

    startSpawning() {
        setInterval(() => this.spawnTextBlock(), this.spawnInterval);
    }
}

// Initialize the effect
const randomTextBlock = new RandomTextBlock(20, [10, 30], 500);
