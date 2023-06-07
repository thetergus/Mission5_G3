export const helloWorld = () => {
  return 'Hello Crazy World :P'
}

//
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//

// import { ITask } from '../1-types/Task'
import mongoose from 'mongoose'
import Task from '../3-models/tasks'

export const getAllTasks = async () => {
  return await Task.find({}).exec()
}

export const createOneTask = async (name: string, description: string) => {
  const newTask = await Task.create({
    _id: new mongoose.Types.ObjectId(),
    name,
    description,
    isCompleted: false,
  })

  return newTask
}

export const getOneTask = async (taskId: string) => {
  // const matchedTask = tasks.find((t) => t.id === taskId)
  //
  //
  console.log('taskId is', taskId)
  const matchedTask = await Task.findById(taskId).exec()
  console.log(matchedTask)
  if (!matchedTask) {
    throw new Error('Task not found')
  }

  return matchedTask
  //
  //
  // Task.findById(taskId, (error: any, data: any) => {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     return data
  //   }
  // })
}

export const deleteTask = async (taskId: string) => {
  // const matchedTask = tasks.find((t) => t.id === taskId)
  // if (!matchedTask) {
  //   throw new Error('Task not found')
  // }
  // tasks = tasks.filter((t) => t.id !== taskId)
  // return true

  const matchedTask = await Task.findById(taskId).exec()
  console.log(matchedTask)

  if (!matchedTask) {
    throw new Error('Task not found')
  }

  await Task.findByIdAndDelete(taskId).exec()
  return true
}

//
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//
