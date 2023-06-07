import mongoose, { Document, Schema } from 'mongoose' // Document lets us use the inbuilt id's
import { ITask } from '../1-types/Task'

export interface ITasksModel extends ITask, Document {}

const tasksSchema: Schema = new mongoose.Schema({
  //   taskId: {
  //     type: Number,
  //     required: false,
  //   },
  //   _id: {
  //     type: String,
  //     required: true,
  //   },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
  category: {
    type: Array,
    required: false,
  },
})

const Task = mongoose.model<ITasksModel>('Task', tasksSchema)
export default Task
