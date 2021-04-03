const { ARRIVAL, EXIT } = require("../helpers/constants")

function buildEvent({name,time,type}) {
    return {
        name,
        time,
        type: (type == ARRIVAL ? ARRIVAL : EXIT)
    }
}

module.exports = {
    buildEvent,
}