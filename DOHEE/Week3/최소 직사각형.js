function solution(sizes) {
    let maxWidth = 0,
        maxHeight = 0;
    sizes.forEach((size) => {
        size.sort((a, b) => a - b);
        const [height, width] = size;
        maxHeight = maxHeight < height ? height : maxHeight;
        maxWidth = maxWidth < width ? width : maxWidth;
    });

    var answer = maxWidth * maxHeight;
    return answer;
}
