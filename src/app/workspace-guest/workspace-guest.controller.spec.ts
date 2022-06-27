import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceGuestController } from './workspace-guest.controller';

describe('WorkspaceGuestController', () => {
  let controller: WorkspaceGuestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkspaceGuestController],
    }).compile();

    controller = module.get<WorkspaceGuestController>(WorkspaceGuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
