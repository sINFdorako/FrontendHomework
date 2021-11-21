export const delay = (() => {
    new Promise((resolve, reject) => {
        if (delay === 0) {
            reject()
        } else {
            setTimeout(() => resolve(), 200)
        }
    })
}) 

