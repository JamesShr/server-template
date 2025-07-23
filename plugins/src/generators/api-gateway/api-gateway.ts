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
   const dbName = formattedName.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(); 

  const templateOptions = {
    name: names(name).name,
    directory: directory || '',
    rpcName: rpcName,
    dbName: dbName,
    offsetFromRoot: offsetFromRoot(tree.root),
  };

  const targetDirectory = joinPathFragments('apps', directory || '', name);

  // 清空目標目錄中的 src 資料夾
  const srcDirectory = joinPathFragments(targetDirectory, 'src');
  
  // 如果 src 目錄存在，刪除所有檔案
  if (tree.exists(srcDirectory)) {
    tree.children(srcDirectory).forEach(child => {
      const filePath = joinPathFragments(srcDirectory, child);
      tree.delete(filePath);
    });
  }

  // 複製自訂的檔案到目標目錄
  generateFiles(
    tree,
    path.join(__dirname, './files'),
    targetDirectory,
    templateOptions
  );

  // 格式化生成的檔案
  await formatFiles(tree);
}
