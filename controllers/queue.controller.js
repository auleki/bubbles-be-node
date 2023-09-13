import Queue from "../models/queue.model.js"

export default class QueueController {
    constructor() {}

    async getSingleQueue(req, res) {
        try {
            const singleRow = await Queue.findById(req.params.id);
            // res.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        } catch (error) {
            
        }
    }
}

/**
 * QUEUE CREATED
 * - 
 * - 
 * - create two express slots (COMING!)
 */

/**
 * QUEUE FEATURES
 * - load can be added to queue
 * - express slots can be filled up and emptied out
 * - orders have a time elapsed on queue
 * - when an order on the queue finishes, 
 */