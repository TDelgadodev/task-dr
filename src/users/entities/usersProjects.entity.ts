import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UsersEntity } from './users.entity';
import { ProjectsEntity } from '../../projects/entities/projects.entity';
import { ACCESS_LEVELS } from '../../constants/role';

@Entity({ name: 'users_projects' })
export class UsersProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVELS })
  accessLevel: ACCESS_LEVELS;

  @ManyToOne(()=> UsersEntity, (user)=> user.projectsIncludes)
  user: UsersEntity;

  @ManyToOne(() => ProjectsEntity, (project)=> project.usersIncludes)
  project: ProjectsEntity;
}
