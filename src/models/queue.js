function prepareQueueState({name, servers, capacity, arrival, service}) {
    return {
        name,
        servers,
        capacity,
        arrival,
        service,
        currentUsage: 0,
        queueTime: Array(capacity+1).fill(0.0).reduce((o, key, index) => ({ ...o, [index]:key}), {})
    }
}

function nextArrivalTime() {
    // U(A, B) = (B – A) x U(0, 1) + A
}

module.exports = {
    prepareQueueState,
}