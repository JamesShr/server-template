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
  const dbName = formattedName
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase();
  const moduleName = formattedName.replace(/(^|-)([a-z])/g, (match, p1, p2) =>
    p2.toUpperCase()
  ); //單字第一個字大寫，其他小寫，例如：data-management -> DataManagement

  const templateOptions = {
    name: names(name).name,
    directory: directory || '',
    rpcName: rpcName,
    dbName: dbName,
    offsetFromRoot: offsetFromRoot(tree.root),
    moduleName: moduleName,
  };

  // use for array to handle multiple folder path

  const items = [
    {
      path: 'apps',
      clearDirectory: 'src',
      copyFolder: './files',
      createDirectory: false,
    },
    {
      path: 'libs/prisma/src/schema',
      clearDirectory: '',
      copyFolder: './prisma/schema',
      createDirectory: true,
    },
    {
      path: 'libs/prisma/src/client',
      clearDirectory: '',
      copyFolder: './prisma/client',
      createDirectory: true,
    },
  ];

  for (const item of items) {
    const targetDirectory = joinPathFragments(item.path, directory || '', name);
    if (item.createDirectory) {
      tree.write(targetDirectory, '');
    }

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

  // 編輯 libs/prisma/src/index.ts 補上 export 內容
  const indexPath = joinPathFragments('libs', 'prisma', 'src', 'index.ts');
  /**
   * 
   * export {
        PrismaClientModule as <%= moduleName %>PrismaClientModule,
        PrismaClientService as <%= moduleName %>PrismaClientService,
      } from './client/<%= name %>';
      export type * from './client/<%= name %>';
   */

      if (tree.exists(indexPath)) {
        const indexFile = tree.read(indexPath, 'utf-8');
        
        // 檢查檔案中是否已經有我們要添加的 export
        const newExport = `
          export {
            PrismaClientModule as ${moduleName}PrismaClientModule,
            PrismaClientService as ${moduleName}PrismaClientService,
          } from './client/${name}';
          export type * from './client/${name}';
        `;
    
        if (indexFile && !indexFile.includes(newExport)) {
          const updatedContent = `${indexFile}\n${newExport}\n`; // 在檔案末尾添加新的 export 內容
          tree.write(indexPath, updatedContent); // 寫回檔案
        }
      }

  // 格式化生成的檔案
  await formatFiles(tree);
}
