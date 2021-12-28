export const html = (templateString) => {
    return new DOMParser()
        .parseFromString(templateString, 'text/html')
        .body
}

