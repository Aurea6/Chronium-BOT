function percentage(percent, total) {
    return Math.floor(((100*percent) / total)).toFixed(1)
}

module.exports = percentage