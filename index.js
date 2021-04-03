const LCG = require("./src/helpers/random-numbers");
const model = require('./model.json');
const { ARRIVAL, EXIT } = require("./src/helpers/constants")
const { 
    prepareSimState, 
    scheduleEvent,
    eventHandler,
} = require("./src/models/simulator");

const { prepareQueueState } = require("./src/models/queue");
const { buildEvent } = require("./src/models/events");


// setup queue state
const queueState = prepareQueueState(...model.queues)
console.log("Queue state:", queueState);

const initialEvent = buildEvent(...model.initialEvents)
console.log("Event:", initialEvent);

let simState = prepareSimState(queueState)

console.log("Sim state:", simState);

simState = scheduleEvent(simState, initialEvent)

simState = eventHandler(simState, simState.scheduledEvents.shift())

console.log("Sim state:", simState);
