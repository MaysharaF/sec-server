import Pagination from 'src/specification/pagination/Pagination';
import {
  DeleteResult,
  FindConditions,
  UpdateResult,
  DeepPartial,
} from 'typeorm';
import { EntityFieldsNames } from 'typeorm/common/EntityFieldsNames';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IBaseRepository<T> {
  find(order?: {
    [P in EntityFieldsNames<T>]?: 'ASC' | 'DESC';
  }): Promise<T[]>;
  findById(id: number): Promise<T>;
  insert(payload: DeepPartial<T>): Promise<T>;
  update(id: number, payload: QueryDeepPartialEntity<T>): Promise<T>;
  softDelete(id: number): Promise<UpdateResult>;
  delete(id: number): Promise<DeleteResult>;
  findWithPagination(
    pageable: Pagination,
    where?: FindConditions<T>,
    order?: {
      [P in EntityFieldsNames<T>]?: 'ASC' | 'DESC';
    },
    withDeleted?: boolean,
  ): Promise<[T[], number]>;
  findOne(
    where: FindConditions<T>,
    order?: {
      [P in EntityFieldsNames<T>]?: 'ASC' | 'DESC';
    },
  ): Promise<T>;
  findMany(
    where: FindConditions<T>,
    order?: {
      [P in EntityFieldsNames<T>]?: 'ASC' | 'DESC';
    },
  ): Promise<T[]>;
}
