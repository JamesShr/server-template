// tools/update-schema.ts
import * as fs from 'fs';
import * as path from 'path';

const GENERATOR_PATHS = [
  path.join(__dirname, '../plugins/src/generators/api-gateway/schema.json'),
  path.join(
    __dirname,
    '../plugins/src/generators/business-service/schema.json',
  ),
  path.join(__dirname, '../plugins/src/generators/data-management/schema.json'),
  path.join(
    __dirname,
    '../plugins/src/generators/data-typeorm-sqlite/schema.json',
  ),
];
const APPS_DIR = path.join(__dirname, '../apps');

function main() {
  // 掃描 apps/ 資料夾
  const apps = fs
    .readdirSync(APPS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const schemaPath of GENERATOR_PATHS) {
    // 讀取 schema.json
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

    // 更新 enum & x-prompt
    schema.properties.name.enum = apps;
    schema.properties.name['x-prompt'] = {
      message: 'Which app?',
      type: 'list',
      items: apps.map((app) => ({
        value: app,
        label: app,
      })),
    };

    fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
    console.log(`✅ ${schemaPath} 已更新，apps: ${apps.join(', ')}`);
  }
}

main();
