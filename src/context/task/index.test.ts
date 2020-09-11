import { renderHook } from "@testing-library/react-hooks"
import { useTask } from "context/task"

test('should create new card', () => {
  const { result } = renderHook(useTask)
  const type = 'notUrgent-important'
  result.current.newTask(type)
  const newTask = result.current.tasks[0]
  expect(newTask.id).toEqual(1)
  expect(newTask.type).toEqual(type)
})

