import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { dataTypeormSqliteGenerator } from './data-typeorm-sqlite';
import { DataTypeormSqliteGeneratorSchema } from './schema';

describe('data-typeorm-sqlite generator', () => {
  let tree: Tree;
  const options: DataTypeormSqliteGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await dataTypeormSqliteGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
