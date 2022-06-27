
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { Workspace } from "./workspace.entity"

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  type: string;

  @Column()
  workspace_id: number;

  @ManyToOne(() => Workspace, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'workspace_id' })
  workspace: Workspace;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}