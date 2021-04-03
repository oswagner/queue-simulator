const { ARRIVAL, EXIT } = require("../helpers/constants")
const { buildEvent } = require("./../models/events");
function prepareSimState(queues) {
    return {
        globalTime: 0.0,
        scheduledEvents : [],
        queues : [queues]
    }
}

function scheduleEvent(state, newEvent) {
    state.scheduledEvents.push(newEvent)
    state.scheduledEvents.sort((a, b)=> a.time - b.time)
    return state
}

function eventHandler(state, newEvent) {
    let queue = state.queues.find((element)=> element.name == newEvent.name)
    if (newEvent.type === ARRIVAL) {
        if (queue.currentUsage < queue.capacity) {
            queue.currentUsage = queue.currentUsage + 1
            if (queue.currentUsage <= 1) {
                state = scheduleEvent(state, buildEvent({ name:queue.name, time: 2.42, type:EXIT }))
            }
        }
        state = scheduleEvent(state, buildEvent({name: queue.name, time: 2.35, type: ARRIVAL}))
    }
    if (newEvent.type === EXIT) {
        queue.currentUsage = queue.currentUsage - 1
        if(queueState.currentUsage >= 1) {
            state =scheduleEvent(state, buildEvent({name: queueState.name, time: 1.2, type: EXIT,}))
        }
    }
    return state
}

function getSimState() {
    return state
}

function getScheduledEvent() {
    return state.scheduledEvents.shift()
}

module.exports = {
    prepareSimState,
    getSimState,
    scheduleEvent,
    getScheduledEvent,
    eventHandler
}

// function convertTime(params) {
//     return q
//     // U(A, B) = (B – A) x U(0, 1) + A
// }
