import { Test, TestingModule } from '@nestjs/testing';
import { WorkspaceGuestService } from './workspace-guest.service';

describe('WorkspaceGuestService', () => {
  let service: WorkspaceGuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkspaceGuestService],
    }).compile();

    service = module.get<WorkspaceGuestService>(WorkspaceGuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
