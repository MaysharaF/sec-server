import { User } from "../../database/models/user.entity"

export interface IUserService {
  create(payload): Promise<User>
  login({ username, password }): Promise<string>
  findAll(): Promise<User[]>
}