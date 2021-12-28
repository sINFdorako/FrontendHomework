export const render = (nodeToRenderTo, nodeToRender) => {
    nodeToRenderTo.innerHTML = ''
    nodeToRenderTo.appendChild(nodeToRender)
}