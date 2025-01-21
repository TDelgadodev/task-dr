import { IProject } from 'src/interface/project.interface';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  description: string;

  @Column()
  name: string;
}
