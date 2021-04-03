class LinearCongruentialGenerator {
    #a
    #m
    #c
    #seed

    constructor(seed) {
        this.#seed = seed == undefined ? 1 : seed
        this.#a = 25214903917
        this.#c = 11
        this.#m = Math.pow(2, 48)
    }

    next() {
        this.#seed = (this.#seed * this.#a + this.#c) % this.#m;
        return this.#seed / this.#m;
    }
}

module.exports = LinearCongruentialGenerator