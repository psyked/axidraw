export default (draw, width, height) => {

    var group = draw.group()
    group.path('M10,20L30,40')

    group
        .rect(width, height)
        .fill("transparent")
        .stroke("#60f");

    const itemCount = 10;

    const xPinchMin = width * Math.random()
    const xPinchMax = width * Math.random()
    const yPinch = height * Math.random()

    for (var i = 0; i < itemCount; i++) {
        // group.rect(10, 10)
        // .fill("transparent")
        // .stroke("#60f")
        // .move((width - 10) * Math.random(), (height - 10) * Math.random())

        const xMin = 0;
        const xMax = width;

        const y = i * (height / itemCount);

        // const yMin = 0;
        // const yMax = height;

        group.path(`M ${xMin} ${y} C ${xPinchMin} ${yPinch}, ${xPinchMax} ${yPinch}, ${xMax} ${y}`)
            .fill("transparent")
            .stroke("#60f")
    }

    return group
}