import { Request, Response } from 'express'
import * as helloWorldService from '../4-services/helloWorldServices'

import { db } from '../3-models/db'
import Task from '../3-models/tasks'

export const helloWorld = (req: Request, res: Response) => {
  const message = helloWorldService.helloWorld()
  res.json({ message: `${message}` })
}

//
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//

import * as taskService from '../4-services/helloWorldServices'

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks()
  res.json(tasks)
}

export const createOneTask = async (req: Request, res: Response) => {
  const name = req.body.name
  const description = req.body.description

  const newTask = await taskService.createOneTask(name, description)

  res.status(201).json(newTask)
}

export const getOneTask = async (req: Request, res: Response) => {
  // const taskId = parseInt(req.params.id)
  const taskId = req.params.id

  try {
    const matchedTask = await taskService.getOneTask(taskId)
    res.json(matchedTask)
  } catch (e) {
    res.status(404).send(e)
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  // const taskId = parseInt(req.params.id)
  const taskId = req.params.id

  try {
    const hasDeleted = await taskService.deleteTask(taskId)
    if (hasDeleted) {
      const deletedMessage: string = `Task ${taskId} deleted successfully!`
      res.status(204).json({ message: deletedMessage })
    } else {
      res.status(500).send(`Task ${taskId} deletion failed!`)
    }
  } catch (e) {
    res.status(404).send(e)
  }
}
