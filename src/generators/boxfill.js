export default (draw, width, height) => {

    var group = draw.group()

    group
        .rect(width, height)

    const itemCount = 6 + Math.round(6 * Math.random());

    const xNumOne = width * Math.random()
    const xNumTwo = width * Math.random()
    const xasArray = [xNumOne, xNumTwo]
    xasArray.sort();
    const [xPinchMin, xPinchMax] = xasArray;

    const yNumOne = height * Math.random()
    const yNumTwo = height * Math.random()
    const yasArray = [yNumOne, yNumTwo]
    yasArray.sort();
    const [yPinchMin, yPinchMax] = yasArray;

    for (var i = 0; i <= itemCount; i++) {

        const xMin = 0;
        const xMax = width;

        const y = i * (height / itemCount);

        group.path(`M ${xMin} ${y} C ${xPinchMin} ${yPinchMin}, ${xPinchMax} ${yPinchMax}, ${xMax} ${y}`)
    }

    return group
}