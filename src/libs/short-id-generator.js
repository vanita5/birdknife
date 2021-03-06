const MIN = 360;
const MAX = 1295;

class ShortIdGenerator {

    /**
     * Constructor
     */
    constructor() {
        this.current = MIN;
        this.specialCurrent = MIN;
    }

    /**
     * Generate a new id from a0 up to zz
     *
     * @returns {string}
     */
    generate() {
        if (this.current >= MAX) this.current = MIN;
        const id = this.current.toString(36);
        this.current++;
        return id;
    }

    /**
     * Generate a new id from a0 to zz
     * with a given prefix
     *
     * @param specialKey
     * @return {string}
     */
    generateSpecial(specialKey) {
        if (this.specialCurrent >= MAX) this.specialCurrent = MIN;
        const id = specialKey + this.specialCurrent.toString(36);
        this.specialCurrent++;
        return id;
    }
}

export default ShortIdGenerator;
