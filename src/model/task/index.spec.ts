import { isTaskOnGoing, isTaskRejected, isTaskResolved, Task } from 'model/task'

const rejectedTask: Task = { id: 1, name: 't1', desc: '', type: 'notUrgent-important', rejectedTime: new Date() }
const resolvedTask: Task = { id: 1, name: 't1', desc: '', type: 'notUrgent-important', resolvedTime: new Date() }
const onGoingTask: Task = { id: 3, name: 't3', desc: '', type: 'notUrgent-important' }
describe("task filter", () => {
    it("rejected task", () => {
        expect(isTaskRejected(rejectedTask)).toBeTruthy()
        expect(isTaskRejected(resolvedTask)).toBeFalsy()
        expect(isTaskRejected(onGoingTask)).toBeFalsy()
    })
    it("resolved task", () => {
        expect(isTaskResolved(rejectedTask)).toBeFalsy()
        expect(isTaskResolved(resolvedTask)).toBeTruthy()
        expect(isTaskResolved(onGoingTask)).toBeFalsy()
    })
    it("ongoing task", () => {
        expect(isTaskOnGoing(resolvedTask)).toBeFalsy()
        expect(isTaskOnGoing(rejectedTask)).toBeFalsy()
        expect(isTaskOnGoing(onGoingTask)).toBeTruthy()
    })
})
