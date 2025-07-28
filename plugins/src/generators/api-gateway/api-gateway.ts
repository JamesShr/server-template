import {
  Tree,
  generateFiles,
  joinPathFragments,
  names,
  offsetFromRoot,
  formatFiles,
} from '@nx/devkit';
import * as path from 'path';

interface ApplicationGeneratorSchema {
  name: string;
  directory?: string;
}

export default async function (tree: Tree, schema: ApplicationGeneratorSchema) {
  const { name, directory } = schema;

  // 計算不同格式的變數
  const formattedName = names(name).name;
  const rpcName = formattedName.toUpperCase().replace(/-/g, '_');
  const dbName = formattedName.toLowerCase().replace(/-/g, '_');;
  const moduleName = formattedName.replace(/(^|-)([a-z])/g, (match, p1, p2) =>
    p2.toUpperCase()
  );
  const variableName = formattedName
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  const templateOptions = {
    name: names(name).name,
    directory: directory || '',
    rpcName: rpcName,
    dbName: dbName,
    offsetFromRoot: offsetFromRoot(tree.root),
    moduleName: moduleName,
    variableName: variableName,
  };

  // use for array to handle multiple folder path

  const items = [
    {
      path: 'apps',
      clearDirectory: 'src',
      copyFolder: './files',
      createDirectory: false,
    }
  ];

  for (const item of items) {
    const targetDirectory = joinPathFragments(item.path, directory || '', name);
    // if (item.createDirectory) {
    //   tree.write(targetDirectory, '');
    // }

    // 清空目標目錄中的 src 資料夾
    const clearDirectory = joinPathFragments(
      targetDirectory,
      item.clearDirectory
    );

    // 如果 src 目錄存在，刪除所有檔案
    if (tree.exists(clearDirectory)) {
      tree.children(clearDirectory).forEach((child) => {
        const filePath = joinPathFragments(clearDirectory, child);
        tree.delete(filePath);
      });
    }

    generateFiles(
      tree,
      path.join(__dirname, item.copyFolder),
      targetDirectory,
      templateOptions
    );
  }

  // 格式化生成的檔案
  await formatFiles(tree);
}
