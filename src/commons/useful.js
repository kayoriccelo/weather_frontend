export const updateDimensions = callback => () => {
    callback({
        width: window.innerWidth,
        height: window.innerHeight
    })
};