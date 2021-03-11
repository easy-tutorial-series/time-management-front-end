import { act, renderHook } from '@testing-library/react-hooks'
import { RecoilRoot } from 'recoil'
import { useTaskState } from './task'

describe('task operations', () => {
    it('init', () => {
        const { result } = renderHook(useTaskState, { wrapper: RecoilRoot })
        expect(result.current.onGoingTasks()).toStrictEqual([])
    })
    it('create new task', () => {
        const { result } = renderHook(useTaskState, { wrapper: RecoilRoot })
        act(() => {
            result.current.newTask('notUrgent-important')
        })
        expect(result.current.onGoingTasks().length).toStrictEqual(1)
        expect(result.current.historicTasks().length).toStrictEqual(0)
        expect(result.current.onGoingTasks()[0].type).toStrictEqual('notUrgent-important')
        expect(result.current.onGoingTasks()[0].resolvedTime).toStrictEqual(undefined)
        expect(result.current.onGoingTasks()[0].rejectedTime).toStrictEqual(undefined)
    })
    it('update a task', () => {
        const { result } = renderHook(useTaskState, { wrapper: RecoilRoot })
        act(() => {
            result.current.newTask('notUrgent-important')
        })
        expect(result.current.onGoingTasks()[0].type).toStrictEqual('notUrgent-important')
        act(() => {
            result.current.updateTask({ ...result.current.onGoingTasks()[0], type: 'notUrgent-notImportant' })
        })
        expect(result.current.onGoingTasks()[0].type).toStrictEqual('notUrgent-notImportant')
        
        expect(result.current.onGoingTasks().length).toStrictEqual(1)
        expect(result.current.historicTasks().length).toStrictEqual(0)
        expect(result.current.onGoingTasks()[0].resolvedTime).toStrictEqual(undefined)
        expect(result.current.onGoingTasks()[0].rejectedTime).toStrictEqual(undefined)
    })
    it('resolve a task', () => {
        const { result } = renderHook(useTaskState, { wrapper: RecoilRoot })
        act(() => {
            result.current.newTask('notUrgent-important')
        })
        act(() => {
            result.current.resolveTask(result.current.onGoingTasks()[0].id)
        })
        expect(result.current.onGoingTasks().length).toStrictEqual(0)
        expect(result.current.historicTasks().length).toStrictEqual(1)
        expect(result.current.historicTasks()[0].type).toStrictEqual('notUrgent-important')
        expect(result.current.historicTasks()[0].resolvedTime).not.toBeUndefined()
        expect(result.current.historicTasks()[0].rejectedTime).toStrictEqual(undefined)
    })
    it('reject a task', () => {
        const { result } = renderHook(useTaskState, { wrapper: RecoilRoot })
        act(() => {
            result.current.newTask('notUrgent-important')
        })
        act(() => {
            result.current.rejectTask(result.current.onGoingTasks()[0].id)
        })
        expect(result.current.onGoingTasks().length).toStrictEqual(0)
        expect(result.current.historicTasks().length).toStrictEqual(1)
        expect(result.current.historicTasks()[0].type).toStrictEqual('notUrgent-important')
        expect(result.current.historicTasks()[0].rejectedTime).not.toBeUndefined()
        expect(result.current.historicTasks()[0].resolvedTime).toStrictEqual(undefined)
    })
})
