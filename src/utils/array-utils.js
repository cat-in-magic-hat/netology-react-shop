export function chunk(array, chunkSize) {
    if (!array || !array.length) return array;
    const copy = [...array];
    const result = [];
    while (copy.length) {
        result.push(copy.splice(0, chunkSize));
    }
    return result;
}
