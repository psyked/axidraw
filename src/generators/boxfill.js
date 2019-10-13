export default (draw, width, height) => {

    var group = draw.group()

    group
        .rect(width, height)

    const itemCount = 10;

    const xPinchMin = width * Math.random()
    const xPinchMax = width * Math.random()

    const yPinchMin = height * Math.random()
    const yPinchMax = height * Math.random()

    for (var i = 0; i <= itemCount; i++) {

        const xMin = 0;
        const xMax = width;

        const y = i * (height / itemCount);

        group.path(`M ${xMin} ${y} C ${xPinchMin} ${yPinchMin}, ${xPinchMax} ${yPinchMax}, ${xMax} ${y}`)
    }

    return group
}