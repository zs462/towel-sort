
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let isEvenRow = false

    res = []
    if (Array.isArray(matrix)) {
        for (let row of matrix) {
            rowLength = row.length
            for (let i = fromI(rowLength, isEvenRow); toI(i, rowLength, isEvenRow); i = nextI(i, isEvenRow)) {
                res.push(row[i])
            }
            isEvenRow = !isEvenRow
        }
    }
    return res;
}

function fromI(rowLength, isEvenRow) {
    if (isEvenRow) {
        return rowLength - 1
    } else {
        return 0
    }
}

function toI(i, rowLength, isEvenRow) {
    if (isEvenRow) {
        return i >= 0
    } else {
        return i <= rowLength - 1
    }
}

function nextI(i, isEvenRow) {
    if (isEvenRow) {
        return i - 1
    } else {
        return i + 1
    }
}
