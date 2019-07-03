/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let size = preferences.length;
    let counter = 0;
    for (let i = 0; i < size; i++) {
        let a = preferences[i];
        let b = preferences[a-1];
        let c = preferences[b-1];

        if (c===i+1 && a!=b && b!=c){
            counter++;
            preferences[i] = preferences[a-1] = preferences[b-1] = -1;
        }
    }
    return counter;
};
